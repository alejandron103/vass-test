<template>
    <section class="banner">
        <div class="banner__info">
            <h3 class="banner__title">{{title}}</h3>
            <p class="banner__description">{{description}}</p>
            <Button class="t-uppercase" :text="button.TEXT" :trigger="button.TRIGGER" />
        </div>
    </section>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import Button from './Button.vue';
    export default defineComponent( {
    components: { Button },
    props: {
        "title": String,
        "description": String,
        "button": {
            type: Object,
            default() {
                return { text: "View our work", trigger: null };
            }
        }
    }
})
</script>

<style lang="scss" scoped>
    @import '../styles/varibles.scss';
    .banner{
        width: 100%;
        height: 80vh;
        background-color: $main-color;
        margin-top: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $white;
        @media (max-width: $md-screen) {
            height: 70vh;
        }
        &__title{
            font-size: calculateRem(28px);
            font-weight: 400;
            @media (max-width: $md-screen) {
                line-height: 135%;
            }
        }
        &__description{
            font-size: calculateRem(13px);
            line-height: 135%;
            width: 55%;
            margin: 30px auto;
            @media (max-width: $md-screen) {
                width: 70%;
            }
        }
    }
</style>