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
                    <tr v-for="user in data" :key="user.id">
                        <th scope="row">{{ user.id }}</th>
                        <td class="name">{{ user.name }}</td>
                        <td class="email">{{ user.email }}</td>
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
.list{
    background-color: $purple;
    width: 80%;
    border-radius: 15px;
    padding: 10px;
    margin-left: 10px;

    .title{
        font-size: 25px;
        padding: 10px;
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
</style>