<template>
     <div class="gallery-item">
        <img :src="thumbnailUrl" :alt="`image to ${title}`">
        <div class="gallery-item__overlay">
            <p class="gallery-item__title">{{title}}</p>
            <p class="gallery-item__kind">Branding</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

    export default defineComponent({
        props:{
            thumbnailUrl: String,
            title: String,
            kind: String
        }
    })
</script>

<style lang="scss" scoped>
@import '../styles/varibles.scss';
.gallery-item{
    position: relative;
    @media (max-width: $md-screen) {
        width: 47%;
    }
    @media (max-width: $xs-screen) {
        width: 100%;
    }
    &:hover{
        .gallery-item__overlay{
            opacity: 1;
        }
    }
    img{
        width: 100%;
        height: 100%;
    }
    &__overlay{
        position: absolute;
        top: 7px;
        left: 7px;
        right: 7px;
        bottom: 7px;
        opacity: 0;
        background-color: rgba($color: $main-color, $alpha: 0.7);
        color: $white;
        font-size: calculateRem(16px);
        font-weight: 300;
        padding: 0 10%;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: .4s ease-in-out;
        margin: 0;
        @media (max-width: $sm-screen) {
            padding: 0 3%;
        }
    }
    &__title{
        font-size: calculateRem(14px);
        position: relative;
        @media (max-width: $sm-screen) {
            font-size: calculateRem(9px);
        }
        &::before{
            content: '';
            position: absolute;
            bottom: -20px;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: $white;
        }
    }
    &__kind{
        font-size: calculateRem(10px);
        @media (max-width: $sm-screen) and (min-width: $sm-screen) {
            font-size: calculateRem(10px)
        }
    }
    &:nth-child(1) { grid-area: 1 / 1 / 3 / 2; }
    &:nth-child(2) { grid-area: 3 / 1 / 7 / 2; }
    &:nth-child(3) { grid-area: 7 / 1 / 10 / 2; }
    &:nth-child(4) { grid-area: 1 / 2 / 2 / 3; }
    &:nth-child(5) { grid-area: 2 / 2 / 5 / 3; }
    &:nth-child(6) { grid-area: 5 / 2 / 10 / 3; }
    &:nth-child(7) { grid-area: 1 / 3 / 4 / 4; }
    &:nth-child(8) { grid-area: 4 / 3 / 6 / 4; }
    &:nth-child(9) { grid-area: 6 / 3 / 8 / 4; }
    &:nth-child(10) { grid-area: 8 / 3 / 10 / 4; }
}
</style>