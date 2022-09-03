<template>
    <section class="filters">
        <button @click="showAll">All</button>
        <button @click="showEven">Even</button>
        <button @click="showOdd">odd</button>
    </section>
    <section class="grid-gallery">
        <Card
            v-if="isShowAll"
            v-for="galleryItem in galleryItems"
            :thumbnailUrl="galleryItem.thumbnailUrl"
            :title="galleryItem.title"
        />

        <Card
            v-if="isShowEven"
            v-for="evenItem in eventItems"
            :thumbnailUrl="evenItem.thumbnailUrl"
            :title="evenItem.title"
        />

        <Card
            v-if="isShowOdd"
            v-for="oddItem in oddItems"
            :thumbnailUrl="oddItem.thumbnailUrl"
            :title="oddItem.title"
        />
    </section>
    <button class="btn-red show-more" @click="">Show Me More</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'

import Card from './Card.vue';

    export default defineComponent({
    computed: {
        ...mapGetters("gallery", {
            galleryItems: "getGalleryItems",
            eventItems: "getEvenItems",
            oddItems: "getOddItems",
        })
    },
    data() {
        return {
            isShowAll: true,
            isShowEven: false,
            isShowOdd: false
        };
    },
    mounted() {
        this.$store.dispatch("gallery/getGalleryItems");
    },
    methods: {
        showEven() {
            this.isShowAll = false;
            this.isShowEven = true;
            this.isShowOdd = false;
        },
        showOdd() {
            this.isShowAll = false;
            this.isShowEven = false;
            this.isShowOdd = true;
        },
        showAll() {
            this.isShowAll = true;
            this.isShowEven = false;
            this.isShowOdd = false;
        },
    },
    components: { Card }
})
</script>

<style lang="scss" scoped>
@import '../styles/varibles.scss';
.grid-gallery {
    width: 70%;
    margin: 60px auto 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(9, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    max-height: 120vh;
    @media (max-width: $md-screen) {
        max-height: unset;
        display: flex;
        flex-wrap: wrap;
        width: 80%;
    }
}
.filters{
    margin-top: 50px;
    button{
        font-size: calculateRem(13px);
        color: $grey-color;
    }
}
.show-more{
    margin: 30px 0;
}
</style>