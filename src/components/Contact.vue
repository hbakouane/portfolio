<template>
  <!-- Contact Us -->
  <div class="container-fluid bg-light py-16" id="contact">
    <div class="container">
      <div class="row justify-center">
        <div class="col-md-4 my-auto">
          <p
            class="text-h3 blue-grey--text text--darken-4 font-weight-bold mb-0"
          >
            Contact Us
          </p>
          <p class="success--text py-0 my-0">Nous sommes à vore écoute 24/7</p>
          <v-btn
            href="https://wa.me/+212 693385403?text=Hello Haytam how areou doing?"
            text
            class="py-8 my-2 w-100 border lighten-5 font-weight-bold"
            elevation="0"
          >
            <div
              class="col-icon blue-grey darken-4 mr-auto"
              style="height: 50px; width: 50px;"
            >
              <v-icon class="contact-social-icon white--text"
                >mdi-whatsapp</v-icon
              >
            </div>
            +212 693385403
          </v-btn>
          <v-btn
            :href="'mailto' + social.email"
            text
            class="py-8 my-2 w-100 border lighten-5 font-weight-bold"
            elevation="0"
          >
            <div
              class="col-icon blue-grey darken-4 mr-auto"
              style="height: 50px; width: 50px;"
            >
              <v-icon class="contact-social-icon white--text">mdi-email</v-icon>
            </div>
            hbakouane@gmail.com
          </v-btn>
          <v-btn
            :href="social.facebook"
            text
            class="py-8 my-2 w-100 border lighten-5 font-weight-bold"
            elevation="0"
          >
            <div
              class="col-icon blue-grey darken-4 mr-auto"
              style="height: 50px; width: 50px;"
            >
              <v-icon class="contact-social-icon white--text"
                >mdi-facebook</v-icon
              >
            </div>
            Haytam Bakouane
          </v-btn>
          <v-btn
            :href="social.twitter"
            text
            class="py-8 my-2 w-100 border lighten-5 font-weight-bold"
            elevation="0"
          >
            <div
              class="col-icon blue-grey darken-4 mr-auto"
              style="height: 50px; width: 50px;"
            >
              <v-icon class="contact-social-icon white--text"
                >mdi-twitter</v-icon
              >
            </div>
            @BakouaneH
          </v-btn>
        </div>
        <div class="col-md-6">
          <v-form v-model="contactForm" ref="contactForm">
            <div v-if="loading">
              <v-progress-linear
                indeterminate
                color="light-blue lighten-1"
              ></v-progress-linear>
              <v-alert
                type="info"
                class="rounded-0"
                dense
                border="left"
                dismissible
                >Please wait . . .</v-alert
              >
            </div>
            <v-alert
              type="error"
              class="rounded-0"
              v-if="error"
              dense
              border="left"
              dismissible
              >All the fields are required.</v-alert
            >
            <v-alert
              type="success"
              class="rounded-0"
              color="blue-grey darken-4"
              v-if="success"
              dense
              border="left"
              dismissible
              >Your message was sent successfully.</v-alert
            >
            <div class="row">
              <div class="col-md-6 my-3">
                <v-text-field
                  placeholder="Nom complet"
                  color="blue-grey darken-4"
                  v-model="contact.name"
                  hide-details=""
                  :rules="rules.required"
                  outlined
                ></v-text-field>
              </div>
              <div class="col-md-6 my-3">
                <v-text-field
                  placeholder="Email"
                  color="blue-grey darken-4"
                  v-model="contact.email"
                  hide-details=""
                  :rules="rules.required"
                  outlined
                ></v-text-field>
              </div>
              <div class="col-md-12 my-3">
                <v-text-field
                  placeholder="Sujet"
                  color="blue-grey darken-4"
                  v-model="contact.subject"
                  hide-details=""
                  :rules="rules.required"
                  outlined
                ></v-text-field>
              </div>
              <div class="col-md- my-3">
                <v-textarea
                  placeholder="Message"
                  color="blue-grey darken-4"
                  v-model="contact.message"
                  hide-details=""
                  :rules="rules.required"
                  outlined
                ></v-textarea>
              </div>
              <div class="col-md-12 my-3">
                <v-btn
                  color="blue-grey darken-4"
                  class="white--text font-weight-bold w-100 rounded-0"
                  x-large
                  elevation="0"
                  @click="sendMessage()"
                >
                  Envoyer
                  <v-icon class="ml-2">mdi-arrow-right</v-icon>
                </v-btn>
              </div>
            </div>
          </v-form>
        </div>
      </div>
    </div>
  </div>
  <!-- / Contact Us -->
</template>

<script>
export default {
  name: "Contact",
  props: ["social"],
  data: () => ({
    contactForm: false,
    loading: false,
    error: false,
    success: false,
    contact: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    rules: {
      required: [(value) => !!value || "This field is required."],
    },
  }),
  methods: {
    sendMessage() {
      this.$refs.contactForm.validate();
      this.error = false;
      this.success = false;
      if (this.contactForm) {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.success = true;
          this.danger = false;
          this.$refs.contactForm.reset();
        }, 1000);
      }
    },
  },
};
</script>

<style>
.col-icon {
  border-radius: 50%;
  overflow: hidden;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
}
.col-icon i {
  font-size: 90px;
}
.section-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
.contact-social-icon {
  font-size: 28px !important;
}
.section-col p.text-h4 {
  font-size: 23px !important;
  margin-bottom: 7px;
}
</style>
