<template>
  <div class="level-item">
    <ul class="list">
      <li><h1 class="subtitle has-text-weight-bold">{{title}}</h1></li>
      <li class="list-item" v-for="item in items">
        <p class="text">{{$t('skills.items.'+skillName+'.'+item)}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ["title", "skillName", "items"],
    name: "SkillCategory"
  }
</script>

<style scoped>

</style>
