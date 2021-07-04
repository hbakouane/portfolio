<template>
  <div>
    <hero />

    <about />

    <!-- Speicialities -->
    <specialities />
    <!-- / Speicialities -->
    
    <portfolio />

    <!-- Contact Us -->
    <div class="container-fluid bg-light py-16" id="contact">
      <div class="container">
        <div class="row justify-center">
          <div class="col-md-4 my-auto">
            <p class="text-h3 blue-grey--text text--darken-4 font-weight-bold mb-0">Contact Us</p>
            <p class="success--text py-0 my-0">Nous sommes à vore écoute 24/7</p>
            <v-btn text class="py-8 my-2 w-100 border lighten-5 font-weight-bold" elevation="0">
              <div class="col-icon blue-grey darken-4 mr-auto" style="height: 50px; width: 50px;">
                <v-icon class="contact-social-icon white--text">mdi-whatsapp</v-icon>
              </div>
              +212 693385403 | +212 656734315
            </v-btn>
            <v-btn text class="py-8 my-2 w-100 border lighten-5 font-weight-bold" elevation="0">
              <div class="col-icon blue-grey darken-4 mr-auto" style="height: 50px; width: 50px;">
                <v-icon class="contact-social-icon white--text">mdi-email</v-icon>
              </div>
              contact@lonicdev.com
            </v-btn>
            <v-btn text class="py-8 my-2 w-100 border lighten-5 font-weight-bold" elevation="0">
              <div class="col-icon blue-grey darken-4 mr-auto" style="height: 50px; width: 50px;">
                <v-icon class="contact-social-icon white--text">mdi-facebook</v-icon>
              </div>
              Lonic Web Dev
            </v-btn>
            <v-btn text class="py-8 my-2 w-100 border lighten-5 font-weight-bold" elevation="0">
              <div class="col-icon blue-grey darken-4 mr-auto" style="height: 50px; width: 50px;">
                <v-icon class="contact-social-icon white--text">mdi-instagram</v-icon>
              </div>
              @lonicdev
            </v-btn>
          </div>
          <div class="col-md-6">
            <v-form v-model="contactForm" ref="contactForm">
              <v-alert type="info" v-if="loading" outlined dismissible>Please wait . . .</v-alert>
              <v-alert type="error" v-if="error" outlined dismissible>All the fields are required.</v-alert>
              <v-alert type="success" v-if="success" outlined dismissible>Your message was sent successfully.</v-alert>
              <div class="row">
                <div class="col-md-6 my-3">
                  <v-text-field placeholder="Nom complet" color="blue-grey darken-4" v-model="contact.name" hide-details="" :rules="rules.required" outlined></v-text-field>
                </div>
                <div class="col-md-6 my-3">
                  <v-text-field placeholder="Email" color="blue-grey darken-4" v-model="contact.email" hide-details="" :rules="rules.required" outlined></v-text-field>
                </div>
                <div class="col-md-12 my-3">
                  <v-text-field placeholder="Sujet" color="blue-grey darken-4" v-model="contact.subject" hide-details="" :rules="rules.required" outlined></v-text-field>
                </div>
                <div class="col-md- my-3">
                  <v-textarea placeholder="Message" color="blue-grey darken-4" v-model="contact.message" hide-details="" :rules="rules.required" outlined></v-textarea>
                </div>
                <div class="col-md-12 my-3">
                  <v-btn color="blue-grey darken-4" class="white--text font-weight-bold w-100 rounded-0" x-large elevation="0" @click="sendMessage()">
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

    <!-- Footer -->
    <div class="container-fluid blue-grey darken-4 py-5">
      <v-divider style="border: 1px solid white!important;"/>
      <p class="text-center white--text my-0 pt-5">Developed with <span class="red--text">♥</span> by <a class="text-light" :href="social.github">Haytam Bakouane</a>.</p>
      <p class="text-light text-center my-0">Sourced on 
        <v-btn icon href="https://github.com/hbakouane/portfolio" class="text-light"><v-icon>mdi-github</v-icon></v-btn>
      </p>
      <p class="text-center white--text my-0 mb-0">All rights are reserved.</p>
    </div>
    <!-- / Footer -->

    <particles-bg class="" style="z-index: 1; opacity: .8; position: fixed;" type="thick" :bg="true" />

    <!-- Social Media Icons -->
    <div class="social-media rounded py-5 px-3" color="white blue--text">
      <ul class="p-0" style="padding-left: 0;">
        <li class="li my-3">
          <v-btn icon :href="social.upwork" class="social-media-icon" target="_blank">
            <v-img src="../assets/images/upwork.png" contain class="img-fluid" style="height: 25px;"></v-img>
          </v-btn>
        </li>
        <li class="li my-3">
          <v-btn icon :href="social.facebook" class="social-media-icon" target="_blank">
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
        </li>
        <li class="li my-3">
          <v-btn icon :href="social.twitter" class="social-media-icon" target="_blank">
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
        </li>
        <li class="li my-3">
          <v-btn icon :href="social.linkedin" class="social-media-icon" target="_blank">
            <v-icon>mdi-linkedin</v-icon>
          </v-btn>
        </li>
        <li class="li my-3">
          <v-btn icon :href="social.github" class="social-media-icon" target="_blank">
            <v-icon>mdi-github</v-icon>
          </v-btn>
        </li>
        <li class="li my-3">
          <v-btn icon :href="'mailto:'+social.email" class="social-media-icon" target="_blank">
            <v-icon>mdi-email</v-icon>
          </v-btn>
        </li>
      </ul>
    </div>
    <!-- / Social Media Icons -->
  </div>
</template>

<script>
import { ParticlesBg } from "particles-bg-vue";
import About from './../components/About';
import Hero from './../components/Hero';
import Portfolio from './../components/Portfolio';
import Specialities from './../components/Specialities';

export default {
  name: 'Home',
  components: { ParticlesBg, About, Hero, Specialities, Portfolio },
  data: () => ({
    contactForm: false,
    loading: false,
    error: false,
    success: false,
    contact: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    rules: {
      required: [value => !! value || 'This field is required.']
    },
    social: {
      email: 'hbakouane@gmail.com',
      facebook: 'https://web.facebook.com/cole.haytam.7/',
      whatsapp: '+212 693385403',
      twitter: 'https://twitter.com/BakouaneH',
      linkedin: 'https://www.linkedin.com/in/haytam-bakouane-a36a54197/',
      upwork: 'https://www.upwork.com/freelancers/~0154e49d95a00ee989',
      github: 'https://github.com/hbakouane'
    }
  }),
  methods: {
    sendMessage() {
      this.$refs.contactForm.validate()
      this.error = false
      this.success = false
      if (this.contactForm) {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.success = true
          this.danger = false
          this.$refs.contactForm.reset()
        }, 1000)
      }
    }
  }
}
</script>

<style scoped>
  *, p {
    z-index: 20;
    position: relative;
  }
  .social-media {
    background: white;
    position: fixed;
    z-index: 20;
    top: 35%;
    right: 3%;
  }
  .social-media-icon {
    text-decoration: none;
    list-style: none !important;
    font-size: 15px !important;
  }
  .li {
    list-style: none;
  }
  .social-media:before {
    position: absolute;
    content: "";
    background: white;
    height: 100vh;
    width: 1px;
    top: 0;
    left: 50%;
  }
  .radius {
    border-radius: 12px;
  }
  .radius-t {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
  .contact-social-icon {
    font-size: 28px !important;
  }

  @media screen and (max-width: 1033px) {
    .hero .container .row {
      margin-top: 22vh;
    }
  }
  @media screen and (max-width: 1100px) {
    .hero {
      height: 100vh !important;
    }
    .hero .container .row {
      margin-top: 17vh;
    }
    .v-btn.v-btn--has-bg, .v-btn.v-btn--outlined {
      width: 100% !important;
      max-width: 100% !important;
      margin-left: 0% !important;
      margin-right: 0% !important;
      margin-top: 10px;
    }
    .section-col p.text-h4 {
      font-size: 23px !important;
      margin-bottom: 7px;
    }
  }
  @media screen and (max-width: 768px) {
    .typer span, .hero-text {
      font-size: 35px;
    }
    .hero .container .row {
      margin-top: 30vh;
    }
  }
</style>