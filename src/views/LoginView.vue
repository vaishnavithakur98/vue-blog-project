<template>
  <!-- <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="Username" required />
      <input
        type="password"
        v-model="password"
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
    </form>
  </div> -->

  <section class="mt-60 mb-60">
    <div class="container">
      <div class="sign widget">
        <div class="section-title">
          <h5>Login</h5>
        </div>
        <form action="#" class="sign-form widget-form" method="post">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Username*"
              name="username"
              value=""
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              placeholder="Password*"
              name="password"
              value=""
            />
          </div>
          <div class="sign-controls form-group">
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                class="custom-control-input"
                id="rememberMe"
              />
              <label class="custom-control-label" for="rememberMe"
                >Remember Me</label
              >
            </div>
            <a href="#" class="btn-link ml-auto">Forgot Password?</a>
          </div>
          <div class="form-group">
            <button type="submit" class="btn-custom">Login now</button>
          </div>

          <p class="form-group text-center">
            Don't have an account?
            <a href="/registration" class="btn-link">Create One</a>
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
// import { ref } from 'vue'
// import { useRouter } from 'vue-router'

// const username = ref('')
// const password = ref('')
// const router = useRouter()

// const login = () => {
//   if (username.value === 'user' && password.value === 'password') {
//     localStorage.setItem('isLoggedIn', 'true')
//     router.push('/dashboard')
//   } else {
//     alert('Invalid credentials')
//   }
// }
</script>
