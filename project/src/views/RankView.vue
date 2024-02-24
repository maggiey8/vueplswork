<template>
  <div class="rank">
    <RankData v-for="items in chars" :Char = items></RankData>
  </div>
</template>

<script setup>
import RankData from '@/components/RankData.vue';
import chars from '@/stores/counter.js';
</script>

<style>

</style>
