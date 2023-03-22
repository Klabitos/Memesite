<template>
    <v-card class="meme-card">
        <img class="meme-img" src="../../assets/memes/image_1.png" />
        <div class="meme-info">
            <h2>Titulo del meme</h2>
            <span>Autor</span>
            <v-card-actions class="meme-info-actions">
                <div @click="reserve">
                    <v-icon class="i">
                        mdi-thumb-up
                    </v-icon>
                </div>
                <div @click="reserve">
                    <v-icon class="i">
                        mdi-thumb-down
                    </v-icon>
                </div>
            </v-card-actions>
        </div>
    </v-card>
</template>
<script>
export default {
    name: 'Meme-Card'
}
</script>
<style scoped>
.meme-card {
    display: flex;
    background-color: #403F4C;
    color: white;
    border: 1px solid #E84855;
    min-width: 600px;
}

.meme-img {
    padding: 25px;
    border: none !important;
    max-height: 450px;
}

.meme-info{
    position: absolute;
    right: 0px;
    padding: 20px;
    margin: 10px;
    border-radius: 15px !important;
    background-color: #e848554f;
    border: 1px solid black;
    max-height: 180px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.meme-info-actions{
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
}

.i{
    border: 1px solid white;
    border-radius: 20px;
    padding: 8px;
    color: white !important;
}
</style>