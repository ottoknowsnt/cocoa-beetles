<template>
  <div class="challenge-container">
    <img alt="Challenge Icon" :src="challengeIcon" class="challenge-icon" />
    <div class="challenge-texts" :class="{ 'challenge-texts-bw': challengePassed }">
      <i class="challenge-text" v-for="challengeText in challengeTexts" :key="challengeText">{{
        challengeText
      }}</i>
    </div>
    <div class="challenge-input-container">
      <form @submit.prevent="validateChallenge">
        <input
          type="text"
          class="challenge-input"
          v-model.trim="challengeResponse"
          placeholder="¿Qué es?"
          :disabled="challengePassed"
        />
      </form>
      <p class="challenge-error" v-if="error">{{ error }}</p>
      <button class="challenge-button" :disabled="!challengePassed" @click="completeChallenge">
        Continuar
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    challengeIcon: { type: String, required: true },
    challengeTexts: { type: Array<string>, required: true },
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
        document.body.style.setProperty('--color-background-top', 'black')
        document.body.style.setProperty('--color-background-bottom', 'white')
        document.body.style.setProperty('--color-text', 'white')
        document.body.style.setProperty('--color-text-shadow', 'black')
      } else {
        this.error = 'Vuelve a intentarlo...'
      }
    },
    completeChallenge() {
      this.challengePassed = false
      this.challengeResponse = ''
      this.error = ''
      document.body.style.setProperty('--color-background-top', 'var(--coraline-sky-dark)')
      document.body.style.setProperty('--color-background-bottom', 'var(--coraline-sky-light)')
      document.body.style.setProperty('--color-text', 'var(--coraline-tunnel-light-purple)')
      document.body.style.setProperty('--color-text-shadow', 'var(--coraline-tunnel-dark-purple)')
      this.$emit('completeChallenge')
    },
  },
}
</script>

<style scoped>
.challenge-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  place-items: center;
}

.challenge-input-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  place-items: center;
}

.challenge-texts {
  color: var(--coraline-table-light-green);
  text-shadow: 0.15rem 0.15rem 0 var(--coraline-table-dark-green);
  font-size: 0.885rem;
  text-align: center;
  transition:
    color 4s,
    text-shadow 4s;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.challenge-texts-bw {
  color: white;
  text-shadow: 0.15rem 0.15rem 0 black;
}

.challenge-error {
  color: var(--coraline-sofa-light-red);
  text-shadow: 0.15rem 0.15rem 0 var(--coraline-sofa-dark-red);
  font-size: 0.8rem;
  text-transform: uppercase;
  text-align: center;
}

.challenge-icon {
  width: 7rem;
  height: 7rem;
}

.challenge-input {
  font-family: inherit;
  width: 19rem;
  height: 3rem;
  text-align: center;
  color: var(--coraline-bug-light-blue);
  background-color: var(--coraline-bug-dark-blue);
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
  transition:
    background-color 4s,
    color 4s,
    opacity 4s;
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
  color: var(--coraline-bug-light-blue);
  opacity: 0.5;
}

.challenge-button {
  font-family: inherit;
  width: 19rem;
  height: 3rem;
  text-transform: uppercase;
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
  transition:
    background-color 4s,
    color 4s,
    opacity 4s;
}

.challenge-button:disabled {
  color: var(--coraline-table-light-green);
  background-color: var(--coraline-table-dark-green);
  opacity: 0.8;
}
</style>
