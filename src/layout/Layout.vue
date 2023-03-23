<template>
    <div class="main-layout">
        <div class="top-menu">
            <Header></Header>
        </div>
        <div class="main-content-page">
            <div class="main-content-page__centered">
                <router-view />
            </div>
        </div>
    </div>
</template>
<script>
import Header from './Header.vue';
export default {
    name: 'LayoutComponent',
    components: {
        Header
    }
}
</script>
<style scoped>
.top-menu {
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 2;
    min-height: 85px;
    max-height: 85px;
    width: 100%;
    background-color: #E84855;
    border-bottom: 3px solid #403F4C;
}

.main-content-page {
    position: absolute;
    left: 0px;
    top: 60px;
    width: 100vw;
    height: calc(100vh - 60px);
}

.main-content-page__centered {
    position: relative;
    top: 2rem;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 160px;
    width: 80%;
}
</style>