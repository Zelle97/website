<template>
  <div class="main">
    <navbar></navbar>
    <banner></banner>
    <personal></personal>
    <c-v></c-v>
    <skills></skills>
    <references></references>
    <contact></contact>
    <footer class="footer">
      <div class="content has-text-centered">
        <p class="text">
          {{ $t("footer.text") }}
          <a href="https://github.com/Zelle97"> Fabian Zeller</a>
          {{ $t("footer.with") }} <a href="https://vuejs.org/">Vue.js</a>
          {{ $t("footer.and") }} <a href="https://buefy.org/">Buefy</a>.
        </p>
        <div>
          <p class="text">&#169; {{ currentYear }} Fabian Zeller</p>
          <!--          <img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg"/>-->
          <!--          <img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/twitter.svg"/>-->
          <!--          <img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"/>-->
          <!--          <img height="32" width="32" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg"/>-->
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Navbar from "./sections/Navbar";
import Contact from "./sections/Contact";
import CV from "./sections/CV";
import Skills from "./sections/Skills";
import References from "./sections/References";
import Banner from "./sections/Banner";
import Personal from "./sections/Personal";

export default {
  name: "app",
  components: { Personal, Banner, References, Skills, CV, Contact, Navbar },
  data() {
    return {
      currentYear: ""
    };
  },
  methods: {
    getCurrentYear: function() {
      return new Date().getFullYear();
    }
  },
  mounted() {
    this.currentYear = this.getCurrentYear();
  }
};
</script>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #990000;
//$primary-invert: findColorInvert($primary);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  "white": (
    $white,
    $black
  ),
  "black": (
    $black,
    $white
  ),
  "light": (
    $light,
    $light-invert
  ),
  "dark": (
    $dark,
    $dark-invert
  ),
  "primary": (
    $primary,
    $primary-invert
  ),
  "info": (
    #b20000,
    $info-invert
  ),
  "success": (
    $success,
    $success-invert
  ),
  "warning": (
    $warning,
    $warning-invert
  ),
  "danger": (
    $danger,
    $danger-invert
  )
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// Anchor customization

.anchor {
  position: absolute;
  transform: translateY(-50vh);
}

// Timeline Customization

.timeline__item:after {
  background-color: $primary;
}

.timeline__content {
  border: 1px solid $primary;
}

.timeline--horizontal .timeline__item--bottom .timeline__content:before {
  border-bottom: 12px solid $primary;
  border-top: transparent !important;
}

.timeline--horizontal .timeline__item .timeline__content:before {
  border-top: 12px solid $primary;
}

// Progress Bars

.progress-loop {
  padding: 10px;
}

.progress {
  background: $primary;
  transition: width 1s;
}

// Animations

.section-animated {
  margin-top: 10vh;
  bottom: 0;
  display: flex;
  height: 100vh;
  padding: 1rem;
  position: sticky;
  width: 100%;
  z-index: 1;
}

.section-animated:nth-child(2) {
  margin-top: 0;
  z-index: 2;
}
</style>
