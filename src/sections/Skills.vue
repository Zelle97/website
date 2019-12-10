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


      <b-tabs position="is-centered" class="block">
        <div v-for="skill in skills">
          <b-tab-item :label="$t('skills.items.'+skill.name+'.title')">
            <div class="progress-wrapper" v-for="item in skill.items">
              <b-progress type="is-info" :value="80" size="is-large" show-value>
                {{$t('skills.items.'+skill.name+'.'+item)}}
              </b-progress>
            </div>
          </b-tab-item>
        </div>
      </b-tabs>
    </div>
    <hr>
  </section>
</template>

<script>


  export default {
    name: "Skills",
    data() {
      return {
        "skills": [
          {
            "name": "lang",
            "items": ["1", "2", "3"]
          },
          {
            "name": "tech",
            "items": ["1"]
          },
          {
            "name": "prog",
            "items": ["1", "2"]
          }
        ]
      }
    }
  }
</script>

<style>

</style>
