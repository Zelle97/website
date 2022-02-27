<template>
  <section
    class="section"
    data-aos="fade-right"
    :data-aos-offset="170"
    data-aos-delay="50"
  >
    <div class="container has-text-centered">
      <span class="anchor" id="skills"></span>
      <h1 class="title">
        {{ $t("skills.header") }}
      </h1>
      <h2 class="subtitle">
        {{ $t("skills.text") }}
      </h2>

      <b-tabs position="is-centered" class="block">
        <b-tab-item
          v-for="skill in skills"
          :key="skill.name"
          :label="$t('skills.items.' + skill.name + '.title')"
        >
          <div
            class="progress-loop"
            v-for="item in skill.items"
            :key="item.index"
          >
            <b-progress
              type="is-info"
              :value="item.value"
              size="is-large"
              show-value
            >
              {{ $t("skills.items." + skill.name + "." + item.index) }}
            </b-progress>
          </div>
        </b-tab-item>
      </b-tabs>
    </div>
    <hr />
  </section>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skills: [
        {
          name: "tech",
          items: [
            {
              index: "1",
              value: 75
            },
            {
              index: "2",
              value: 80
            },
            {
              index: "3",
              value: 60
            },
            {
              index: "4",
              value: 85
            }
          ]
        },
        {
          name: "lang",
          items: [
            {
              index: "1",
              value: 100
            },
            {
              index: "2",
              value: 90
            },
            {
              index: "3",
              value: 20
            }
          ]
        },
        {
          name: "prog",
          items: [
            {
              index: "1",
              value: 80
            },
            {
              index: "2",
              value: 60
            },
            {
              index: "3",
              value: 40
            },
            {
              index: "4",
              value: 20
            },
            {
              index: "5",
              value: 20
            }
          ]
        }
      ]
    };
  }
};
</script>

<style>
@keyframes progress {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.progress {
  transition: 0.2s all linear;
  animation: progress 1s ease forwards;
  -webkit-animation: progress 1s ease-in-out forwards;
}
</style>
