<template>
    <div class="meme-card">
        <img class="meme-img" src="../../assets/memes/image_2.png" />
        <div class="meme-info">
            <h2>Titulo del meme</h2>
            <span>Autor</span>
            <div>
                <v-chip class="meme-category" v-for="(item, index) in 5" :key="index">#Categoria</v-chip>
            </div>
            <p class="meme-description">Description...</p>
            <div class="meme-info-actions">
                <div >
                    <v-icon class="i">
                        mdi-thumb-up
                    </v-icon>
                    <span> +20 </span>
                </div>
                <div >
                    <v-icon class="i">
                        mdi-thumb-down
                    </v-icon>
                    <span> -10 </span>
                </div>
            </div>
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
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    min-width: 800px;
    max-width: 800px;
    border-radius: 25px;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}

.meme-img {
    overflow: hidden !important;
    padding: 0px;
    max-height: 450px;
    border-right: 3px solid #7D8792 !important;
}

.meme-info{
    min-width: 25%;
    max-width: 25%;
    position: relative;
    right: 0px;
    padding: 20px;
    margin: 10px;
    border-radius: 15px !important;
}

.meme-info-actions{
    width: 100%;
    position: absolute;
    left: 0px;
    bottom: 0px;
    display: flex;
    justify-content: space-around;
}

.meme-description{
    margin-top: 10px;
}

.meme-category{
    margin: 1px;
}

.i{
    border: 1px solid black;
    border-radius: 20px;
    padding: 8px;
    color: black;
}
</style>