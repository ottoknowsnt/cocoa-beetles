<script setup lang="ts">
import SingleChallenge from '../components/SingleChallenge.vue'
import buttonPixelArt from '../assets/button_pixel_art.png'
</script>

<template>
  <SingleChallenge
    :challenge-icon="buttonPixelArt"
    challenge-text="¿Cuál es el mejor sabor de café?"
    challenge-answer="lotus"
  />
</template>
