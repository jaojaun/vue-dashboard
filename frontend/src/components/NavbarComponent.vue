<template>
  <div class="navbar">
    <div class="content-logo">
      <h2 class="logo">L</h2>
    </div>
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
  background-color: #CCC;
  
  .content-logo{
    border: 3px solid #3EB489;
    box-shadow: 2px 3px 12px #3EB489;
    border-radius: 100%;
    width: 60px;
    height: 60px;
    align-items: center;
    display: flex;

    .logo{
      color: #fff;
      margin: 35%,
    }
  }

  .logout{
    width: 50px;
    height: 20px;
    font-size: large;
    color: #fff;
    text-decoration: none;
  }
}
</style>