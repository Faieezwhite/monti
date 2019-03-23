<template>
  <b-container class="bg-light text-black" >
    <b-row>
        <b-col md="6">
              <b-card bg-variant="secondary" text-variant="white" header="Contact Details" class="text-center">
                     <b-card-text><b>E:</b> admin@indabamontessoriinstitute.org</b-card-text>
                     <b-card-text><b>T:</b> +27 (0) 21 881 3500</b-card-text>
                     <b-card-text><b>F:</b> Indaba Institute</b-card-text>
                   
            </b-card>
        </b-col>
         <b-col md="6">
              <b-card bg-variant="secondary" text-variant="white" header="Physical address" class="text-center">
                    <b-card-text>Indaba Institute at the Sustainability Institute,          
                                  Off R310 Baden Powell Drive,
                                  Lynedoch,
                                  South Africa, 7603
                    </b-card-text>
                    <br/>
            </b-card>
        </b-col>
   
    
    </b-row>
    <br/>
    <b-row>
           <b-embed 
      type="iframe"  aspect="16by9"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.3883067591!2d18.766524315366812!3d-33.9825585324037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc4cf1015a2725%3A0x43caa201822c1fc7!2sThe+Sustainability+Institute!5e0!3m2!1sen!2sza!4v1553343633005"
     
      allowfullscreen/>
    </b-row>

  </b-container>
</template>

<script>
// @ is an alias to /src



export default {
  name: 'ContactUs',
 
}
</script>

<style scoped>
.container{
  margin-top: 80px;
}
</style>
