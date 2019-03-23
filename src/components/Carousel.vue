<template>
  <b-container>
    <b-carousel
      id="carousel1"
      style="text-shadow: 1px 1px 2px #333;"
      controls
      indicators
      background="#ababab"
      :interval="4000"
      img-width="1024"
      img-height="480"
      v-model="slide"

    >
 

       <b-carousel-slide  img-blank img-alt="Blank image">
        <p>
            All Advertisements Will Come Here
        </p>
      </b-carousel-slide>
    </b-carousel>


  </b-container>
</template>

<script>
  export default {
    name: 'Carousel',
  

  }
</script>