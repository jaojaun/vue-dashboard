<template>
    <div class="card">
        <div class="content top">
            <h3 class="title">{{ title }}</h3>
            <p class="percent">{{ percent }}</p>
        </div>
          <div class=" content footer">
            <p class="subtitle">{{ subtitle }}</p>
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
        qtd: Number,
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_main';

    .card{
        width: 100%;
        height: 100%;
        justify-content: space-between;
        flex-direction: column;
        background-color: black;
        padding: 12px;
        border-radius: 5px;
        color: #fff;

        .content{
            font-size: large;
            display: flex;
            justify-content: space-between;
            
            .title{
                margin:0px;
            }
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