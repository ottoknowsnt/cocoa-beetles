<script setup lang="ts">
import pinkPalaceApartmentsPostcard from '@/assets/Pink Palace Apartments.pdf'
import postcardPixelArt from '@/assets/postcard_pixel_art.png'
import { confetti } from '@tsparticles/confetti'

const defaults = {
  shapes: ['heart'],
  scalar: 4,
  colors: ['#824d9a'],
  ticks: 0,
}
confetti({ ...defaults, angle: 0 })
confetti({ ...defaults, angle: 90 })
confetti({ ...defaults, angle: 180 })
confetti({ ...defaults, angle: 270 })
</script>

<template>
  <div class="prize-container">
    <div class="prize-message glowing-text">
      <p>Tienes correo...</p>
    </div>
    <img :src="postcardPixelArt" alt="Postcard" class="postcard" />
    <a :href="pinkPalaceApartmentsPostcard" download class="download-button"
      >Descargar postal</a
    >
  </div>
</template>

<style scoped>
.prize-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  place-items: center;
}

.prize-message {
  font-size: 1.25rem;
  text-transform: uppercase;
  text-align: center;
}

.postcard {
  height: 8rem;
}

.download-button {
  font-size: 1.1rem;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-text);
  background-color: var(--color-text-shadow);
  clip-path: polygon(
    0px calc(100% - 8px),
    4px calc(100% - 8px),
    4px calc(100% - 4px),
    8px calc(100% - 4px),
    8px 100%,
    calc(100% - 8px) 100%,
    calc(100% - 8px) calc(100% - 4px),
    calc(100% - 4px) calc(100% - 4px),
    calc(100% - 4px) calc(100% - 8px),
    100% calc(100% - 8px),
    100% 8px,
    calc(100% - 4px) 8px,
    calc(100% - 4px) 4px,
    calc(100% - 8px) 4px,
    calc(100% - 8px) 0px,
    8px 0px,
    8px 4px,
    4px 4px,
    4px 8px,
    0px 8px
  );
  padding: 1rem;
}
</style>
