<template>
    <button class="card">
        <h2>{{ Char.characterName }}</h2>
    </button>
</template>

<script setup>
    const props = defineProps({
        Char: Object
})
</script>

<style scoped>
.card {
    margin: 20px;
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