<template>
  <div class="alpha">
    <div class="body">
      <h2>Withdrawal Requests</h2>
      <div class="row trans-mgt">
        <div class="form-group fg--search">
          <button type="submit"><i class="fa fa-search"></i></button>
          <input type="text" class="input" placeholder="Search Withdrawal Requests..."/>
        </div>
        <div class="row filter_group">
          <!--          <div class="blue">Download transactions</div>-->
          <div class="action-content">
            <img src="@/assets/Filterslines.svg"  alt="Export"/>
            <p>Filter</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section-5">
      <div class="empty-state">
        <img src="@/assets/empty.svg" alt="empty">
        <p class="empty-state-text-1">You have nothing to see</p>
        <p class="empty-state-text-2">This is where your Withdrawal Requests will appear</p>
        <!--        <p class="empty-state-text-3">-->
        <!--          <i class='bx bx-plus' ></i>-->
        <!--          Transaction-->
        <!--        </p>-->
      </div>

      <!--       <div class="table">-->
      <!--          <table>-->
      <!--          <tr>-->
      <!--              <th>Sender</th>-->
      <!--              <th>Receiver</th>-->
      <!--              <th>Amount</th>-->
      <!--              <th>Transaction Reference</th>-->
      <!--              <th>Payment Reference</th>-->
      <!--              <th>Date</th>-->
      <!--              <th>Status</th>-->
      <!--              <th></th>-->
      <!--          </tr>-->

      <!--          <tbody>-->
      <!--          <tr>-->
      <!--              <td></td>-->
      <!--              <td></td>-->
      <!--              <td></td>-->
      <!--              <td></td>-->
      <!--              <td></td>-->
      <!--              <td></td>-->
      <!--              <td></td>-->
      <!--              <td></td>-->
      <!--          </tr>-->
      <!--          </tbody>-->

      <!--          </table>-->
      <!--          </div>-->

      <!--      <form>-->
      <!--        <div class="fields-alpha-2">-->
      <!--          &lt;!&ndash;      <label>Select Email</label>&ndash;&gt;-->
      <!--          <select class="select-form"  aria-placeholder="Select Users Email" required>-->
      <!--            <option value="" disabled>Select Users Email</option>-->
      <!--            <option></option>-->
      <!--          </select>-->

      <!--          &lt;!&ndash;      <label>Enter Profit</label>&ndash;&gt;-->
      <!--          <input type="number"  placeholder="Enter Profit"/>-->
      <!--          <button class="btn"  type="button">Submit</button>-->

      <!--          &lt;!&ndash;      <label>Enter Bonus</label>&ndash;&gt;-->
      <!--          <input type="number"  placeholder="Enter Bonus"/>-->
      <!--          <button class="btn"  type="button">Submit</button>-->

      <!--          &lt;!&ndash;      <label>Enter Ref Bonus</label>&ndash;&gt;-->
      <!--          <input type="number"  placeholder="Enter Ref Bonus"/>-->
      <!--          <button class="btn"  type="button">Submit</button>-->
      <!--        </div>-->
      <!--      </form>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "DashBoardWithdrawalRequestsView"
}
</script>

<style scoped>
.body{
  padding: 32px;
}
h2{
  font-weight: 700;
  font-size: 19px;
  line-height: 25px;
  color: #353542;
}
.row{
  display: flex;

}
.trans-mgt{
  margin-top: 17px;
  /* align-items: center; */
}
.filter_group{
  margin-left: auto;
  gap: 16px;
}

.white{
  display: flex;
  align-items: center;
  align-content: center;
  background-color: #FFFFFF;
  border: 1px solid #D0D5DD;
  font-size: 13px;
  padding:  6px 14px;
  border-radius: 5px;
  gap: 10px;
}
.blue{
  display: flex;
  align-items: center;
  align-content: center;
  padding: 6px 14px;
  border-radius: 5px;
  font-size: 13px;
  background-color: #1570EF;
  border: 1px solid #1570EF;
  color: #ffffff;
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

.fa-search{
  color: #667085;
  margin-right: 10px;
}
table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 2%;
}
.table{
  margin-left: 2%;
  margin-right: 3%;
}

tr{
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
  /*border: 1px solid #E3EBF6;*/
  text-align: center;
  align-items: center;
  align-content: center;
  padding: 20px 8px;
  /*letter-spacing: 1px;*/
  color: #667085;
  font-weight: 200;
  font-size: 15px;
  /*border-bottom: 1px solid #E3EBF6;*/
}

.empty-state{
  text-align: center;
  margin-top: 7%;
  margin-right: 8%;
}


.empty-state-text-1{
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  color: #353542;
  padding-top: 0.5%;
  padding-bottom: 0.5%;
}

.empty-state-text-2{
  font-weight: 200;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #353542;
  padding-bottom: 1.25%;
}

.empty-state-text-3{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 18px;
  gap: 8px;
  width: 130px;
  margin-right: auto;
  margin-left: auto;
  height: 35px;
  background: #0765FF;
  color: #FFFFFF;
  border: 1px solid #0765FF;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 5px;
  font-size: 13px;
}

.empty-state-text-3:hover{
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
}

.action-content{
  display: flex;
  align-items: center;
  align-content: center;
  padding: 8px 14px;
  gap: 8px;
  width: 88px;
  height: 36px;
  background: #FFFFFF;
  border: 1px solid #D0D5DD;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 4px;
  margin-right: 13px;
}

.action-content:hover{
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.action-content p {
  color: #667085;
  font-size: 13px;
}

.fields-alpha-2{
  box-shadow: 0 0 3px rgba(45, 82, 194, 0.1);
  background-color: #F9FBFD;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 4%;
  margin-left: 2%;
  margin-right: 3%;
  border-radius: 5px;
  margin-top: 2%;
}

label{
  color: white;
  padding-right: 5px;
  padding-left: 5px;
}

.btn{
  padding: 5px 15px;
  border-radius: 5px;
  color: white;
  background-color: #D23535;
  margin-left: 1%;
  border: 1px solid #D23535;
}

.btn:hover{
  box-shadow: 0 0 3px rgba(45, 82, 194, 0.1);
  -webkit-transition: all 0.35s ease;
  transition: all 0.35s ease;
}


input {
  box-sizing: border-box;
  border: 1px solid #D0D5DD;
  border-radius: 5px;
  -webkit-transition: 0.3s;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 10px;
  transition: 0.3s;
  outline: none;
  color: #667085;
  letter-spacing: 0.5px;
  margin-left: 35px;
}

input:focus {
  border: 1px solid #24405A;
}

select{
  box-sizing: border-box;
  border: 1px solid #D0D5DD;
  border-radius: 5px;
  -webkit-transition: 0.3s;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 10px;
  transition: 0.3s;
  outline: none;
  color: #667085;
  letter-spacing: 0.5px;
  margin-left: 35px;
}

select:focus {
  border: 1px solid #24405A;
}
</style>