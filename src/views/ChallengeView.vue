<script setup lang="ts">
import SingleChallenge from '../components/SingleChallenge.vue'
</script>

<template>
  <SingleChallenge
    v-if="currentGeoChallengeProperties"
    :challenge-icon="currentGeoChallengeProperties.challengeIcon"
    :challenge-text="currentGeoChallengeProperties.challengeText"
    :challenge-answer="currentGeoChallengeProperties.challengeAnswer"
    @completeChallenge="completeChallenge"
  />
</template>

<script lang="ts">
import { useChallengesStore } from '@/stores/challenges'
import { mapStores, mapState, mapActions } from 'pinia'
import { defineComponent } from 'vue'
import { geoChallenges } from '@/data/geoChallenges'

export default defineComponent({
  computed: {
    currentGeoChallengeProperties() {
      return geoChallenges.features.find(
        (feature) => feature.properties?.challengeId === this.currentChallenge,
      )?.properties
    },
    ...mapStores(useChallengesStore),
    ...mapState(useChallengesStore, ['currentChallenge', 'passedChallenges']),
  },
  methods: {
    completeChallenge() {
      if (!this.currentGeoChallengeProperties) {
        return
      }

      const nextChallenge = this.currentGeoChallengeProperties.nextChallengeId
      this.changeChallenge(this.currentChallenge, nextChallenge)

      if (nextChallenge) {
        this.$router.push('/map')
      } else {
        this.$router.push('/')
      }
    },
    ...mapActions(useChallengesStore, ['changeChallenge']),
  },
})
</script>
