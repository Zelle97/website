<template>
    <div>
        <personal></personal>
        <c-v></c-v>
        <skills></skills>
        <references></references>
    </div>
</template>

<script>
import CV from "./sections/CV";
import Skills from "./sections/Skills";
import References from "./sections/References";
import Personal from "./sections/Personal";

export default {
    name: "app",
    components: { Personal, References, Skills, CV},
};
</script>