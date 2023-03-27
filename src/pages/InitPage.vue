<template>
    <div class="init-page-container">
        <MemeOfTheDay class="meme-day"></MemeOfTheDay>
    </div>
</template>
<script>
import MemeOfTheDay from '@/components/MemeOfTheDay.vue';
export default {
    name:'IndexHomeComponent',
    components:{
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