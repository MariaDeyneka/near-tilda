<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>Welcome to NEAR and Tilda integration!</h1>
  <p>Feel free to go take a look at the github repository for this project:</p>
  <a href="https://github.com/MariaDeyneka/near-tilda" target="_blank">
      Github
   </a>
</template>
