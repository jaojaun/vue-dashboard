<template>
    <div>
        <h1>Olá Vue!</h1>
        <p>Meu nome é {{ nome }} e trabalho como {{ profissao }}</p>
    </div>
</template>

<script>
export default {
    name: 'component',
    data() {
        return {
            nome: "João",
            profissao: "Programador"
        }
    }
}
</script>

<style>

</style>