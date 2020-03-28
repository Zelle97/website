<template>
  <div class="section bgimg">
    <div class="card banner-card rounded">
      <header class="card-header is-centered">
        <p class="card-header-title is-centered">
          Fabian Zeller
        </p>
      </header>
      <div class="card-content">
        <h2 class="content has-text-centered">
          {{ $t("banner.text") }}
        </h2>
      </div>
      <footer class="card-footer">
        <div class="card-footer-item">
          <b-button type="is-info"
                    outlined
                    rounded>
            <a href="#" v-scroll-to="'#contact'" class="has-text-black">{{ $t("banner.button")}}</a>
          </b-button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Banner"
  }
</script>

<style>
  .bgimg {
    width: 100vw;
    height: 110vh;
    background-image: url('../assets/stockphoto.jpeg');
  }

  .banner-card {
    margin-left: 10vw;
    margin-top: 15vh;
    max-width: 40vw;
  }
</style>
