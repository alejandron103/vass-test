<script setup lang="ts">
  import Header from './components/Header.vue'
  import Banner from './components/Banner.vue'
  import GridGallery from './components/GridGallery.vue';
  import { CONSTANTS } from './utils/contants'
  import Footer from './components/Footer.vue';
</script>

<template>
  <Header />
  <Banner 
    :title="CONSTANTS.BANNER_INFO.TITLE"
    :description="CONSTANTS.BANNER_INFO.DESCRIPTION"
    :button="CONSTANTS.BANNER_INFO.BUTTON" 
  />
  <GridGallery />
  <Footer />
</template>