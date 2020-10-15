<template>
  <div class="section section-animated delayVisible">
    <div class="container">
      <span class="anchor" id="personal"></span>
      <div class="level personal">
        <div class="level-item">
          <figure class="image personal-image">
            <img class="is-rounded" src="../assets/personal_edited.png" />
          </figure>
        </div>
        <div class="container has-text-centered personal-text">
          <h1 class="title">
            {{ $t("personal.header") }}
          </h1>
          <h2 class="subtitle">
            <div class="content">
              {{ $t("personal.text") }}
            </div>
          </h2>
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Personal"
};
</script>

<style scoped>
.personal {
  padding-top: 15vh;
}

.personal-image {
  max-width: 30vw;
}

.personal-text {
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
  .personal-text {
    max-width: 60vw;
  }
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .section-animated {
    margin-bottom: 50vh;
  }
  .personal-text {
    max-width: 90vw;
  }
}
</style>
