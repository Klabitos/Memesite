<template>
    <div class="init-page-container">
        <MemeOfTheDay class="meme-day"></MemeOfTheDay>
        <SquareMenuOptions class="mt-2"></SquareMenuOptions>
    </div>
</template>
<script>
import SquareMenuOptions from '@/components/navigation/SquareMenuOptions.vue';
import MemeOfTheDay from '@/components/MemeOfTheDay.vue';
export default {
    name:'IndexHomeComponent',
    components:{
        SquareMenuOptions,
        MemeOfTheDay
    }
}
</script>
<style scoped>
    .init-page-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .meme-day{
        padding: 50px;
    }
</style>