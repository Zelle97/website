<template>
  <fixed-header >
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
        </a>
      </div>

      <div class="navbar-end">
        <a class="navbar-item" href="#cv">
          {{ $t("navbar.cv") }}
        </a>

        <a class="navbar-item" href="#skills">
          {{ $t("skills.header") }}
        </a>

        <a class="navbar-item" href="#references">
          {{ $t("references.header") }}
        </a>

        <a class="navbar-item" href="#contact">
          {{ $t("contact.header") }}
        </a>

        <a class="navbar-item">
          <LanguageDropdown></LanguageDropdown>
        </a>
      </div>
    </nav>
  </fixed-header>
</template>

<script>
  import FixedHeader from 'vue-fixed-header'
  import LanguageDropdown from "../components/LanguageDropdown";

  export default {
    name: "navbar",
    components: {LanguageDropdown, FixedHeader}
  }
</script>

<style>
.navbar-item {
  margin-right: 15px;
}
</style>
