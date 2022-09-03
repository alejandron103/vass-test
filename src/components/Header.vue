<template>
  <header class="header">
    <img src="../assets/logo.png" class="logo" alt="Logo prueba técnica">
    <span class="material-icons menu" @click="toggleMobileMenu">menu</span>
    <nav class="header__navigation" :class="{'show-menu': showMenu }">
      <span 
        class="material-icons close" 
        :show="showMenu" 
        @click="toggleMobileMenu">
      close
      </span>
      <a 
        v-for="(item, index) in navigationItems" 
        :class="{'active': index === 0 }" 
        :href="item.ANCHOR">
        {{item.TEXT}}
      </a>
      <span class="header__search material-icons">search</span>
    </nav>
  </header>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import { CONSTANTS } from '../utils/contants'
  export default defineComponent( {
    data() {
      return {
        navigationItems: CONSTANTS.NAVIGATION_ITEMS,
        showMenu: false
      }
    },
    methods:{
      toggleMobileMenu(){
        this.showMenu = !this.showMenu
      }
    }
  })
</script>

<style scoped lang="scss">
  @import '../styles/varibles.scss'; 
  .header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 0 15%;
    background-color: $white;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 2;
    @media (max-width: $md-screen) {
      padding: 0 5%;
    }
    .menu{
      display: none;
      cursor: pointer;
      padding: 5px;
      @media (max-width: $md-screen) {
        display: block;
        position: absolute;
        right: 10%;
      }
    }
    .close{
      display: none;
      cursor: pointer;
      padding: 5px;
      @media (max-width: $md-screen) {
        display: block;
        position: absolute;
        right: 5%;
        top: 10px;
        color: $white;
      }
    }

    &__navigation{
      display: flex;
      align-items: center;
      @media (max-width: $md-screen) {
        opacity: 0;
      }
      &.show-menu{
        opacity: 1;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: $main-color;
        flex-direction: column;
        justify-content: space-around;
        a{
          color: $white;
          font-size: calculateRem(20px);
          &.active{
            background-color: $white;
            color: $main-color;
            width: 60%;
            padding: 6px 0;
            margin: 0 auto;
          }
        }
      }

      a{
        font-weight: 600;
        margin-left: 25px;
        font-size: calculateRem(10px);
        display: block;
        color: $grey-color;
        &.active{
          width: 60px;
          background-color: $main-color;
          color: $white;
        }
      }
    }

    &__search{
      color: $main-color;
      font-size: calculateRem(18px);
      margin-left: 40px;
    }
  }
  .logo {
    height: 2em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
</style>