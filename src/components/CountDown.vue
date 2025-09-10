<template>
  <vue-countdown :time="time" v-slot="{ days, hours, minutes }" @end="goToChallenge">
    <div class="count-down">{{ days }} : {{ hours }} : {{ minutes }}</div>
  </vue-countdown>
</template>

<script lang="ts">
export default {
  data() {
    const now = new Date()
    const anniversary = new Date(2025, 8, 21)

    let time = anniversary.getTime() - now.getTime()
    if (time < 0) {
      time = 0
    }

    return {
      time,
    }
  },
  methods: {
    goToChallenge() {
      this.$router.push('/challenge')
    },
  },
}
</script>

<style scoped>
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
