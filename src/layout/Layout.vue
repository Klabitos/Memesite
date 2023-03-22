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
    name:'LayoutComponent',
    components:{
        Header
    }
}
</script>
<style></style>