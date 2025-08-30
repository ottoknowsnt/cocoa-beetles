<script setup lang="ts">
import CountDown from '../components/CountDown.vue'
</script>

<template>
  <div class="count-down-container">
    <div class="count-down-space"></div>
    <CountDown />
    <div class="count-down-rhyme">
      <p>Cuando la luna caiga</p>
      <p>y la puerta se abra</p>
      <p>solo unidas</p>
      <p>vuestro destino podréis adivinar</p>
    </div>
  </div>
</template>

<style scoped>
.count-down-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.count-down-rhyme {
  font-size: 1.25rem;
  text-transform: uppercase;
  text-align: center;
}
</style>
