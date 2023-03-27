<template>
    <div class="meme-card">
        <img class="meme-img" src="../../assets/memes/image_2.png" />
        <div class="meme-info">
            <h2>Titulo del meme</h2>
            <span>Autor</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Meme-Card'
}
</script>
<style scoped>
.meme-card {
    background-color: #7d879217;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    min-width: 45%;
    max-width: 45%;
    border-radius: 25px;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}

.meme-img {
    overflow: hidden !important;
    padding: 0px;
    min-height: 200px;
}

.meme-info{
    min-width: 25%;
    max-width: 25%;
    position: relative;
    right: 12px;
    top: -25px;
    padding: 20px;
    margin: 10px;
    border-radius: 15px !important;
}




</style>