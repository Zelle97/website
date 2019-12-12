<template>
  <section class="section">
    <div class="container has-text-centered">
      <span class="anchor" id="references"></span>
      <h1 class="title">
        References
      </h1>
      <h2 class="subtitle">
        Overview of my Projects and References.
      </h2>
      <div class="level">
        <div class="level-item" v-for="reference in references">
          <reference-card :title="$t('references.items.'+reference.name+'.title')"
                          :text="$t('references.items.'+reference.name+'.text')"
                          :link="reference.link"/>
        </div>
      </div>
    </div>
    <hr>
  </section>
</template>

<script>
  import ReferenceCard from "../components/ReferenceCard";

  export default {
    name: "References",
    components: {ReferenceCard},
    data() {
      return {
        references: [
          {
            name: "genAlg",
            link: "https://github.com/Zelle97/GeneticAlgorithm"
          },
          {
            name: "second",
            link: "https://github.com/Zelle97"
          }, {
            name: "third",
            link: "https://github.com/Sybit-Education/airtable.java"
          },]
      }
    }
  }
</script>

<style scoped>

</style>
