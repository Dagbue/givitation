<template>
  <div class="profile-container">
    <div class="navigation-header">
      <button @click="handleBackToHome" class="back-button">
        <svg class="back-icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
        <span>Back to Home</span>
      </button>

      <img alt="company logo" src="@/assets/companylogo.png" class="logo" />
    </div>

    <div class="profile-card" v-if="profile">
      <div class="profile-header">
        <div class="profile-main-info">
          <div class="profile-image-section">
            <div class="profile-image-container">
              <img
                  :src="profile.image"
                  :alt="`${profile.firstName} ${profile.lastName}`"
                  class="profile-image"
              />
              <div :class="['verification-badge', { 'unverified': profile.status === 'inActive' }]">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>

            <div class="quick-stats">
              <div class="stat-item">
                <span class="stat-number">{{ formatNumber(profile.meetups) }}</span>
                <span class="stat-label">Meetings</span>
              </div>
              <div class="stat-item premium">
                <span class="stat-number">{{ formatCurrency(profile.allowance) }}</span>
                <span class="stat-label">Allowance</span>
              </div>
            </div>
          </div>

          <div class="profile-title-section">
            <h1 class="profile-name">{{ profile.firstName }} {{ profile.lastName }}</h1>
            <p class="profile-age-location">{{ age }} • {{ profile.nationality }}</p>

            <div class="profile-badges">
              <span :class="['badge', { 'verified': profile.status === 'active', 'unverified': profile.status === 'inActive' }]">
                {{ profile.status === 'active' ? 'Verified' : 'Unverified' }}
              </span>
              <span class="badge premium">Premium Member</span>
            </div>
          </div>
        </div>
      </div>

      <div class="profile-details">
        <div class="section">
          <h3 class="section-title">
            <svg class="section-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            Personal Information
          </h3>
          <div class="detail-grid">
            <div class="detail-item">
              <span class="detail-label">First Name</span>
              <span class="detail-value">{{ profile.firstName }}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Last Name</span>
              <span class="detail-value">{{ profile.lastName }}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Email</span>
              <span class="detail-value">{{ profile.email }}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Date of Birth</span>
              <span class="detail-value">{{ formatDate(profile.dob) }}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Nationality</span>
              <span class="detail-value">{{ profile.nationality }}</span>
            </div>
          </div>
        </div>

        <div class="section">
          <h3 class="section-title">
            <svg class="section-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>
            </svg>
            Arrangement Details
          </h3>
          <div class="detail-grid">
            <div class="detail-item highlight">
              <span class="detail-label">Number of Meetups</span>
              <span class="detail-value">{{ formatNumber(profile.meetups) }}</span>
            </div>
            <div class="detail-item">
              <span class="detail-label">Amount Received</span>
              <span class="detail-value currency">{{ formatCurrency(profile.amountReceived) }}</span>
            </div>
            <div class="detail-item premium-item">
              <span class="detail-label">Allowance</span>
              <span class="detail-value currency premium">{{ formatCurrency(profile.allowance) }}</span>
            </div>
          </div>
        </div>

        <div class="action-section">
          <div class="primary-actions">
            <button class="btn btn-secondary">
              <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              Add to Favorites
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="branding-footer">
      <div class="branding-content">
        <p class="branding-text">
          Exclusively on
          <a href="https://www.matchconnecting.com/" target="_blank" class="brand-link">
            Match Connecting
          </a>
        </p>
        <p class="branding-tagline">
          Creating new and exciting opportunities for mutually beneficial relationships
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "@/firebase/config";
import Swal from "sweetalert2";

export default {
  name: "ProfileViewPage",
  data() {
    return {
      profile: null,
    };
  },
  computed: {
    age() {
      if (!this.profile || !this.profile.dob) return '';
      const today = new Date();
      const birthDate = new Date(this.profile.dob);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      return age;
    },
  },
  methods: {
    async fetchProfile() {
      const uniqueId = localStorage.getItem('profileUniqueId'); // Retrieve uniqueId from localStorage
      if (!uniqueId) {
        console.error("No unique ID found in localStorage");
        this.showError("No profile ID provided. Please search for a profile first.");
        return;
      }

      if (!/^MC-[A-Z0-9]{7}$/.test(uniqueId)) {
        console.error("Invalid unique ID format in localStorage");
        this.showError("Invalid profile ID format. Please enter a valid ID (e.g., MC-1234567).");
        localStorage.removeItem('profileUniqueId'); // Clear invalid ID
        return;
      }

      try {
        // Query Firestore to find the profile with the matching uniqueId
        const profilesRef = collection(db, "Profiles");
        const q = query(profilesRef, where("uniqueId", "==", uniqueId));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const profileDoc = querySnapshot.docs[0]; // Get the first matching document
          const profileEmail = profileDoc.id; // Document ID is the email
          const docRef = doc(db, "Profiles", profileEmail);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const data = docSnap.data();
            this.profile = {
              firstName: data.firstName || '',
              lastName: data.lastName || '',
              email: data.email || '',
              dob: data.dob || '',
              nationality: data.nationality || '',
              meetups: data.meetups || '0',
              amountReceived: data.amountReceived || '$0',
              allowance: data.allowance || '$0',
              image: data.image || 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
              status: data.status || 'inActive',
              createdAt: this.convertToDate(data.createdAt),
            };
            // Optionally clear localStorage after successful fetch to prevent stale data
            localStorage.removeItem('profileUniqueId');
          } else {
            console.error("No such profile exists!");
            this.showError("Profile not found for the provided ID.");
            localStorage.removeItem('profileUniqueId');
          }
        } else {
          console.error("No profile found with the provided unique ID!");
          this.showError("No profile found with the provided unique ID.");
          localStorage.removeItem('profileUniqueId');
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        this.showError("An error occurred while fetching the profile. Please try again.");
        localStorage.removeItem('profileUniqueId');
      }
    },
    showError(message) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: message,
      });
    },
    formatDate(dateString) {
      if (!dateString) return '';
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    },
    convertToDate(createdAt) {
      if (!createdAt) return null;
      if (typeof createdAt.toDate === 'function') {
        return createdAt.toDate();
      }
      if (createdAt && typeof createdAt === 'object' && 'seconds' in createdAt) {
        return new Date(createdAt.seconds * 1000 + Math.floor(createdAt.nanoseconds / 1000000));
      }
      if (typeof createdAt === 'string') {
        const parsedDate = new Date(createdAt);
        return isNaN(parsedDate.getTime()) ? null : parsedDate;
      }
      return null;
    },
    formatNumber(value) {
      if (!value || value === '0') return '0';
      const number = parseFloat(value.replace(/[^0-9.]/g, '')); // Remove non-numeric characters
      return isNaN(number) ? '0' : number.toLocaleString('en-US', { minimumFractionDigits: 0 });
    },
    formatCurrency(value) {
      if (!value || value === '$0') return '$0';
      const number = parseFloat(value.replace(/[^0-9.]/g, '')); // Remove $ and non-numeric characters
      return isNaN(number) ? '$0' : `$${number.toLocaleString('en-US', { minimumFractionDigits: 0 })}`;
    },
    handleBackToHome() {
      localStorage.removeItem('profileUniqueId'); // Clear localStorage on navigation
      this.$router.push('/profileView'); // Redirect to ProfileAuth page
    },
  },
  async created() {
    await this.fetchProfile();
  },
};
</script>

<style scoped>
.profile-container {
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
}

.navigation-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  padding: 16px 0;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  padding: 12px 20px;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  backdrop-filter: blur(10px);
}

.back-button:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateX(-4px);
}

.back-icon {
  width: 20px;
  height: 20px;
}

.header-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-icon {
  width: 32px;
  height: 32px;
  background: #C30000;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
}

.brand-icon svg {
  width: 16px;
  height: 16px;
}

.brand-text {
  font-size: 1.25rem;
  font-weight: 700;
  color: #C30000;
}

.profile-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 32px 64px rgba(0, 0, 0, 0.5);
}

.profile-header {
  position: relative;
  padding: 48px 40px;
  background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%);
}

.profile-main-info {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 40px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.profile-image-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

.profile-image-container {
  position: relative;
  display: inline-block;
}

.profile-image {
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(195, 0, 0, 0.3);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.05);
}

.verification-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  background: #10b981;
  border: 3px solid #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.verification-badge svg {
  width: 16px;
  height: 16px;
}

.quick-stats {
  display: flex;
  gap: 20px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.stat-item.premium {
  background: rgba(195, 0, 0, 0.2);
  border-color: rgba(195, 0, 0, 0.3);
}

.stat-number {
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
}

.stat-item.premium .stat-number {
  color: #C30000;
}

.stat-label {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;
}

.profile-title-section {
  color: #ffffff;
}

.profile-name {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 8px;
  text-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
}

.profile-age-location {
  font-size: 1.25rem;
  font-weight: 500;
  opacity: 0.9;
  margin-bottom: 20px;
}

.profile-badges {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.badge {
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.badge.verified {
  background: rgba(16, 185, 129, 0.2);
  color: #10b981;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.badge.premium {
  background: rgba(195, 0, 0, 0.2);
  color: #C30000;
  border: 1px solid rgba(195, 0, 0, 0.3);
}

.profile-details {
  padding: 40px;
}

.section {
  margin-bottom: 40px;
}

.section:last-child {
  margin-bottom: 0;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 2px solid rgba(195, 0, 0, 0.3);
}

.section-icon {
  width: 24px;
  height: 24px;
  color: #C30000;
}

.detail-grid {
  display: grid;
  gap: 16px;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.detail-item:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(195, 0, 0, 0.3);
  transform: translateY(-2px);
}

.detail-item.highlight {
  background: rgba(195, 0, 0, 0.1);
  border-color: rgba(195, 0, 0, 0.3);
}

.detail-item.premium-item {
  background: rgba(195, 0, 0, 0.15);
  border-color: rgba(195, 0, 0, 0.4);
}

.detail-label {
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.875rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.detail-value {
  font-weight: 600;
  color: #ffffff;
  font-size: 1rem;
  text-align: right;
}

.detail-value.currency {
  color: #10b981;
  font-weight: 700;
  font-size: 1.125rem;
}

.detail-value.premium {
  color: #C30000;
  font-weight: 700;
  font-size: 1.25rem;
}

.action-section {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.primary-actions {
  display: flex;
  gap: 16px;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 24px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  flex: 1;
}

.btn-icon {
  width: 20px;
  height: 20px;
}


.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.branding-footer {
  margin-top: 40px;
  text-align: center;
  padding: 32px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.branding-content {
  margin-bottom: 16px;
}

.branding-text {
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 8px;
}

.brand-link {
  color: #C30000;
  text-decoration: none;
  font-weight: 700;
  transition: color 0.2s ease;
}

.brand-link:hover {
  color: #ff0000;
  text-decoration: underline;
}

.branding-tagline {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.875rem;
  font-style: italic;
  line-height: 1.5;
}

.verification-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  background: #10b981; /* Green for active/Verified */
  border: 3px solid #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.verification-badge.unverified {
  background: #f59e0b; /* Amber for inActive/Unverified */
}

.badge.verified {
  background: rgba(16, 185, 129, 0.2);
  color: #10b981;
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.badge.unverified {
  background: rgba(245, 158, 11, 0.2);
  color: #f59e0b;
  border: 1px solid rgba(245, 158, 11, 0.3);
}

@media (max-width: 768px) {
  .navigation-header {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }

  .profile-main-info {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 24px;
  }

  .profile-name {
    font-size: 2.25rem;
  }

  .profile-details {
    padding: 24px;
  }

  .primary-actions {
    flex-direction: column;
  }

  .detail-item {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }

  .detail-value {
    text-align: center;
  }

  .quick-stats {
    justify-content: center;
  }
}
</style>