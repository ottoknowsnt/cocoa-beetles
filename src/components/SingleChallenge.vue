<template>
  <div class="challenge-container">
    <img alt="Challenge Icon" :src="challengeIcon" class="challenge-icon" />
    <p class="challenge-text" :class="{ 'challenge-text-bw': challengePassed }">
      {{ challengeText }}
    </p>
    <form @submit.prevent="validateChallenge">
      <input
        type="text"
        class="challenge-input"
        v-model.trim="challengeResponse"
        placeholder="Introduce tu respuesta"
        :disabled="challengePassed"
      />
    </form>
    <p class="challenge-error" v-if="error">{{ error }}</p>
    <button class="challenge-button" :disabled="!challengePassed" @click="completeChallenge">
      Continuar
    </button>
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
        document.body.style.background = 'var(--color-background-bw)'
      } else {
        this.error = 'Respuesta incorrecta'
      }
    },
    completeChallenge() {
      this.challengePassed = false
      this.challengeResponse = ''
      this.error = ''
      document.body.style.background = 'var(--color-background)'
      this.$emit('completeChallenge')
    },
  },
}
</script>

<style scoped>
.challenge-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  place-items: center;
}

.challenge-text {
  font-size: 1.25rem;
  text-transform: uppercase;
  text-align: center;
  transition: all 1s ease-in-out;
}

.challenge-text-bw {
  color: white;
  text-shadow: 0.15rem 0.15rem 0 black;
}

.challenge-error {
  color: red;
  font-size: 0.8rem;
  text-transform: uppercase;
  text-align: center;
}

.challenge-icon {
  width: 8rem;
  height: 8rem;
}

.challenge-input {
  font-family: inherit;
  width: 19rem;
  height: 3rem;
  text-align: center;
  color: var(--coraline-tunnel-dark-purple);
  background-color: var(--coraline-tunnel-light-purple);
  border: none;
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
  transition: all 1s ease-in-out;
}

.challenge-input:focus {
  outline: none;
}

.challenge-input:disabled {
  background-color: white;
  color: black;
  opacity: 0.8;
}

.challenge-input::placeholder {
  color: var(--coraline-tunnel-dark-purple);
}

.challenge-button {
  font-family: inherit;
  width: 19rem;
  height: 3rem;
  text-align: center;
  color: black;
  background-color: white;
  border: none;
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
  transition: all 1s ease-in-out;
}

.challenge-button:disabled {
  color: var(--coraline-tunnel-dark-purple);
  background-color: var(--coraline-tunnel-light-purple);
  opacity: 0.8;
}
</style>
