<template>
  <div>
    <!-- Hero -->
    <div class="hero my-auto">
      <div class="container">
        <div class="row justify-center">
          <div class="col-md-10 text-center">
            <p class="typer hero-text text-center">
              Nous réalisons des produits
              <br />
              <vue-typer :text="['Responsives', 'Clean-coded', 'De qualités', 'De valeur']" style="z-index: 5;"></vue-typer>.
            </p>
            <v-btn href="#about" color="white darken-4 mx-3" outlined class="white--text rounded-0" elevation="0" append x-large style="z-index: 10; position: relative;">A propos de nous</v-btn>
            <v-btn href="#contact" color="blue-grey darken-4 mx-3" class="white--text rounded-0" elevation="0" append x-large style="z-index: 10; position: relative;">Parlons de votre projet</v-btn>
          </div>
        </div>
      </div>
    </div>
    <!-- Hero -->

    <!-- About Us -->
    <div class="container-fluid bg-white py-5 animate__animated animate__fadeInUp" id="about">
      <div class="row justify-center">
        <div class="col-md-4 text-center">
          <v-img contain src="../assets/developer.svg" class="img-fluid" style="height: auto;"></v-img>
        </div>
        <div class="col-md-4 my-auto">
          <p class="blue-grey--text font-weight-bold darken-4 text-h3">A propos nous</p>
          <p class="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe fugiat, sit pariatur itaque aliquid odit alias placeat officia quis commodi blanditiis vel magnam non! Ducimus ipsam excepturi eligendi iste. Deserunt molestiae porro odit error ad illum vero obcaecati exercitationem eligendi, asperiores autem totam hic culpa itaque provident aspernatur eum repellendus veniam, dignissimos dolorem voluptatem at? Eos commodi, sequi blanditiis quis quo nihil consequatur cumque, accusamus quos molestiae ipsa quam deserunt aperiam fugit architecto delectus officia! Ipsam totam, nisi ab at eaque nam veritatis recusandae dolore ad incidunt adipisci quidem nemo et quisquam quis neque delectus fuga! Minima id omnis sequi?
          </p>
          <v-btn href="#portfolio" color="blue-grey darken-4 mr-4" elevation="0" class="rounded-0 white--text" large outlined>Voir notre Portfolio</v-btn>
          <v-btn href="#contact" color="blue-grey darken-4 ml-3" elevation="0" class="rounded-0 white--text" large>Parlons de votre projet</v-btn>
        </div>
      </div>
    </div>
    <!-- / About Us -->

    <!-- Speicialities -->
    <div class="container-fluid bg-light border-top py-16" id="specialities">
      <div class="container">
        <p class="blue-grey--text font-weight-bold darken-4 text-h3 text-center">Nos spécialités</p>
          <div class="row">
            <div class="col-md-4 section-col">
              <div class="col-icon indigo indigo--text lighten-5 text--darken-4">
                <v-icon class="indigo--text lighten-5 text--darken-4">mdi-code-tags</v-icon>
              </div>
              <p class="text-h4 mt-3 font-weight-bold indigo--text lighten-5 text-darken-4">Dévelopment web</p>
              <p class="text-muted text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nulla nesciunt consequatur praesentium mollitia ad animi voluptatibus libero quo, eveniet iste itaque cum dolore accusantium.
              </p>
            </div>
            <div class="col-md-4 section-col">
              <div class="col-icon blue blue--text lighten-5 text--darken-4">
                <v-icon class="blue--text lighten-5 text--darken-4">mdi-cellphone</v-icon>
              </div>
              <p class="text-h4 mt-3 font-weight-bold blue--text lighten-5 text-darken-4">Applications mobiles</p>
              <p class="text-muted text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nulla nesciunt consequatur praesentium mollitia ad animi voluptatibus libero quo, eveniet iste itaque cum dolore accusantium.
              </p>
            </div>
            <div class="col-md-4 section-col">
              <div class="col-icon teal teal--text lighten-5 text--darken-4">
                <v-icon class="teal--text lighten-5 text--darken-4">mdi-google-analytics</v-icon>
              </div>
              <p class="text-h4 mt-3 font-weight-bold teal--text lighten-5 text-darken-4">Marketing digital & SEO</p>
              <p class="text-muted text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nulla nesciunt consequatur praesentium mollitia ad animi voluptatibus libero quo, eveniet iste itaque cum dolore accusantium.
              </p>
            </div>
          </div>
      </div>
    </div>
    <!-- / Speicialities -->
    
    <!-- Portfolio -->
    <div class="container-fluid py-16 bg-white" id="portfolio">
      <div class="container">
        <p class="text-center font-weight-bold hero-text" style="color: #263238 !important;">Portfolio</p>
        <div class="row">
          <div class="col-md-4">
            <v-card>
              <v-card-text class="p-0">
                <v-img src="https://www.ebmsoft.net/img/mosaweqen.png" class="w-100 rounded-t" height="250px"></v-img>
                <div class="p-3">
                  <p class="h3 blue-grey--text text--darken-4 font-weight-bold">This project system</p>
                  <v-chip color="indigo lighten-4 mb-3">Ecommerce</v-chip>
                  <p class="text-muted">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus odit possimus recusandae voluptates repellat iure excepturi rerum. Omnis iure dolorem est iusto ex consectetur praesentium quam eius, ducimus odit animi!
                  </p>
                </div>
              </v-card-text>
              <v-card-actions class="d-flex justify-content-center indigo lighten-4 py-4">
                <v-btn href="#" icon class="indigo--text darken-3">
                  <v-icon>mdi-github</v-icon>
                </v-btn>
                <v-btn href="#" icon class="indigo--text darken-3">
                  <v-icon>mdi-link</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>
          <div class="col-md-4">
            <v-card>
              <v-card-text class="p-0">
                <v-img src="https://www.ebmsoft.net/img/mosaweqen.png" class="w-100 rounded-t" height="250px"></v-img>
                <div class="p-3">
                  <p class="h3 blue-grey--text text--darken-4 font-weight-bold">This project system</p>
                  <v-chip color="indigo lighten-4 mb-3">CRM</v-chip>
                  <p class="text-muted">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus odit possimus recusandae voluptates repellat iure excepturi rerum. Omnis iure dolorem est iusto ex consectetur praesentium quam eius, ducimus odit animi!
                  </p>
                </div>
              </v-card-text>
              <v-card-actions class="d-flex justify-content-center indigo lighten-4 py-4">
                <v-btn href="#" icon class="indigo--text darken-3">
                  <v-icon>mdi-github</v-icon>
                </v-btn>
                <v-btn href="#" icon class="indigo--text darken-3">
                  <v-icon>mdi-link</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>
          <div class="col-md-4">
            <v-card>
              <v-card-text class="p-0">
                <v-img src="https://www.ebmsoft.net/img/mosaweqen.png" class="w-100 rounded-t" height="250px"></v-img>
                <div class="p-3">
                  <p class="h3 blue-grey--text text--darken-4 font-weight-bold">This project system</p>
                  <v-chip color="indigo lighten-4 mb-3">SaaS</v-chip>
                  <p class="text-muted">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus odit possimus recusandae voluptates repellat iure excepturi rerum. Omnis iure dolorem est iusto ex consectetur praesentium quam eius, ducimus odit animi!
                  </p>
                </div>
              </v-card-text>
              <v-card-actions class="d-flex justify-content-center indigo lighten-4 py-4">
                <v-btn href="#" icon class="indigo--text darken-3">
                  <v-icon>mdi-github</v-icon>
                </v-btn>
                <v-btn href="#" icon class="indigo--text darken-3">
                  <v-icon>mdi-link</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </div>
        </div>
      </div>
    </div>
    <!-- / Portfolio -->

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
    <!--<div class="container-fluid blue-grey darken-2 pt-7 pb-3">
      <div class="container">
        <div class="row justify-center">
          <div class="col-md-4">
            <p class="white--text text-h4 font-weight-bold">A propos</p>
            <v-img lazy-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYJYG0mEP9812gIJO4bM6TnUrkM8_gydwmlg&usqp=CAU" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYJYG0mEP9812gIJO4bM6TnUrkM8_gydwmlg&usqp=CAU" class="img-fluid"></v-img>
            <p class="white--text pt-4 bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam animi magnam mollitia, quaerat eos, pariatur amet, ut quibusdam fugit perferendis eaque modi velit laboriosam ullam excepturi soluta molestias unde facilis.
            </p>
          </div>
          <div class="col-md-4">
            <p class="white--text text-h4 font-weight-bold">Liens rapides</p>
            <v-btn text class="py-8 my-2 w-100 border white--text font-weight-bold" elevation="0">
              Accueil
            </v-btn>
            <v-btn text class="py-8 my-2 w-100 border white--text font-weight-bold" elevation="0">
              A propos de nous
            </v-btn>
            <v-btn text class="py-8 my-2 w-100 border white--text font-weight-bold" elevation="0">
              Nos spécialités
            </v-btn>
            <v-btn text class="py-8 my-2 w-100 border white--text font-weight-bold" elevation="0">
              Portfolio
            </v-btn>
            <v-btn text class="py-8 my-2 w-100 border white--text font-weight-bold" elevation="0">
              Contacter nous
            </v-btn>
          </div>
        </div>
      </div>
    </div>-->
    <div class="container-fluid blue-grey darken-4 py-5">
      <v-divider style="border: 1px solid white!important;"/>
      <p class="text-center white--text pt-5">Developed <span class="red--text">♥</span> by Lonic Team.</p>
      <p class="text-center white--text mb-0">All rights are reserved.</p>
    </div>
    <!-- / Footer -->

    <particles-bg class="" style="z-index: 1; opacity: .8; position: fixed;" type="thick" :bg="true" />

    <!-- Social Media Icons -->
    <div class="social-media rounded py-5 px-3" color="white blue--text">
      <ul class="p-0" style="padding-left: 0;">
        <li class="li my-3">
          <a href="#" class="social-media-icon">
            <v-icon>mdi-facebook</v-icon>
          </a>
        </li>
        <li class="li my-3">
          <a href="" class="social-media-icon">
            <v-icon>mdi-instagram</v-icon>
          </a>
        </li>
        <li class="li my-3">
          <a href="" class="social-media-icon">
            <v-icon>mdi-linkedin</v-icon>
          </a>
        </li>
        <li class="li my-3">
          <a href="" class="social-media-icon">
            <v-icon>mdi-email</v-icon>
          </a>
        </li>
      </ul>
    </div>
    <!-- / Social Media Icons -->
  </div>
</template>

<script>
  import { VueTyper } from 'vue-typer'
  import { ParticlesBg } from "particles-bg-vue";

  export default {
    name: 'Home',
    components: { VueTyper, ParticlesBg },
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
  .hero {
    height: 100vh !important;
  }
  .hero .container .row {
    margin-top: 21vh;
  }
  .typer span {
    position: relative;
    font-size: 87px;
    background: white !important;
    color: rgba(0, 0, 0, 0.465) !important;
    font-weight: bold;
  }
  span.vue-typer {
    color: rgba(0, 0, 0, 0.465) !important;
  }
  .hero-text {
    font-size: 87px;
    position: relative;
    color: white !important;
    z-index: 10;
    font-weight: bold;
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