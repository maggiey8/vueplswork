<template>
    <div>
        <h3>{{ Char.characterName }}</h3>
        <h5>{{ Char.rank }}</h5>
    </div>
</template>

<script setup>
    const props = defineProps({
        Char:Object
    })
</script>

<style scoped>

</style>