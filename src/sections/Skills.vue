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
              <b-progress type="is-info" :value="item.value" size="is-large" show-value>
                {{$t('skills.items.'+skill.name+'.'+item.index)}}
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
            "items": [
              {
                "index": "1",
                "value": 100
              },
              {
                "index": "2",
                "value": 90
              },
              {
                "index": "3",
                "value": 20
              }
            ]
          },
          {
            "name": "tech",
            "items": [
              {
                "index": "1",
                "value": 80
              }
            ]
          },
          {
            "name": "prog",
            "items": [
              {
                "index": "1",
                "value": 80
              },
              {
                "index": "2",
                "value": 60
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style>

</style>
