<template>
      <footer class="footer">
        <div class="content has-text-centered">
          <p class="text">
            {{ $t("footer.text") }}
            <a href="https://github.com/Zelle97"> Fabian Zeller</a>
            {{ $t("footer.with") }} <a href="https://vuejs.org/">Vue.js</a>
            {{ $t("footer.and") }} <a href="https://buefy.org/">Buefy</a>.
          </p>
          <p class="text">
            {{ $t("footer.disclaimer") }}
            <a href="https://github.com/Zelle97/website/issues">Github</a>
          </p>
          <div>
            <p class="text">&#169; {{ currentYear }} Fabian Zeller</p>
          </div>
        </div>
      </footer>
</template>

<script>

export default {
  name: "Footer"
};
</script>