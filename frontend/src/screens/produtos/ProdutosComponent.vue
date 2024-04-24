<template>
    <div>
        <dashboard-component>
            <template v-slot:slot-pages>
                <div class="content-pages">
                    <header class="title-pages">
                        <h1>Produtos</h1>
                    </header>
                </div>
            </template>
        </dashboard-component>
    </div>
</template>

<script>
import DashboardComponent from '../dashboard/DashboardComponent.vue';

export default {
    name: "Produtos",
    components: {
        DashboardComponent,
    }
}
</script>

<style lang="scss" src="./styles.scss" scoped/>