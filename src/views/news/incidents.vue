<template>
<newsmenu/>
Проишествия
{{getArt}}
</template>
<script>

import newsmenu from '@/components/newsmenu';
export default{
    name: 'incidents',
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