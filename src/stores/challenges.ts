import { geoChallenges } from '@/data/geoChallenges'
import { defineStore } from 'pinia'

export const useChallengesStore = defineStore('challenges', {
  state: () => ({
    currentChallenge:
      localStorage.getItem('current_challenge') ||
      geoChallenges.features[0].properties?.challengeId,
    passedChallenges: JSON.parse(localStorage.getItem('passed_challenges') || '[]') as string[],
  }),
  actions: {
    changeChallenge(passedChallenge: string, nextChallenge: string | undefined) {
      this.passedChallenges.push(passedChallenge)
      localStorage.setItem('passed_challenges', JSON.stringify(this.passedChallenges))
      if (nextChallenge) {
        this.currentChallenge = nextChallenge
        localStorage.setItem('current_challenge', this.currentChallenge)
      }
    },
  },
})
