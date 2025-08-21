<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="stars"></div>
  <RouterView />
</template>

<style scoped>
.stars {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image:
    radial-gradient(2px 2px at 20px 140px, white, transparent),
    radial-gradient(1px 1px at 60px 30px, white, transparent),
    radial-gradient(1px 1px at 170px 140px, white, transparent),
    radial-gradient(2px 2px at 150px 70px, white, transparent);
  background-repeat: repeat;
  background-size: 200px 150px;
  animation: 3s linear 1s infinite alternate twinkle;
}

@keyframes twinkle {
  0%,
  100% {
    opacity: 0.9;
  }
  50% {
    opacity: 0.1;
  }
}
</style>
