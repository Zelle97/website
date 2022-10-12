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
          <p class="text">
            {{ $t("footer.disclaimer") }}
            <a href="https://github.com/Zelle97/website/issues">Github</a>
          </p>
          <div>
            <p class="text">&#169; {{ currentYear }} Fabian Zeller</p>
          </div>
        </div>
      </footer>
    </div>
  </template>

<script>

import Navbar from "../sections/Navbar";
import Contact from "../sections/Contact";
import CV from "../sections/CV";
import Skills from "../sections/Skills";
import References from "../sections/References";
import Banner from "../sections/Banner";
import Personal from "../sections/Personal";

export default {
  name: "PersonalPage",
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