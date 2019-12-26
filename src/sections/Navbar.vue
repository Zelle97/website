<template>
  <fixed-header>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <span class="top" id="top"></span>
        <a class="navbar-item" href="#" v-scroll-to="'#top'">
          <img src="../assets/Logo.png">
        </a>
        <span class="navbar-burger burger" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>

      <div id="navMenu" class="navbar-menu">
        <div class="navbar-end">
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

          <a class="navbar-item">
            <LanguageDropdown></LanguageDropdown>
          </a>
        </div>
      </div>
    </nav>
  </fixed-header>
</template>

<script>
  import FixedHeader from 'vue-fixed-header'
  import LanguageDropdown from "../components/LanguageDropdown";

  export default {
    name: "navbar",
    components: {LanguageDropdown, FixedHeader},
    methods: {
      mobileNavbar: function () {
        var burger = document.querySelector('.burger');
        var nav = document.querySelector('#' + burger.dataset.target);

        burger.addEventListener('click', function () {
          burger.classList.toggle('is-active');
          nav.classList.toggle('is-active');
        });
      }
    },
    mounted() {
      this.mobileNavbar();
    }
  }
</script>

<style>
  .navbar-item {
    margin-right: 15px;
  }
</style>
