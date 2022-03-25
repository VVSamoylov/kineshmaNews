<template>
  <div class="home">
    <newsindex />
  </div>
</template>

<script>
// @ is an alias to /src
import newsindex from '@/views/news/index.vue'

export default {
  name: 'Home',
  components: {
    newsindex
  }
}
</script>
