<template>
     
      <!-- Just an image -->
      <b-navbar toggleable="sm" type="dark" variant="secondary" fixed ="top">
        <b-navbar-brand to="/">
          <img src="../assets/Indaba-logo.png" id="logo" class="d-inline-block align-top" alt="BV" />
        </b-navbar-brand>
        <b-navbar-toggle target="navMenu" />
        <b-collapse is-nav id="navMenu">
        <!-- id="nvbar" class="navbar-nav ml-auto" -->
            <b-navbar-nav id="nvbar" >
              <b-nav-item active to="/">Home</b-nav-item>
              <b-nav-item to="/training" >Training</b-nav-item>
              <b-nav-item to="/partners" >Partners</b-nav-item>
              <b-nav-item to="/about" >About</b-nav-item>
              <b-nav-item to="/contactus" >Contact Us</b-nav-item>
            </b-navbar-nav>
          
        </b-collapse>
  
      </b-navbar>
   
</template>

<script>
export default {
  name: 'Header'
 
}
</script>

<style scoped>

#logo{    
    height: 50px;
    margin-top: -3px;
    margin-left: 5px;
    
}

#nvbar
{
  overflow: auto;
  margin-left: 5cm;
}

</style>

