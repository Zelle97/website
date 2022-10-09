<template>
    <div>
        <banner></banner>
        <business></business>
        <div class="section has-text-centered">
            <h1
                        class="title"
                        @click="isOpen = !isOpen"
                        :aria-expanded="isOpen"
                        aria-controls="contentIdForA11y2">Über meine Person</h1>
            <b-collapse
                    aria-id="contentIdForA11y2"
                    class="panel"
                    animation="slide"
                    v-model="isOpen">
                    <div class="panel-block">
                        <personal-page></personal-page>
                    </div>
                </b-collapse>
        </div>
        <contact></contact>
    </div>
</template>

<script>
import Banner from "./sections/Banner";
import Contact from "./sections/Contact";
import Business from "./sections/Business.vue";
import PersonalPage from "./PersonalPage.vue";

export default {
    name: "BusinessPage",
    components: { Banner, Contact, Business, PersonalPage },
    data() {
            return {
                isOpen: false
            }
        }
};
</script>

<style>
    .personalPage {
        visibility: hidden;
    }
</style>