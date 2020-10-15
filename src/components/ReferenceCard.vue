<template>
  <div class="card custom-fade-in">
    <div class="card-content">
      <img
        height="32"
        width="32"
        src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg"
      />
      <p class="title">
        {{ title }}
      </p>
      <p class="content">
        {{ text }}
      </p>
    </div>
    <footer class="card-footer">
      <p class="card-footer-item">
        <span> View on <a :href="link">Github</a> </span>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "ReferenceCard",
  props: ["title", "text", "link"]
};
</script>

<style scoped></style>
