<template>
  <section class="section">
    <div class="container has-text-centered">
      <span class="anchor" id="skills"></span>
      <h1 class="title">
        {{$t("skills.header")}}
      </h1>
      <h2 class="subtitle">
        {{$t("skills.text")}}
      </h2>

      <div class="level">
        <div v-for="skill in skills">
          <skill-category :title="$t('skills.items.'+skill.name+'.title')"
                          :skillName="skill.name"
                          :items="skill.items">
          </skill-category>
        </div>
      </div>


    </div>
    <hr>
  </section>
</template>

<script>

  import SkillCategory from "../components/SkillCategory";

  export default {
    name: "Skills",
    components: {SkillCategory},
    data() {
      return {
        "skills": [
          {
            "name": "lang",
            "items": ["1","2","3"]
          },
          {
            "name": "tech",
            "items": ["1"]
          },
          {
            "name": "prog",
            "items": ["1","2"]
          }
        ]
      }
    }
  }
</script>

<style>

</style>
