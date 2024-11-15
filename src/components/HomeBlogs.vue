<script setup>
defineProps({
  blogs: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <section class="mt-90">
    <div class="container-fluid">
      <div class="row">
        <div
          v-for="(blog, index) in blogs"
          :key="index"
          class="col-xl-4 col-lg-6 col-md-6"
        >
          <div class="post-card">
            <div class="post-card-image">
              <a :href="blog.link">
                <img :src="blog.image" :alt="blog.title" />
              </a>
            </div>
            <div class="post-card-content">
              <div class="entry-cat">
                <a :href="blog.categoryLink" class="categorie">
                  {{ blog.category }}
                </a>
              </div>

              <h5 class="entry-title">
                <a :href="blog.link">{{ blog.title }}</a>
              </h5>

              <div class="post-exerpt">
                <p>{{ blog.excerpt }}</p>
              </div>

              <ul class="entry-meta list-inline">
                <li class="post-author-img">
                  <a :href="blog.authorLink">
                    <img :src="blog.authorImage" :alt="blog.author" />
                  </a>
                </li>
                <li class="post-author">
                  <a :href="blog.authorLink">{{ blog.author }}</a>
                </li>
                <span class="dot"></span>
                {{
                  blog.date
                }}
              </ul>
            </div>
          </div>
        </div>

        <a href="/blogs" class="link-redirect">
          <button type="button" class="btn-custom">View More</button>
        </a>
      </div>
    </div>
  </section>
</template>

<style>
.link-redirect {
  align-items: center !important;
  display: flex !important;
  justify-content: center !important;
  padding: 20px 0px 20px 0px;
  margin-bottom: 60px;
}
</style>
