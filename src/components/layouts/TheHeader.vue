<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const isLoggedIn = computed(() => localStorage.getItem('isLoggedIn') === 'true')
const router = useRouter()

const logout = () => {
  localStorage.removeItem('isLoggedIn')
  router.push('/')
}
</script>

<template>
  <header class="header fixed-top">
    <div class="header-main navbar-expand-xl">
      <div class="container-fluid">
        <div class="header-main">
          <div class="site-branding">
            <router-link class="dark-logo" to="/">
              <img src="@/assets/img/logo/logo-dark.png" alt="Logo Dark" />
            </router-link>
            <router-link class="light-logo" to="/">
              <img src="@/assets/img/logo/logo-white.png" alt="Logo Dark" />
            </router-link>
          </div>

          <div class="main-menu header-navbar">
            <nav class="navbar">
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/blogs"
                      >Blogs</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/about"
                      >About</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/contact"
                      >Contact</router-link
                    >
                  </li>
                  <li class="nav-item">
                    <router-link
                      v-if="!isLoggedIn"
                      class="nav-link"
                      to="/login"
                    >
                      Login
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link
                      v-if="isLoggedIn"
                      class="nav-link"
                      to="/dashboard"
                    >
                      Dashboard
                    </router-link>
                  </li>
                </ul>
              </div>
              <button
                v-if="isLoggedIn"
                class="btn btn-outline-secondary"
                @click="logout"
              >
                Logout
              </button>
            </nav>
          </div>

          <!-- header actions -->
          <div class="header-action-items">
            <ul class="header-social list-inline">
              <li>
                <a href="#"><i class="fab fa-instagram"></i></a>
              </li>
            </ul>
            <!--theme-switch-->
            <div class="theme-switch-wrapper switch-icon">
              <label class="theme-switch" for="checkbox">
                <input type="checkbox" id="checkbox" />
                <span class="slider round">
                  <i class="lar la-sun icon-light"></i>
                  <i class="lar la-moon icon-dark"></i>
                </span>
              </label>
            </div>

            <!--navbar-toggler-->
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
