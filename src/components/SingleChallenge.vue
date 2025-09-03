<template>
  <div class="challenge-text">
    <img alt="Vue logo" class="logo" :src="challengeIcon" width="125" height="125" />
    <p>{{ challengeText }}</p>
    <form @submit.prevent="validateChallenge">
      <input
        type="text"
        v-model.trim="challengeResponse"
        placeholder="Introduce tu respuesta"
        :disabled="challengePassed"
      />
      <p v-if="error">{{ error }}</p>
    </form>
    <button :disabled="!challengePassed" @click="completeChallenge">Continuar</button>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    challengeIcon: { type: String, required: true },
    challengeText: { type: String, required: true },
    challengeAnswer: { type: String, required: true },
  },
  data() {
    return {
      challengeResponse: '',
      challengePassed: false,
      error: '',
    }
  },
  methods: {
    validateChallenge() {
      if (this.challengeResponse.toLowerCase() === this.challengeAnswer.toLowerCase()) {
        this.challengePassed = true
        this.error = ''
      } else {
        this.error = 'Respuesta incorrecta'
      }
    },
    completeChallenge() {
      this.challengePassed = false
      this.challengeResponse = ''
      this.error = ''
      this.$emit('completeChallenge')
    },
  },
}
</script>

<style scoped>
.challenge-text {
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
