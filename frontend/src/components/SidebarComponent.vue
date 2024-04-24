<template>
    <div class="sidebar">
        <div class="top">
            <div class="avatar">
                <span>A</span>
            </div>
            <div class="info">
                <p class="name">Testeteste</p>
                <span class="status">Online</span>
            </div>
        </div>
        <div class="menu">
            <ul>
                <li><router-link :to="{name: 'home'}">Início</router-link></li>
                <li><router-link :to="{name: 'clientes'}">Cliente</router-link></li>
                <li><router-link :to="{name: 'produtos'}">Produtos</router-link></li>
                <li><router-link :to="{name: 'home'}">Vendas</router-link></li>
                <li><router-link :to="{name: 'home'}">Graficos</router-link></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SidebarComponent'
}
</script>

<style lang="scss" scoped>
.sidebar{
    
    .top{
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 30px 5px;
        margin-top: 40px;
        align-items: center;
    }
    .avatar {
        margin-right: 10px;

        span{
            display: block;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #CCC;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #666666;
        }
    }
    .info{

        .name{
            margin: 2px;
            font-size: 15px;
        }
        .status{
            font-size: 12px;
            font-size: small;
            font-family: 'Courier New', Courier, monospace;
        }
    }
    .menu {
        padding: 15px;
        margin-top: 20px;

        ul li {
            margin: 15px 0;  
            font-size: 18px;
            font-family: 'Courier New', Courier, monospace;
            list-style: none;

            a {
                color: #fff;
                text-decoration: none;
            }
        }
    }
}

</style>