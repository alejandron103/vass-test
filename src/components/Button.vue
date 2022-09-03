<template>
   <button @click="trigger()">{{text}}</button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent( {
    props:{
      'text': String,
      'trigger': {
        type: Function,
        default() {
            return;
        }
      }
    },
  })
</script>