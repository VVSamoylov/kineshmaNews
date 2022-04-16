<template>

<newsmenu />
{{getArt}}

Экономика

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
            return this.$store.getters.getArticle
        }
    }

}
</script>