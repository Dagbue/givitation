<template>
  <div class="auth-screen">
    <div class="auth-card">
      <div class="auth-header">
        <img alt="company logo" src="@/assets/companylogo.png" class="logo" />
        <p class="tagline">Exclusive Profile Access</p>
      </div>

      <div class="search-section">
        <h2 class="search-title">Access Member Profile</h2>
        <p class="search-description">
          Enter the member's unique profile ID to view their exclusive profile
        </p>

        <div class="search-form">
          <div class="input-group">
            <div class="input-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
            </div>
            <input
                v-model="searchQuery"
                @keypress="handleKeyPress"
                type="text"
                placeholder="Enter profile ID (e.g., MC-1234567)"
                class="search-input"
                :disabled="isLoading"
            />
          </div>

          <button
              @click="handleSearch"
              :disabled="isLoading || !isValidUniqueId"
              class="search-button"
          >
            <span v-if="!isLoading" class="button-content">
              <svg class="button-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
              Access Profile
            </span>
            <span v-else class="loading-content">
              <div class="spinner"></div>
              Verifying...
            </span>
          </button>
        </div>

        <div v-if="errorMessage" class="error-message">
          <svg class="error-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          {{ errorMessage }}
        </div>
      </div>

      <div class="features-section">
        <div class="feature-item">
          <div class="feature-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
            </svg>
          </div>
          <span>Verified Profiles</span>
        </div>
        <div class="feature-item">
          <div class="feature-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
            </svg>
          </div>
          <span>Secure Access</span>
        </div>
        <div class="feature-item">
          <div class="feature-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
          <span>Premium Members</span>
        </div>
      </div>
    </div>

    <div class="auth-footer">
      <p class="footer-text">
        Exclusively on
        <a href="https://www.matchconnecting.com/" target="_blank" class="footer-link">
          MatchConnecting.com
        </a>
      </p>
      <p class="disclaimer">
        Creating new and exciting opportunities for mutually beneficial relationships
      </p>
    </div>
  </div>
</template>

<script>
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";
import Swal from "sweetalert2";

export default {
  name: "ProfileAuth",
  data() {
    return {
      searchQuery: '',
      isLoading: false,
      errorMessage: ''
    };
  },
  computed: {
    isValidUniqueId() {
      // Validate that uniqueId starts with 'MC-' and is followed by 7 alphanumeric characters
      return /^MC-[A-Z0-9]{7}$/.test(this.searchQuery.trim());
    }
  },
  methods: {
    async handleSearch() {
      if (!this.searchQuery.trim()) {
        this.errorMessage = 'Please enter a profile ID';
        return;
      }

      if (!this.isValidUniqueId) {
        this.errorMessage = 'Invalid profile ID format. It should be MC- followed by 7 letters or numbers (e.g., MC-1234567)';
        return;
      }

      this.isLoading = true;
      this.errorMessage = '';

      try {
        const profilesRef = collection(db, "Profiles");
        const q = query(profilesRef, where("uniqueId", "==", this.searchQuery.trim()));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          // Store uniqueId in localStorage
          localStorage.setItem('profileUniqueId', this.searchQuery.trim());
          this.$router.push('/viewProfile');
        } else {
          this.errorMessage = 'Profile not found. Please check the profile ID.';
        }
      } catch (error) {
        console.error("Error searching profile:", error);
        this.errorMessage = 'An error occurred while verifying the profile ID. Please try again.';
        await Swal.fire({
          icon: "error",
          title: "Error",
          text: this.errorMessage,
        });
      } finally {
        this.isLoading = false;
      }
    },
    handleKeyPress(event) {
      if (event.key === 'Enter') {
        this.handleSearch();
      }
    }
  }
};
</script>

<style scoped>
.auth-screen {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
}

.auth-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 48px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 32px 64px rgba(0, 0, 0, 0.5);
}

.auth-header {
  text-align: center;
  margin-bottom: 40px;
}

.logo-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 16px;
}

.logo-icon {
  width: 48px;
  height: 48px;
  background: #C30000;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
}

.logo-icon svg {
  width: 24px;
  height: 24px;
}

.brand-name {
  font-size: 2.5rem;
  font-weight: 700;
  color: #C30000;
}

.tagline {
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
}

.search-section {
  margin-bottom: 40px;
}

.search-title {
  font-size: 1.75rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 12px;
  color: #ffffff;
}

.search-description {
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 32px;
  line-height: 1.6;
}

.search-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-group {
  position: relative;
}

.input-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.5);
  z-index: 2;
}

.input-icon svg {
  width: 20px;
  height: 20px;
}

.search-input {
  width: 100%;
  padding: 16px 16px 16px 52px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.search-input:focus {
  outline: none;
  border-color: #C30000;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 0 4px rgba(195, 0, 0, 0.2);
}

.search-input:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.search-button {
  padding: 16px 32px;
  background: #C30000;
  color: #ffffff;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 56px;
}

.search-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(195, 0, 0, 0.4);
  background: #a00000;
}

.search-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.button-content,
.loading-content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.button-icon {
  width: 20px;
  height: 20px;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top: 2px solid #ffffff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-message {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #ff6b6b;
  font-weight: 500;
  padding: 12px 16px;
  background: rgba(255, 107, 107, 0.1);
  border: 1px solid rgba(255, 107, 107, 0.3);
  border-radius: 8px;
}

.error-icon {
  width: 16px;
  height: 16px;
}

.features-section {
  display: flex;
  justify-content: space-around;
  gap: 24px;
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.feature-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
}

.feature-icon {
  width: 40px;
  height: 40px;
  background: rgba(195, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #C30000;
}

.feature-icon svg {
  width: 20px;
  height: 20px;
}

.feature-item span {
  font-size: 0.875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
}

.auth-footer {
  margin-top: 40px;
  text-align: center;
}

.footer-text {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.875rem;
  margin-bottom: 8px;
}

.footer-link {
  color: #C30000;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: #ff0000;
  text-decoration: underline;
}

.disclaimer {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.75rem;
  font-style: italic;
}

@media (max-width: 640px) {
  .auth-card {
    padding: 32px 24px;
  }

  .brand-name {
    font-size: 2rem;
  }

  .features-section {
    flex-direction: column;
    gap: 16px;
  }

  .feature-item {
    flex-direction: row;
    justify-content: flex-start;
    text-align: left;
  }
}
</style>