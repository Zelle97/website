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

<style lang="scss">
  // Import Bulma's core
  @import "~bulma/sass/utilities/_all";

  // Set your colors
  $primary: #4099FF;
  $primary-invert: findColorInvert($primary);


  // Setup $colors to use as bulma classes (e.g. 'is-twitter')
  $colors: (
    "primary": ($primary, $primary-invert),
  );

  // Links
  $link: $primary;
  $link-invert: $primary-invert;
  $link-focus-border: $primary;

  // Import Bulma and Buefy styles
  @import "~bulma";
  @import "~buefy/src/scss/buefy";

  .navbar.vue-fixed-header--isFixed {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
  }

  .main {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .anchor {
    position: absolute;
    transform: translateY(-50vh);
  }




</style>
