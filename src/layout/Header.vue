<template>
    <div class="top-menu-container">
        <h1>
            <span>{{ name }}</span>SITE
        </h1>

    </div>
</template>
<script>

export default {
    name: 'HeaderComponent',
    data() {
        return {
            name: 'MEME',
            intervalID: null
        }
    },
    created() {
   
    },
    methods: {

    }
}
</script>
<style scoped>
.top-menu-container {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    font-size: xx-large;
    text-shadow: 4px 3px 0px #ffffff00, 7px 6px 0px rgba(0,0,0,0.15);
}
</style>