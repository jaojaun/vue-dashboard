<template>
    <div class="main">
        <dashboard-component>
            <template v-slot:slot-pages>
                <div class="content-pages">
                    <header class="title-pages">
                        <h1>Clientes</h1>
                    </header>
                </div>
            </template>
        </dashboard-component>
    </div>
</template>

<script>
import DashboardComponent from '../dashboard/DashboardComponent.vue';

export default {
    name: "Clientes",
    components: {
        DashboardComponent,
    }
}
</script>

<style lang="scss" src="./styles.scss" scoped/>