<template>
  <div class="section">
    <div class="container">
      <span class="anchor" id="business"></span>
      <div class="level business">
        <div class="container has-text-centered business-text">
          <h1 class="title">
            {{ $t("business.header") }}
          </h1>
          <h2 class="subtitle">
            <div class="content">
              {{ $t("business.text") }}
            </div>
          </h2>
        </div>
      </div>
      <div class="level business-description">
        <div class="level-item business-left">
        <div class="has-text-centered">
          <h1 class="title">
            {{ $t("business.left.header") }}
          </h1>
          <div class="content">
            {{ $t("business.left.text") }}
          </div>
        </div>
      </div>
      <div class="level-item business-right">
        <div class="has-text-centered">
          <h1 class="title">
            {{ $t("business.right.header") }}
          </h1>
          <div class="content">
            {{ $t("business.right.text") }}
          </div>
        </div>
      </div>
      </div>
      
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Business"
};
</script>

<style scoped>
.business {
  margin-top: 10vh;
}

.business-description {
  padding-top: 5vh;
}
.business-left {
  max-width: 35vw;
}
.business-right {
  max-width: 35vw;
}

.business-text {
  max-width: 40vw;
}

.delayVisible {
  animation: delayVisible 0s 3s forwards;
  visibility: hidden;
}

@keyframes delayVisible {
  to {
    visibility: visible;
  }
}

@media only screen and (max-width: 800px) {
  .section-animated {
    margin-bottom: 15vh;
  }
  .business-text {
    max-width: 60vw;
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .section-animated {
    margin-bottom: 50vh;
  }
  .business-text {
    max-width: 90vw;
  }
}
</style>
