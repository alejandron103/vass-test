<template>
    <p class="copyright">© {{currentYear}} <span class="t-red">Sneak</span> All Right Reserved</p> 
    <span class="material-icons">facebook</span>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent( {
    data(){
        return {
            currentYear: new Date().getFullYear(),
        }
    }
})
</script>