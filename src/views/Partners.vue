<template>
  <b-container class="partners bg-light text-black">
       <Partners/>
  </b-container>
</template>

<script>
// @ is an alias to /src
import Partners from '@/components/Partners/Partners.vue'

export default {
  name: 'partners',
  components: {
    Partners
  }
}
</script>
<style scoped>
.container{
  margin-top: 90px;
}
</style>
