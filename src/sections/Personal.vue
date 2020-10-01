<template>
  <div class="section section-animated">
    <div class="container">
      <div class="level personal">
        <div class="level-item">
          <figure class="image">
            <img
              class="is-rounded"
              src="https://via.placeholder.com/600.png "
            />
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
.personal-text {
  max-width: 40vw;
}
</style>
