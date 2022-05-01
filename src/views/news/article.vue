<template>

<div class="container">
    <div class="row">
    <newsmenu />
        <h1>  {{Art.heading}} </h1>
           
        <p> {{Art.content}} </p>

            <p> {{Art.autor}} </p>
            <div > {{Art.dateArticle}} </div>
    </div>
</div>

</template>
<script>
import newsmenu from '@/components/newsmenu'
export default {
    name: 'artcile',
    components:{
        newsmenu
    },
    data(){
        return{
            article:''
        }
    },
    props:['id'],
    computed:{
        Art(){
            //console.log(this.$store.getters.getArticleItem(this.id))
             return this.$store.getters.getArticleItem(this.id)
        }
    }
    
}

</script>