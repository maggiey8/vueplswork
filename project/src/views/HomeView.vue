<template>
  <h2>{{ hour }}, {{ dow }}, {{ date }}</h2>
  <div>
    <CharacterCard v-for="items in chars" :Char=items @click="incRank(items)"></CharacterCard>
  </div>
  <button v-if="isChosen" @click="NextDay">Next</button>
</template>

<script setup>
import CharacterCard from '@/components/CharacterCard.vue';
import chars from '@/stores/counter.js'
import {ref} from 'vue';

let isChosen = ref(false)

function incRank(items) {
  if (items.rank < 10) {
    items.rank++
  isChosen.value = true
}}

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


let hour = ref('Morning')
let dow = ref('Saturday')
let date = ref('4/9')

let timestamp = 1460239200000

function NextDay() {
  const current = new Date(timestamp)
  if (current < 1489989600000) {
    let old = timestamp
    timestamp = old + 43200000   // + 12 hours
    if (current.getHours() === 6) {
      hour.value = 'Morning'
    }
    else {
      hour.value = 'Evening'
    }
    dow.value = days[current.getDay()]
    date.value = `${current.getMonth()+1}/${current.getDate()}`

    isChosen.value = false
}}
</script>

<style scoped>
div {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}  
</style>