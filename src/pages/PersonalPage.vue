<template>
    <div class="main">
      <navbar></navbar>
      <personal></personal>
      <c-v></c-v>
      <skills></skills>
      <references></references>
      <contact></contact>
      <Footer></Footer>
    </div>
  </template>

<script>

import Navbar from "../sections/Navbar";
import Contact from "../sections/Contact";
import CV from "../sections/CV";
import Skills from "../sections/Skills";
import References from "../sections/References";
import Personal from "../sections/Personal";
import Footer from "../components/Footer";

export default {
  name: "PersonalPage",
  components: { Personal, References, Skills, CV, Contact, Navbar, Footer },
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