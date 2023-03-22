<template>
    <v-card class="meme-card">

        <img class="meme-img" src="../../assets/memes/image_1.png" />
        <div>
            <v-card-title>Titulo del meme</v-card-title>
            <v-card-text>Autor</v-card-text>

            <v-card-actions>
                <v-btn text @click="reserve">
                    <v-icon dark right>
                        mdi-thumb-up
                    </v-icon>
                </v-btn>

                <v-btn text @click="reserve">
                    <v-icon dark right>
                        mdi-thumb-down
                    </v-icon>
                </v-btn>
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
}

.meme-img {
    max-height: 400px;
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
}
</style>