<template>
  <div>
    <b-dropdown position="is-bottom-left" aria-role="list">
      <button class="button" slot="trigger">
        <b-icon
          icon="earth"
          size="is-small"
        ></b-icon>
        <b-icon
          icon="menu-down"
        ></b-icon>
      </button>

      <b-dropdown-item aria-role="listitem" @click="setLocale('en')">
        <img src="../assets/gb.svg" class="flag-icon"> {{ $t("navbar.languages.english") }}
      </b-dropdown-item>
      <b-dropdown-item aria-role="listitem" @click="setLocale('de')">
        <img src="../assets/de.svg" class="flag-icon"> {{ $t("navbar.languages.german") }}
      </b-dropdown-item>
    </b-dropdown>
  </div>
</template>

<script>
  import Icon from "buefy";

  export default {
    name: "LanguageDropdown",
    components: {Icon},
    methods: {
      setLocale(locale){
        this.$i18n.locale = locale;
      }
    }
  }
</script>

<style scoped>
  .flag-icon {
    max-width: 16px;
    max-height: 16px;
    margin-right: 2rem;
  }

</style>
