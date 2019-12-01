<template>
  <section class="section">
    <div class="container">
      <div class="has-text-centered">
        <span class="anchor" id="contact"></span>
        <h1 class="title">{{$t("contact.header")}}</h1>
        <h2 class="subtitle">
          {{$t("contact.text")}}
        </h2>

      </div>

      <form id="contact-form" @submit="submitForm">

        <b-field :label="$t('contact.name')">
          <b-input v-model="senderName" type="name" required="required" :placeholder="$t('contact.ph_name')"></b-input>
        </b-field>

        <b-field :label="$t('contact.email')">
          <b-input v-model="fromMail"
                   type="email"
                   icon="email"
                   :placeholder="$t('contact.ph_email')">
          </b-input>
        </b-field>

        <b-field :label="$t('contact.message')">
          <b-input v-model="content" maxlength="600" type="textarea" required="required"
                   :placeholder="$t('contact.ph_message')"></b-input>
        </b-field>

        <div class="has-text-centered">
          <b-button type="is-info"
                    outlined
                    native-type="submit"
                    rounded>
            Submit
          </b-button>
        </div>

      </form>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Contact",
    data() {
      return {
        "senderName": "",
        "fromMail": "",
        "content": ""
      }
    },
    methods: {
      submitForm: function () {
        console.log(this.senderName)
        console.log(this.fromMail)
        console.log(this.content)
      },
    }
  }
</script>

<style scoped>

</style>
