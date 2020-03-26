<template>
  <section class="section">
    <div class="container has-text-centered">
      <span class="anchor" id="cv"></span>
      <h1 class="title">
        {{ $t("cv.header") }}
      </h1>
      <h2 class="subtitle">
        {{ $t("cv.text") }}
      </h2>
      <div class="timeline">
        <div class="timeline__wrap">
          <div class="timeline__items">
            <div class="timeline__item" v-for="content in Content">
              <div class="timeline__content">
                <h1 class="has-text-weight-bold">{{i18nStringBuilder(content, "title")}}</h1>
                <p class="text">{{i18nStringBuilder(content, "text")}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr>
  </section>
</template>

<script>
  import timeline from 'timeline';
  import styles from '../../node_modules/timeline/dist/css/timeline.min.css';

  export default {
    name: "CV",
    data() {
      return {
        Content: ["first", "second", "third", "fourth", "fifth"]
      }
    },
    methods: {
      i18nStringBuilder: function (index, arg) {
        return this.$t(`cv.timeline.${index}.${arg}`);
      }
    },
    mounted() {
      timeline.timelineFunction(document.querySelectorAll('.timeline'), {
        mode: 'horizontal',
        visibleItems: 4,
        forceVerticalWidth: 600
      });
    }
  }
</script>
