<template>
    <div class="square-menu-container">
        <div>Memes</div>
        <div>Colaboradores</div>
        <div>Frases Célebres</div>
        <div>Categorías</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .square-menu-container{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 70%;
    }

    .square-menu-container div{
        width: 45%;
        padding: 30px;
        margin: 2.5%;
        text-align: center;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    }
</style>