<template>
    <div class="main">
        <div class="login">
            <div class="content-login">
                <header>
                    <h1>Login do sistema</h1>
                </header>
                <div class="form">
                    <form>
                        <div class="inputContent">
                            <label for="exampleInputEmail1" class="input">E-mail</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        </div>
                        <div class="inputContent">
                            <label for="exampleInputPassword1" class="input">Senha</label>
                            <input type="password" class="form-control" id="exampleInputPassword1">
                        </div>
                        <button type="submit" class="btn-content" @click.prevent="login">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "LoginComponent",

    data(){
        return{

        }
    },
    methods:{
        login(){
            this.$router.push({name: 'home'});
        }
    }
}
</script>

<style lang="scss" src="./styles.scss" scoped/>