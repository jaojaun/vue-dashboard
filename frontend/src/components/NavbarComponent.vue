<template>
  <div class="navbar">
      <h2 class="logo">LOGO MARCA <i class="fa fa-sign-out-alt"></i></h2>
      <div class="logout">
        <a @click.prevent="logout" class="logout">SAIR</a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent',
  methods: {
    logout() {
      this.$router.push({name: 'login'})
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar{
  display: flex;
  width: 100%;
  align-items: center;
  
  .logo{
    width: 175px;
    height: 30px;
    color: #fff;
  }

  .logout{
    width: 50px;
    height: 20px;
    font-size: large;
    color: #fff;
    text-decoration: none;
    margin-left: 450px;
  }
}
</style>