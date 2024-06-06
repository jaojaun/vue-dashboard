<template>
  <div class="lists">
    <div class="list">
        <div class="title">
            <p><strong>{{ description }}</strong></p>
        </div>
        <hr>
        <div class="content">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">{{ columns[0] }}</th>
                        <th scope="col">{{ columns[1] }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in data" :key="item.id">
                        <th scope="row">{{ item.id }}</th>
                        <td class="name">{{ item.name }}</td>
                        <td class="email">{{(description == 'Clientes') ? item.email : item.valor }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'ListComponent',
    props: {
        data: Array,
        description: String,
        columns: [],
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_main';
.lists{
    margin-top: 5%;

    .list{
        background-color: $purple-dark;
        width: 80%;
        border-radius: 15px;
        padding: 10px;
        margin-left: 10px;
        box-shadow: 3px 5px 15px $green;

        .title{
            font-size: 25px;
            padding: 10px;
            color: $white
        }
        .content{
            height: 90%;
            width: 100%; 

            .table{
                height: 100%;
                width: 100%;
                justify-content: center;
                align-items: center;
                margin: 20px;
                flex-direction: column;

                .name{
                    margin-top: 10px;
                    font-size: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }
}
</style>