<template>
    <div>
        <h1>Meme of the Day</h1>
        <MemeCard></MemeCard>
    </div>
</template>
<script>
import MemeCard from './cards/MemeCard.vue';
export default {
    name:'Meme-Day',
    components:{
        MemeCard
    }
}
</script>
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Delicious+Handrawn&display=swap');
    h1{
        padding: 20px;
        font-family: 'Delicious Handrawn', cursive;
    }
</style>