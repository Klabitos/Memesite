<template>
    <div>
        <h1 class="mb-2">Last memes</h1>
        <div class="lateral-main-container">
            <MemeCardPreview v-for="(item, index) in 15" :key="index"></MemeCardPreview>
        </div>
    </div>
</template>
<script>
import MemeCardPreview from '@/components/cards/MemeCardPreview.vue';
export default {
    name:"LateralSection",
    components:{
        MemeCardPreview
    }
}
</script>
<style scoped>
    h1{
        text-align: center;
    }
    .lateral-main-container{
        display: flex;
        flex-wrap: wrap;
        max-height: 70vh;
        overflow: scroll;
    }

    .lateral-main-container div{
        margin: 10px;
    }
</style>