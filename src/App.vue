<template>
  <Navbar></Navbar>
  <Business msg="Welcome to Your Vue.js App"/>
</template>

<script>
import Business from './pages/BusinessPage.vue'
import Navbar from './sections/NavbarComponent.vue';

export default {
  name: 'App',
  components: {
    Business,
    Navbar
}
}
</script>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Custom colors
$--custom-theme-background: --custom-theme-background;
$--custom-theme-text: --custom-theme-text;
$--custom-theme-text-light: --custom-theme-text-light;
$--custom-theme-text-strong: --custom-theme-text-strong;

// Default theme
$theme-map-light: (
  $--custom-theme-background: #ffffff,
  $--custom-theme-text: #4a4a4a,
  $--custom-theme-text-light: #7a7a7a,
  $--custom-theme-text-strong: #363636,
);

// Override the default light theme
$theme-map-dark: (
  $--custom-theme-background: #353535,
  $--custom-theme-text: #aeaeae,
  $--custom-theme-text-light: #979797,
  $--custom-theme-text-strong: #ffffff,
);

@mixin spread-map($map: ()) {
  @each $key, $value in $map {
    #{$key}: $value;
  }
}

:root.light {
  @include spread-map($theme-map-light);
}
:root.dark {
  @include spread-map($theme-map-dark);
}

// Override Variables
$primary: #990000;
$scheme-main: var($--custom-theme-background);
$text: var($--custom-theme-text);
$text-light: var($--custom-theme-text-light);
$text-strong: var($--custom-theme-text-strong);

// Links
$link: $primary;
$link-hover: $text-strong;
$link-focus: $text-strong;
$link-active: $text-strong;
$link-focus-border: $primary;

// Navbar
$navbar-item-hover-color: $text-strong;
$navbar-item-hover-background-color: $scheme-main;
$navbar-dropdown-item-hover-color: $text-strong;
$navbar-dropdown-item-hover-background-color: $scheme-main;

// Dropdown
$dropdown-background-color: $scheme-main;
$dropdown-item-hover-color: $text-strong;
$dropdown-item-hover-background-color: $scheme-main;

// Inputs
$input-background-color: inherit;

// Cards
$card-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.3), 0 0px 0 1px rgba(10, 10, 10, 0.06);

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
  background-color: inherit;
  color: inherit;
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

.contact-recaptcha-text {
  margin-top: 20px;
}

.grecaptcha-badge {
  visibility: hidden;
}

.footer {
  background-color: inherit;
  color: inherit;
}
</style>
