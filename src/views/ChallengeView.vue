<script setup lang="ts">
import SingleChallenge from '../components/SingleChallenge.vue'
import buttonPixelArt from '../assets/button_pixel_art.png'
</script>

<template>
  <SingleChallenge
    :challenge-icon="currentChallengeConfiguration.icon"
    :challenge-text="currentChallengeConfiguration.text"
    :challenge-answer="currentChallengeConfiguration.answer"
    @completeChallenge="completeChallenge"
  />
</template>

<script lang="ts">
import { useChallengesStore } from '@/stores/challenges'
import { mapStores, mapState, mapActions } from 'pinia'
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      challengesConfiguration: {
        coffee: {
          icon: buttonPixelArt,
          text: '¿Cuál es el mejor sabor de café?',
          answer: 'lotus',
          nextChallenge: 'coffee2',
        },
        coffee2: {
          icon: buttonPixelArt,
          text: '¿Cuál es el mejor sabor de café 2?',
          answer: 'lotus',
          nextChallenge: 'coffee3',
        },
        coffee3: {
          icon: buttonPixelArt,
          text: '¿Cuál es el mejor sabor de café 3?',
          answer: 'lotus',
          nextChallenge: null,
        },
      } as Record<
        string,
        { icon: string; text: string; answer: string; nextChallenge: string | null }
      >,
    }
  },
  computed: {
    currentChallengeConfiguration() {
      return this.challengesConfiguration[this.currentChallenge]
    },
    ...mapStores(useChallengesStore),
    ...mapState(useChallengesStore, ['currentChallenge', 'passedChallenges']),
  },
  methods: {
    completeChallenge() {
      const nextChallenge = this.currentChallengeConfiguration.nextChallenge
      this.changeChallenge(this.currentChallenge, nextChallenge)

      if (!nextChallenge) {
        this.$router.push('/')
      }
    },
    ...mapActions(useChallengesStore, ['changeChallenge']),
  },
})
</script>
