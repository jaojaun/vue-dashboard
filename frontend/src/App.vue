<template>
  <div>
    <Componente/>
    <p>o dado do app é: {{ testando }}</p>
  </div>
</template>

<script>
import Componente from './components/component.vue'

export default {
  name: 'App',
  components: {
    Componente
  },
  data() {
    return {
      testando: "Teste"
    }
  }
}
</script>

<style>

</style>