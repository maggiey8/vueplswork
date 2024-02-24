import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})

const chars = [
  {
      characterName: 'Ryuji',
      arcana: 'Chariot',
      number: 'VII',
      time: ['Morning', 'Afternoon'],
      DOW: [1,2,3,4,5,6,7],
      rain: true,
      rank: 0
  },
  {
      characterName: 'Ann',
      arcana: 'Lovers',
      number: 'VI',
      time: ['Morning', 'Afternoon'],
      DOW: [1,2,3,5,7],
      rain: true,
      rank: 0
  },
  {
      characterName: 'Yusuke',
      arcana: 'Emperor',
      number: 'IV',
      time: ['Morning', 'Afternoon'],
      DOW: [1,2,3,4,5,6,7],
      rain: true,
      rank: 0
  },
  {
      characterName: 'Makoto',
      arcana: 'Priestess',
      number: 'II',
      time: ['Morning', 'Afternoon'],
      DOW:  [2,4,6,7],
      rain: true,
      rank: 0
  },
  {
      characterName: 'Futaba',
      arcana: 'Hermit',
      number: 'IX',
      time: ['Morning', 'Afternoon'],
      DOW: [3,4,6,7],
      rain: false,
      rank: 0
  },
  {
      characterName: 'Haru',
      arcana: 'Empress',
      number: 'III',
      time: ['Morning', 'Afternoon'],
      DOW: [1,2,3,4,5,6],
      rain: false,
      rank: 0
  },
  {
      characterName: 'Caroline & Justine',
      arcana: 'Strength',
      number: 'XI',
      time: ['Early Morning', 'Morning', 'Afternoon', 'Evening', 'Night'],
      DOW: [1,2,3,4,5,6,7],
      rain: true,
      rank: 0
  },
  {
      characterName: 'Mishima',
      arcana: 'Moon',
      number: 'XVIII',
      time: ['Evening', 'Night'],
      DOW: [1,2,3,4,5,6,7],
      rain: true,
      rank: 0
  },
  {
      characterName: 'Chihaya',
      arcana: 'Fortune',
      number: 'X',
      time: ['Evening', 'Night'],
      DOW: [2,4,6,7],
      rain: false,
      rank: 0
  },
  {
      characterName: 'Iwai',
      arcana: 'Hanged Man',
      number: 'XII',
      time: ['Evening', 'Night'],
      DOW: [2,4,7],
      rain: true,
      rank: 0
  },
  {
      characterName: 'Takemi',
      arcana: 'Death',
      number: 'XIII',
      time: ['Morning', 'Afternoon'],
      DOW: [1,2,3,4,5,6,7],
      rain: true,
      rank: 0
  },
  {
      characterName: 'Kawakami',
      arcana: 'Temperance',
      number: 'XIV',
      time: ['Evening', 'Night'],
      DOW: [5,6],
      rain: true,
      rank: 0
  },
  {
      characterName: 'Ohya',
      arcana: 'Devil',
      number: 'XV',
      time: ['Evening', 'Night'],
      DOW: [1,2,3,4,5,6,7],
      rain: true,
      rank: 0
  },
  {
      characterName: 'Hifumi',
      arcana: 'Star',
      number: 'XVII',
      time: ['Evening', 'Night'],
      DOW: [1,3,6,7],
      rain: true,
      rank: 0
  },
  {
      characterName: 'Yoshida',
      arcana: 'Sun',
      number: 'XIX',
      time: ['Evening', 'Night'],
      DOW: [7],
      rain: true,
      rank: 0
  },
  {
      characterName: 'Sojiro',
      arcana: 'Hierophant',
      number: 'V',
      time: ['Evening', 'Night'],
      DOW: [1,2,4,5,6,7],
      rain: true,
      rank: 0
  },
  {
      characterName: 'Shinya',
      arcana: 'Tower',
      number: 'XVI',
      time: ['Morning', 'Afternoon'],
      DOW: [1,2,4,6],
      rain: true,
      rank: 0
  },
]


export default chars