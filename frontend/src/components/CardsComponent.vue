<template>
  <div class="card">
    <div class="content top">
        <h3>{{ title }}</h3>
        <p class="percent">{{ percent }}</p>
    </div>
    <div class=" content footer">
        <p>{{ subtitle }}</p>
        <p class="qtd">{{ qtd }}</p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'CardComponent',
    props:{
        title: String,
        percent: String,
        subtitle: String,
        qtd: String,
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_main';

    .card{
        width: 250px;
        height: 80px;
        flex-direction: column;
        background-color: $purple;
        padding: 15px;
        border-radius: 7px;
        color: #fff;

        .content{
            font-size: large;
            display: flex;
            justify-content: space-between;
        }

        .top{

            .percent{
                color: $green;
            }
        }

        .footer{
            margin-top: 30px; 

            .qtd{
                font-size: 25px;
                margin: 0;
            }
        }
    }
</style>