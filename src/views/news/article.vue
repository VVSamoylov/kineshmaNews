<template>
<div class="container">
    <div class="row">
        <h1>  Заголовок </h1>
           {{Art}}
        <p> ghhjjk</p>

            <p> autor </p>
    </div>
</div>

</template>
<script>
export default {
    name: 'artcile',
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