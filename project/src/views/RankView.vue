<template>
  <div class="rank">
    <RankData v-for="items in store.chars" :Char = items></RankData>
  </div>
</template>

<script setup>
import RankData from '@/components/RankData.vue';
import { useCharacterStore } from '@/stores/counter.js';

const store = useCharacterStore()
</script>

<style>

</style>
