<template>
    <div class="main">
        <div class="sidebar">
            <SidebarComponent/>
        </div>
        <div class="content-right">
            <div class="navbar">
                <NavbarComponent/>
            </div>
            <div class="pages">
                <slot name="slot-pages"></slot>
            </div>  
        </div>
    </div>
</template>

<script>
import SidebarComponent from './../../components/SidebarComponent.vue';
import NavbarComponent from './../../components/NavbarComponent.vue';

export default {
    name: 'DashboardComponent',
    components: {
        SidebarComponent,
        NavbarComponent
    }
}
</script>

<style lang="scss" src="./styles.scss" scoped/>