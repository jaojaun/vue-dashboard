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
                        <CardsComponent :title="'Clientes'" :percent="'7%'" :subtitle="'Total'" :qtd="clientes.length"/>
                    </div>

                    <div class="card">
                        <CardsComponent :title="'Produtos'" :percent="'12%'" :subtitle="'Todos'" :qtd="produtos.length"/>
                    </div>

                    <div class="card">
                        <CardsComponent :title="'Serviços'" :percent="'3%'" :subtitle="'Todos'" :qtd="clientes.length"/>
                    </div>

                    <div class="card">
                        <CardsComponent :title="'Relatórios'" :percent="'22%'" :subtitle="'Lucro'" :qtd="clientes.length"/>
                    </div>
                </div>

                <div class="content-lists">
                    <div class="list">
                        <ListsComponent :data="clientes" :description="'Clientes'" :columns="['Nome', 'E-mail']"/>
                    </div>

                    <div class="list">
                        <ListsComponent :data="produtos" :description="'Produtos'" :columns="['Nome', 'Valor']"/>
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
            clientes:[],
            produtos:[]
        }
    },  
    mounted(){
        this.getData();
    },  
    methods: {
        async getData(){

            try{
                let response = await axios.get('http://localhost:8000/api')
                
                this.clientes = response.data.clientes,
                this.produtos = response.data.produtos
            }catch(error){
                console.error("Aconteceu um erro: "+error.response.status)
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