<template>
  <b-container fluid class="home bg-light text-black"  >
        <Carousel/>
        <HelloWorld/>
  </b-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Carousel from '@/components/Carousel.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    Carousel
  }
}
</script>
<style scoped>
.container{
  margin-top: 80px;
}
</style>
