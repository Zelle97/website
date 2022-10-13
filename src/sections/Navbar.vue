<template>
  <fixed-header class="animated">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <span class="top" id="top"></span>
        <a class="navbar-item" href="#" v-scroll-to="'#top'">
          <img src="../assets/Logo.png" />
        </a>
        <span class="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>

      <div id="navMenu" class="navbar-menu">
        <div v-if="isPersonal" class="navbar-start">
          <a class="navbar-item" href="#" v-scroll-to="'#personal'">
            {{ $t("personal.header") }}
          </a>
          <a class="navbar-item" href="#" v-scroll-to="'#cv'">
            {{ $t("navbar.cv") }}
          </a>

          <a class="navbar-item" href="#" v-scroll-to="'#skills'">
            {{ $t("skills.header") }}
          </a>

          <a class="navbar-item" href="#" v-scroll-to="'#references'">
            {{ $t("references.header") }}
          </a>

          <a class="navbar-item" href="#" v-scroll-to="'#contact'">
            {{ $t("contact.header") }}
          </a>
        </div>
        <div v-if="!isPersonal" class="navbar-start">
          <a class="navbar-item" href="#" v-scroll-to="'#business'">
            {{ $t("business.header") }}
          </a>

          <a class="navbar-item" href="#" v-scroll-to="'#contact'">
            {{ $t("contact.header") }}
          </a>
        </div>
        <div class="navbar-end">
          <a v-if="isPersonal" class="navbar-item">
            <b-button><router-link to="/business" >About my Business!</router-link></b-button>
          </a>
          <a v-if="!isPersonal" class="navbar-item">
            <b-button><router-link to="/personal" >About Me!</router-link></b-button>
          </a>
          <a class="navbar-item">
            <b-button v-on:click="toogleDarkTheme()"><b-icon icon="theme-light-dark"></b-icon></b-button>
          </a>
          <a class="navbar-item">
            <LanguageDropdown></LanguageDropdown>
          </a>
        </div>
      </div>
    </nav>
  </fixed-header>
</template>

<script>
import FixedHeader from "vue-fixed-header";
import LanguageDropdown from "../components/LanguageDropdown";

export default {
  name: "navbar",
  components: { LanguageDropdown, FixedHeader },
  computed: {
    isPersonal() {
       return this.$route.name === 'Personal'
    }
  },
  methods: {
    mobileNavbar: function() {
      var burger = document.querySelector(".burger");
      var nav = document.querySelector("#" + burger.dataset.target);

      burger.addEventListener("click", function() {
        burger.classList.toggle("is-active");
        nav.classList.toggle("is-active");
      });
    },
    toogleDarkTheme: function() {
      document.documentElement.classList.toggle('light');
      document.documentElement.classList.toggle('dark');
    }
  },
  mounted() {
    this.mobileNavbar();
  }
};
</script>

<style>
.navbar-item {
  margin-right: 15px;
}
.animated {
  opacity: 0;
  animation-duration: 2s; /* the duration of the animation */
  animation-timing-function: ease-out; /* how the animation will behave */
  animation-delay: 2400ms; /* how long to delay the animation from starting */
  animation-iteration-count: 1; /* how many times the animation will play */
  animation-name: slideDown; /* the name of the animation we defined above */
  animation-fill-mode: forwards;
}

@keyframes slideDown {
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>
