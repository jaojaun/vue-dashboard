<template>
    <div class="main">
        <dashboard-component>
            <template v-slot:slot-pages>
            <div class="content-pages">
                <header class="title-pages">
                    <p>Home</p>
                </header>

                <div class="cards-content">
                    <div class="card">
                        <CardsComponent :title="'Clientes'" :percent="'7%'" :subtitle="'Total'" :qtd="'7590'"/>
                    </div>

                    <div class="card">
                        <CardsComponent :title="'Produtos'" :percent="'12%'" :subtitle="'Todos'" :qtd="'350'"/>
                    </div>

                    <div class="card">
                        <CardsComponent :title="'Serviços'" :percent="'3%'" :subtitle="'Todos'" :qtd="'270'"/>
                    </div>

                    <div class="card">
                        <CardsComponent :title="'Relatórios'" :percent="'22%'" :subtitle="'Lucro'" :qtd="'30'"/>
                    </div>
                </div>

                <div class="content-lists">
                    <div class="list">
                        <ListsComponent :data="users" :description="'Clientes'" :columns="['Nome', 'E-mail']"/>
                    </div>

                    <div class="list">
                        <ListsComponent :data="users" :description="'Produtos'" :columns="['Nome', 'Valor']"/>
                    </div>
                </div>
            </div>
            </template>
        </dashboard-component>
    </div>
</template>

<script>
import CardsComponent from '../../components/CardsComponent.vue';
import ListsComponent from '../../components/ListsComponent.vue';
import DashboardComponent from '../dashboard/DashboardComponent.vue';
import axios from 'axios'

export default {
    name: "Home",
    data(){
        return{
            users:[]
        }
    },  
    mounted(){
        this.getUsers();
    },  
    methods: {
        async getUsers(){
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            if(response.status == 200){
                this.users = response.data
            }else{
                console.error("Ocorreu um erro na requisição")
            }
        }
    },
    components: {
        DashboardComponent,
        CardsComponent,
        ListsComponent
    }
}
</script>

<style lang="scss" src="./styles.scss" scoped/>