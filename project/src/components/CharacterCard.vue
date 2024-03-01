<template>
    <button class="card" :class="Char.max ? 'max': 'maxFalse'">
        <h2>{{ Char.characterName }}</h2>
        <h3 v-if="Char.max">Max Rank</h3>
    </button>
</template>

<script setup>
    const props = defineProps({
        Char: Object
})
</script>

<style scoped>
.card {
    margin: 15px;
    font-size: 0.7rem;
    width: 10vw;
    height: 15vh;
    text-align: center;
    background-color: rgb(212, 20, 20);

    min-width: 60px
}

.max {
    background-color: rgb(57, 145, 196);
}
</style>