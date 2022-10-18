<template>
  <div>
    <Navbar></Navbar>
    <banner></banner>
    <business></business>
    <contact></contact>
    <Footer></Footer>
  </div>
</template>

<script>
import Banner from "../sections/Banner";
import Contact from "../sections/Contact";
import Business from "../sections/Business.vue";
import Navbar from "../sections/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "BusinessPage",
  components: { Banner, Contact, Business, Navbar, Footer },
  data() {
    return {
      isOpen: false
    };
  }
};
</script>

<style></style>
