<template>
  <h2>{{ store.hour }}, {{ store.dow }}, {{ store.date }}</h2>
  <div>
    <CharacterCard :disabled="store.isChosen" :class="{'max': max}"
      v-for="items in store.chars" :Char=items @click="incRank(items)"></CharacterCard>
  </div>
  <button v-if="store.isChosen" @click="NextDay">Next</button>
</template>

<script setup>
import CharacterCard from '@/components/CharacterCard.vue';
import {useCharacterStore} from '@/stores/counter.js'

const store = useCharacterStore()

function incRank(items) {
  if (items.rank < 9) {
    items.rank++
  }
  else if (items.rank === 9) {
    items.rank++
    
  } 
  store.isChosen = true
}

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


function NextDay() {
  const current = new Date(store.timestamp)
  if (current < 1489989600000) {
    let old = store.timestamp
    store.timestamp = old + 43200000   // + 12 hours
    if (current.getHours() === 6) {
      store.hour = 'Morning'
    }
    else {
      store.hour = 'Evening'
    }
    store.dow = days[current.getDay()]
    store.date = `${current.getMonth()+1}/${current.getDate()}`

    store.isChosen = false
}}

</script>

<style scoped>
div {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}  
</style>