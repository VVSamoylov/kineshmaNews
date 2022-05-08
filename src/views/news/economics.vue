<template>

<newsmenu />
Экономика
<div class="container">
    <div class="row">
        <div v-for="item in getArt" :key="item.heading"  class="card">
            <h5 class="card-header">{{item.heading}}</h5>
            <div class="card-body">
                <p class="card-text">{{item.description}}</p>
                {{item.id}}
                <div class="col-lg-2">
                    <router-link  class="btn btn-primary"  :to="{ name: 'article', params:{id: item.id }}">Подробнее... </router-link>
                </div>    
            </div>
        </div>
    </div>
</div>

</template>
<script>
import newsmenu from '@/components/newsmenu';
export default{
    name: 'economics',

    components:{
        newsmenu
    },
    computed:{
        getArt(){
            return this.$store.getters.getArticleSort(2)
        }
    }

}
</script>