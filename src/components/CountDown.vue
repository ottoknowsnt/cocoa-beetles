<template>
  <img alt="Moon" :src="moonPixelArt" id="moon" class="moon" />
  <vue-countdown :time="time" v-slot="{ days, hours, minutes }" @progress="moveMoon">
    <div class="count-down">{{ days }} : {{ hours }} : {{ minutes }}</div>
  </vue-countdown>
</template>

<script lang="ts">
import moonPixelArt from '@/assets/moon_pixel_art.png'
export default {
  data() {
    const now = new Date()
    const challengeDate = new Date(2025, 8, 21)

    let time = challengeDate.getTime() - now.getTime()
    if (time < 0) {
      time = 0
    }

    return {
      time,
      moonPixelArt,
    }
  },
  methods: {
    moveMoon({ days }: { days: number }) {
      const moon = document.getElementById('moon')
      if (moon) {
        moon.style.right = `${100 - days * 5}%`
        moon.style.bottom = `${days * 5}%`
      }
    },
  },
}
</script>

<style scoped>
.moon {
  position: absolute;
  transform: translate(50%, 50%);
  right: 0%;
  bottom: 100%;
  width: 10rem;
  height: 10rem;
  z-index: -1;
  opacity: 0.8;
  transition:
    right 10s,
    bottom 10s;
}

.count-down {
  font-size: 1.5rem;
  text-align: center;
  text-shadow: none;
  animation: 3.5s linear 0s infinite alternate pulse;
}

@keyframes pulse {
  0%,
  100% {
    text-shadow:
      0 0 0.2rem var(--color-text),
      0 0 0.4rem var(--color-text),
      0 0 0.6rem var(--color-text);
  }
  50% {
    text-shadow: none;
  }
}
</style>
