<template>
  <vue-countdown :time="time" v-slot="{ days, hours, minutes }">
    <div class="count-down">{{ days }} : {{ hours }} : {{ minutes }}</div>
  </vue-countdown>
</template>

<script lang="ts">
export default {
  data() {
    const now = new Date()
    const anniversary = new Date(2025, 8, 22)

    return {
      time: anniversary.getTime() - now.getTime(),
    }
  },
}
</script>

<style scoped>
.count-down {
  font-size: 1.5rem;
  text-align: center;
}
</style>
