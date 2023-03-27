<template>
    <div class="lateral-section">
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
.lateral-section{
    margin-left: 10px;
    padding: 10px;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}

    .lateral-main-container{
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        max-height: 70vh;
        overflow: scroll;
    }

    .lateral-main-container div{
        margin: 10px;
    }
</style>