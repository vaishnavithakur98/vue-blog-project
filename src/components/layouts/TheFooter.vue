<script setup>
const currentYear = new Date().getFullYear()

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="copyright">
            <p>
              &copy; Copyright {{ currentYear }}
              <router-link to="/">My Vue App</router-link>, All rights reserved.
            </p>
          </div>
          <div class="back">
            <a href="#" class="back-top" @click.prevent="scrollToTop">
              <i class="fas fa-arrow-up"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<!-- <style scoped>
.footer .back {
  margin-top: 10px;
}

.footer .back-top {
  color: #007bff;
  font-size: 1.25rem;
  text-decoration: none;
}

.footer .back-top:hover {
  color: #0056b3;
}
</style> -->
