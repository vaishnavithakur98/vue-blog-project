<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'

defineProps({
  slides: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <div class="slider-style2">
    <!-- Top Swiper Slider -->
    <swiper
      class="swiper-top"
      :slides-per-view="1"
      :loop="true"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
    >
      <swiper-slide
        class="slider-item"
        v-for="(slide, index) in slides"
        :key="index"
        :style="{ backgroundImage: `url(${slide.image})` }"
      >
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-7 col-lg-9 col-md-12">
              <div class="slider-item-inner">
                <div class="slider-item-content">
                  <div class="entry-cat">
                    <a :href="slide.categoryLink" class="categorie">{{
                      slide.category
                    }}</a>
                  </div>
                  <h1 class="entry-title">
                    <a :href="slide.link">{{ slide.title }}</a>
                  </h1>
                  <ul class="entry-meta list-inline">
                    <li class="post-author-img">
                      <a :href="slide.authorLink">
                        <img :src="slide.authorImage" alt="" />
                      </a>
                    </li>
                    <li class="post-author">
                      <a :href="slide.authorLink">{{ slide.author }}</a>
                    </li>
                    <li class="post-date">
                      <span class="dot"></span> {{ slide.date }}
                    </li>
                    <li class="post-timeread">
                      <span class="dot"></span> {{ slide.readTime }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <!-- Bottom Thumbnail Swiper Slider -->
    <swiper class="swiper-bottom container-fluid" :slides-per-view="4">
      <swiper-slide v-for="(slide, index) in slides" :key="index">
        <div class="post-item">
          <img :src="slide.image" alt="" />
          <div class="details">
            <h6 class="entry-title">
              <span>{{ slide.title }}</span>
            </h6>
            <ul class="entry-meta list-inline">
              <li class="post-date">
                <i class="fas fa-clock"></i> {{ slide.date }}
              </li>
            </ul>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
