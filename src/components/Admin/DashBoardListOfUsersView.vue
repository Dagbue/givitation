<template>
  <div class="alpha">
    <div class="body">
      <h2>List of Requests</h2>
      <div class="row trans-mgt">
        <div class="form-group fg--search">
          <button type="submit" @click="search"><i class="fa fa-search"></i></button>
          <input type="text" class="input" v-model="searchQuery" placeholder="Search User List..." @input="search"/>
        </div>
        <div class="row filter_group">
          <div class="action-content">
            <img src="@/assets/Filterslines.svg" alt="Filter"/>
            <select v-model="sortOption" @change="sortItems" class="filter-select">
              <option value="createdAt-asc">Date Created (Ascending)</option>
              <option value="createdAt-desc">Date Created (Descending)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="section-5">
      <div class="empty-state" v-if="filteredItems.length === 0">
        <img src="@/assets/empty.svg" alt="empty">
        <p class="empty-state-text-1">You have nothing to see</p>
        <p class="empty-state-text-2">This is where your list of Requests will appear</p>
      </div>
      <div class="table" v-if="filteredItems.length > 0">
        <table>
          <tr>
            <th>FullName</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Request</th>
            <th>Age</th>
            <th>Country</th>
            <th>State</th>
            <th>Created At</th>
          </tr>
          <tbody v-for="child in paginatedItems" :key="child.email">
          <tr>
            <td>{{child.fullName}}</td>
            <td>{{child.email}}</td>
            <td>{{child.gender}}</td>
            <td>{{child.request}}</td>
            <td>{{child.age}}</td>
            <td>{{child.country}}</td>
            <td>{{child.state}}</td>
            <td>{{formatDate(child.createdAt)}}</td>
          </tr>
          </tbody>
        </table>
        <div class="pagination">
          <button @click="previousPage" :disabled="currentPage === 1" class="previous">Previous</button>
          <div class="page-indicator">
            Page {{ currentPage }} of {{ totalPages }}
          </div>
          <button @click="nextPage" :disabled="currentPage === totalPages" class="previous">Next</button>
        </div>
        <form @submit.prevent="deleteRequest">
          <div class="fields-alpha-2">
            <label class="fields-alpha-2-label">Select Email</label>
            <select class="select-form" v-model="selectEmail" aria-placeholder="Select Value" required>
              <option v-for="option in history" :key="option.email" :value="option.email">
                {{ option.email }}
              </option>
            </select>
            <button class="btn">Delete</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, getDocs, doc, deleteDoc, getFirestore } from "firebase/firestore";
import { db } from "@/firebase/config";
import Swal from "sweetalert2";

export default {
  name: "DashBoardListOfUsersView",
  data() {
    return {
      history: [],
      currentPage: 1,
      itemsPerPage: 10,
      selectEmail: "",
      searchQuery: "",
      sortOption: "createdAt-desc", // Default to newest first
    };
  },
  computed: {
    filteredItems() {
      if (!this.searchQuery) return this.sortedItems;
      const query = this.searchQuery.toLowerCase();
      return this.sortedItems.filter(
          (item) =>
              item.fullName.toLowerCase().includes(query) ||
              item.email.toLowerCase().includes(query)
      );
    },
    sortedItems() {
      const [field, order] = this.sortOption.split("-");
      return [...this.history].sort((a, b) => {
        if (field === "createdAt") {
          // Handle date sorting
          const dateA = a[field] instanceof Date ? a[field] : new Date(0);
          const dateB = b[field] instanceof Date ? b[field] : new Date(0);
          return order === "asc" ? dateA - dateB : dateB - dateA;
        }
        return 0; // Only createdAt sorting is supported
      });
    },
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.filteredItems.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.filteredItems.length / this.itemsPerPage);
    },
  },
  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    goToPage(pageNumber) {
      if (pageNumber > 0 && pageNumber <= this.totalPages) {
        this.currentPage = pageNumber;
      }
    },
    search() {
      this.currentPage = 1; // Reset to first page on search
    },
    sortItems() {
      this.currentPage = 1; // Reset to first page on sort
    },
    async deleteRequest() {
      if (!this.selectEmail) {
        await Swal.fire({
          icon: "error",
          title: "Error",
          text: "Please select an email to delete.",
        });
        return;
      }
      const db = getFirestore();
      const docRef = doc(db, "Requests", this.selectEmail);
      try {
        await deleteDoc(docRef);
        this.history = this.history.filter((item) => item.email !== this.selectEmail);
        this.selectEmail = "";
        await Swal.fire({
          icon: "success",
          title: "Success",
          text: "Deleted Successfully!",
        });
      } catch (error) {
        await Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message,
        });
      }
    },
    formatDate(timestamp) {
      if (!timestamp) return '';
      const date = timestamp instanceof Date ? timestamp : new Date(0);
      return date.toLocaleString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
    },
    convertToDate(createdAt) {
      if (!createdAt) return null;
      // Handle Firestore Timestamp object
      if (typeof createdAt.toDate === 'function') {
        return createdAt.toDate();
      }
      // Handle object with seconds and nanoseconds
      if (createdAt && typeof createdAt === 'object' && 'seconds' in createdAt) {
        return new Date(createdAt.seconds * 1000 + Math.floor(createdAt.nanoseconds / 1000000));
      }
      // Handle string timestamp (ISO or other formats)
      if (typeof createdAt === 'string') {
        const parsedDate = new Date(createdAt);
        return isNaN(parsedDate.getTime()) ? null : parsedDate;
      }
      return null;
    }
  },
  async created() {
    const querySnapshot = await getDocs(collection(db, "Requests"));
    querySnapshot.forEach((doc) => {
      let data = {
        fullName: doc.data().fullName,
        email: doc.data().email,
        gender: doc.data().gender,
        request: doc.data().request,
        age: doc.data().age,
        country: doc.data().country,
        state: doc.data().state,
        createdAt: this.convertToDate(doc.data().createdAt) // Convert using helper method
      };
      this.history.push(data);
    });
  },
};
</script>

<style scoped>
.body {
  padding: 32px;
}
h2 {
  font-weight: 700;
  font-size: 19px;
  line-height: 25px;
  color: #353542;
}
.row {
  display: flex;
}
.trans-mgt {
  margin-top: 17px;
}
.filter_group {
  margin-left: auto;
  gap: 16px;
}
.fg--search {
  background: white;
  position: relative;
  width: 400px;
  margin-left: 1%;
}
.fg--search input {
  width: 100%;
  padding: 10px;
  padding-left: 15px;
  display: block;
  background: #FFFFFF;
  border: 1px solid #D0D5DD;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 6px;
}
.fg--search button {
  background: transparent;
  border: none;
  cursor: pointer;
  display: inline-block;
  font-size: 10px;
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px;
  margin-top: 5px;
}
.fa-search {
  color: #667085;
  margin-right: 10px;
}
table {
  border-collapse: collapse;
  width: 100%;
}
.table {
  margin-left: 2%;
  margin-right: 3%;
}
tr {
  border: 1px solid #E3EBF6;
}
th {
  background-color: #F9FBFD;
  padding: 10px;
  letter-spacing: 0.5px;
  font-weight: 500;
  font-size: 14px;
  color: #667085;
  text-align: center;
}
td {
  text-align: center;
  align-items: center;
  align-content: center;
  padding: 20px 8px;
  color: #667085;
  font-weight: 200;
  font-size: 15px;
}
.empty-state {
  text-align: center;
  margin-top: 7%;
  margin-right: 8%;
}
.empty-state-text-1 {
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  color: #353542;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
}
.empty-state-text-2 {
  font-weight: 200;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #353542;
  padding-bottom: 1.25%;
}
.action-content {
  display: flex;
  align-items: center;
  align-content: center;
  padding: 8px 14px;
  gap: 8px;
  width: 200px;
  height: 36px;
  background: #FFFFFF;
  border: 1px solid #D0D5DD;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 4px;
  margin-right: 13px;
}
.action-content:hover {
  box-shadow: 0 0 5px rgba(16, 24, 40, 0.2);
}
.action-content p {
  color: #667085;
  font-size: 13px;
}
.filter-select {
  border: none;
  background: transparent;
  color: #667085;
  font-size: 13px;
  width: 100%;
}
.pagination {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding-top: 8px;
}
.previous {
  text-align: center;
  padding: 8px 14px;
  gap: 8px;
  font-size: 12px;
  width: 100px;
  height: 30px;
  background: transparent;
  color: #667085;
  border: 1px solid #E3EBF6;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 4px;
}
.previous:hover {
  box-shadow: 0 0 5px rgba(16, 24, 40, 0.2);
}
.page-indicator {
  color: #667085;
  font-weight: 200;
  font-size: 13px;
}
.fields-alpha-2 {
  background-color: #818a91;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: 25%;
  margin-right: 25%;
  border-radius: 5px;
  margin-top: 2%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
}
.fields-alpha-2-label {
  color: #101828;
}
.btn {
  color: #ffffff;
  background-color: #D23535;
  border: 1px solid #D23535;
  padding: 10px 10px;
  text-align: center;
  width: 18%;
  border-radius: 5px;
  transition: all 0.3s ease-in;
}
.btn:hover {
  background-color: #ffffff;
  border: 1px solid #ffffff;
  color: #D23535;
}
select {
  width: 45%;
  padding: 4px;
  display: block;
  background: #FFFFFF;
  border: 1px solid #D0D5DD;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 5px;
}
</style>