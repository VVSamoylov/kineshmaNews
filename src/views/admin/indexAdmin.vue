<template>
<adminmenu />
Новости
<div class="container">
    <div class="row">
        <div v-for="item in getArt" :key="item.heading"  class="card">
            <h5 class="card-header">{{item.heading}}</h5>
            <div class="card-body">
                <p class="card-text">{{item.description}}</p>
                {{item.id}}
                <div class="col-lg-2">
                    <router-link  class="btn btn-primary"  :to="{ name: 'editartice', params:{id: item.id }}">Редактировать... </router-link>
                </div>    
            </div>
        </div>
    </div>
</div>
</template>

<script>
import adminmenu from '@/components/adminmenu';
export default{
    name: 'indexAdmin',
    components:{
        adminmenu
    },
    computed:{
        getArt(){
            return this.$store.getters.getArticle
        }
    }
}
</script>

<style scoped>
.card{
    border-color:blue;
    padding-left:0px;
    padding-right:0px;
}
</style>