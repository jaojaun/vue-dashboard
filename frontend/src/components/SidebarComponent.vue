<template>
    <div class="sidebar">
        <div class="top">
            <div class="avatar-content">
                <main class="w-100 box">
                    <div class="w-100 box">
                        <form class="box" id="form-form">
                            <div class="img-upload box">
                                <img src="" class="w-100 h-100">
                                <i class="bi bi-cloud-arrow-up"></i>
                                <input id="img-field" type="file">
                            </div>
                        </form>
                    </div>
                </main>
            </div>
            <div class="info">
                <p class="name">User Teste</p>
                <span class="status">Online</span>
            </div>
        </div>
        <div class="menu">
            <ul>
                <li><router-link :to="{name: 'home'}">- Início</router-link></li>
                <li><router-link :to="{name: 'clientes'}">- Cliente</router-link></li>
                <li><router-link :to="{name: 'produtos'}">- Produtos</router-link></li>
                <li><router-link :to="{name: 'home'}">- Vendas</router-link></li>
                <li><router-link :to="{name: 'home'}">- Graficos</router-link></li>
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
        padding: 5px;
        background-color: #2d2d2d;
        box-shadow: 3px 5px 15px;

        .avatar-content{
            margin-left: 20%;
            .h-100{
                height: 100%;
            }

            #form-form{
                margin-bottom: 10%;

                & .img-upload{
                    width: 100px;
                    height: 100px;
                    position: relative;
                    border-style: double;
                    border-radius: 100%;
                    border: 5px solid #3EB489;
                    box-shadow: 2px 3px 12px #3EB489;
                    overflow:hidden;
                }

                & .img-upload i{
                    position: absolute;
                    margin: 0% auto;
                    font-size: 30px;
                    color:  #3EB489
                }

                & #img-field{
                    position: absolute;
                    margin: 0% auto;
                    font-size: 30px;
                    width: 100px;
                    height: 100px;
                    opacity: 0;
                }
            }
        }
        .info{
            margin: 10%;
            
            .name{
                margin: 2px;
                font-size: 23px;
                color:#CCC
            }
            .status{
                font-size: 18px;
                font-family: 'Courier New', Courier, monospace;
                color: #3EB489;
            }
        }
    }
    .menu {
        height: 100%;
        padding: 15px;
        background-color: #3EB489;

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