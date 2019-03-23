<template>
  
  <b-container class="bg-light text-black" >
      <br/>
      
      <Course36/>
      <br/>
      <Nia/>
      <br/>
      <br/>
      <Beth/>
      <br/>
       <Course62/>
      <br/>
      <CarolHicks/>
      <br/>
      <br/>
      <Nomvelo/>
  </b-container>
</template>

<script>
// @ is an alias to /src

import Course62 from '@/components/Courses/6-2.vue'
import Course36 from '@/components/Courses/3-6.vue'
import Nia from '@/components/Trainers/Nia.vue'
import CarolHicks from '@/components/Trainers/CarolHicks.vue'
import Nomvelo from '@/components/Trainers/Nomvelo.vue'
import Beth from '@/components/Trainers/Beth.vue'

export default {
  name: 'training',
  components: {
   
    Course62,
    Course36,
    Nia,
    CarolHicks,
    Nomvelo,
    Beth
  }
}
</script>

<style scoped>
.container{
  margin-top: 40px;
}
</style>
