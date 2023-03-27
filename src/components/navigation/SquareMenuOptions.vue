<template>
    <div class="square-menu-container">
        <div>Memes</div>
        <div>Autores</div>
        <div>Categorías</div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.square-menu-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
}

.square-menu-container div {
    width: 30%;
    padding: 30px;
    margin: 10px;
    text-align: center;
    background-color: #7d879217;
    border-radius: 25px;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}
</style>
