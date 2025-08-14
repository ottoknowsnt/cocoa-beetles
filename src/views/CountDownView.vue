<script setup lang="ts">
import CountDown from '../components/CountDown.vue'
</script>

<template>
  <div class="count-down-warning">
    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec.</h1>
  </div>
  <CountDown />
</template>

<style>
@media (min-width: 1024px) {
  .count-down-warning {
    display: flex;
    align-items: center;
  }
}
</style>
