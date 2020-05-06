<template>
  <div class="home">
    <Items />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Items from '@/components/items.vue'
// import { ref } from 'vue'

export default {
  name: '别过期了',
  components: {
    // HelloWorld
    Items
  },

}

</script>
