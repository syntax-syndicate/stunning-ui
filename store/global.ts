import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

interface GlobalState {
  darkmode: boolean
}

export const useGlobalStore = defineStore('global', {
  state: (): GlobalState => ({
    darkmode: false
  }),
  actions: {
    toggleDarkmode() {
      this.darkmode = !this.darkmode
    }
  }
})
