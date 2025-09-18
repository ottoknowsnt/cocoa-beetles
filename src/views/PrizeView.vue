<script setup lang="ts">
import loremIpsumPdf from '@/assets/lorem-ipsum.pdf'
</script>

<template>
  <div class="prize-container">
    <div class="prize-message">
      <p>Tienes correo...</p>
    </div>
    <img
      src="@/assets/button_pixel_art.png"
      alt="Pink Palace Apartments"
      class="pink-palace-apartments"
    />
    <a :href="loremIpsumPdf" target="_blank" class="download-button">Descargar postal</a>
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

.pink-palace-apartments {
  width: 8rem;
  height: 8rem;
}

.download-button {
  font-size: 1.25rem;
  text-align: center;
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
  padding: 0.25rem;
}
</style>
