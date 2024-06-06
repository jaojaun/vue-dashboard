<template>
    <div class="main">
        <div class="content-img">
            <img class="img" src="./../../assets/imgs/graf.png">
        </div>
        <div class="login">
            <div class="content-login form-group">
                <div class="header">
                    <h2 class="text-h4 mb-3">Welcome to sistem!</h2>
                    <p class="mb-0">Please sign-in to your account and start</p>
                </div>
                <div class="form-group">
                    <label>E-mail</label>
                    <input type="text" class="form-control" />
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control" />
                </div>
                <div class="my-3">
                    <form>
                        <button type="submit" class="btn btn-primary" @click.prevent="login">
                            <span>Login</span>
                        </button>
                    </form>
                </div>
                <div class="d-flex align-center flex-wrap">

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