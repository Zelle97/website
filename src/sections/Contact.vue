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

      <form id="contact-form" @submit="">

        <b-field :label="$t('contact.name')">
          <b-input id="form-name" v-model="senderName" type="name" required="required"
                   :placeholder="$t('contact.ph_name')"></b-input>
        </b-field>

        <b-field :label="$t('contact.email')">
          <b-input id="form-mail"
                   v-model="fromMail"
                   type="email"
                   icon="email"
                   :placeholder="$t('contact.ph_email')">
          </b-input>
        </b-field>

        <b-field :label="$t('contact.message')">
          <b-input id="form-message" v-model="content" maxlength="600" type="textarea" required="required"
                   :placeholder="$t('contact.ph_message')"></b-input>
        </b-field>

        <div class="has-text-centered">
          <vue-recaptcha
            ref="recaptcha"
            sitekey="6Ledt8UUAAAAAEh1smA69WF4f8TsSXve6Wl5BO_J"
            @verify="onCaptchaVerified">
            <b-button type="is-info"
                      outlined
                      rounded>
              Submit
            </b-button>
          </vue-recaptcha>

        </div>

      </form>

    </div>
  </section>
</template>

<script>

  import axios from "axios";
  import VueRecaptcha from "vue-recaptcha"

  export default {
    name: "Contact",
    components: {VueRecaptcha},
    data() {
      return {
        loading: false,
        "senderName": "",
        "fromMail": "",
        "content": ""
      }
    },
    methods: {
      onCaptchaVerified: function (token) {
        if (this.verifyInput()) {
          this.verifyToken(token);
        } else {
          this.showInputErrors();
          this.showError(this.$t('contact.form_input_error'));
          this.$refs.recaptcha.reset();
        }
      },
      verifyInput: function () {
        return document.getElementById("form-name").checkValidity() &&
          document.getElementById("form-mail").checkValidity() &&
          document.getElementById("form-message").checkValidity();
      },
      showInputErrors: function () {
        document.getElementById("form-name").reportValidity();
        document.getElementById("form-mail").reportValidity();
        document.getElementById("form-message").reportValidity();
      },
      verifyToken: function (token) {
        let that = this;
        axios.post('https://backend.zellerfabian.de/submitForm', {
          senderName: this.senderName,
          fromMail: this.fromMail,
          content: this.content,
          "g-recaptcha-response": token
        })
          .then(function (response) {
            that.showSuccess(that.$t('contact.form_submit_success'))
          })
          .catch(function (error) {
            that.showError(that.$t('contact.form_submit_error'))
          })
      },
      showError: function (message) {
        this.$buefy.toast.open({
          message: message,
          position: 'is-bottom-left',
          type: 'is-danger'
        })
      },
      showSuccess: function (message) {
        this.$buefy.toast.open({
          message: message,
          position: 'is-bottom-right',
          type: 'is-success'
        })
      }
    }
  }
</script>

<style scoped>

</style>
