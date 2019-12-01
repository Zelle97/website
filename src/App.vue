<template>
  <div class="main">
    <navbar></navbar>
    <banner></banner>
    <c-v></c-v>
    <skills></skills>
    <references></references>
    <contact></contact>
  </div>
</template>

<script>
  import Navbar from "./sections/Navbar";
  import Contact from "./sections/Contact";
  import CV from "./sections/CV";
  import Skills from "./sections/Skills";
  import References from "./sections/References";
  import Banner from "./sections/Banner";

  export default {
    name: 'app',
    components: {Banner, References, Skills, CV, Contact, Navbar},
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.21);

  }

  .navbar.vue-fixed-header--isFixed {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
  }

  .main {
  }

  .anchor {
    position: absolute;
    transform: translateY(-50vh);
  }


</style>
