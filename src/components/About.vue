<template>
  <!-- About Us -->
  <div
    class="container-fluid bg-white py-16 animate__animated animate__fadeInUp"
    id="about"
  >
    <div class="container text-center">
      <p class="blue-grey--text font-weight-bold darken-4 text-h3">About Me</p>
      <p class="text-muted">
        I'm Haytam Bakouane, A Full Stack web developer, I been a freelancer for
        1 year from now, in that time I have worked with a lot of people on
        Upwork and Fiverr, I have also made connections with freelancers and web
        designers from all over the world, I worked with them as well to share
        the knowledge with each other and to be a competent developer, I love
        working in a team, it feels really good!
        <br />
        Technologies I work with:
      </p>
      <div class="row mb-3 justify-center">
        <div class="col-md-2 text-center ma-2">
          <v-img
            src="data:image/png;base64,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"
            class="img-fluid technologie"
            contain
          />
          <br />
          <span class="font-weight-bold">HTML5</span>
        </div>
        <div class="col-md-2 text-center ma-2">
          <v-img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
            class="img-fluid technologie"
            contain
          />
          <br />
          <span class="font-weight-bold">CSS3</span>
        </div>
        <div class="col-md-2 text-center ma-2">
          <v-img
            src="https://believemy.com/uploads/7a07b4e35512ec31db231819af811fd5_ab97cd2da28b6b76f5838b5c8c74852e.svg"
            class="img-fluid technologie"
            contain
          />
          <br />
          <span class="font-weight-bold">BOOTSTRAP</span>
        </div>
        <div class="col-md-2 text-center ma-2">
          <v-img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png"
            class="img-fluid technologie"
            contain
          />
          <br />
          <span class="font-weight-bold">PHP</span>
        </div>
        <div class="col-md-2 text-center ma-2">
          <v-img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png"
            class="img-fluid technologie"
            contain
          />
          <br />
          <span class="font-weight-bold">LARAVEL</span>
        </div>
        <div class="col-md-2 text-center ma-2">
          <v-img
            src="https://laravel-livewire.com/img/twitter.png"
            class="img-fluid technologie"
            contain
          />
          <br />
          <span class="font-weight-bold">LIVEWIRE</span>
        </div>
        <div class="col-md-2 text-center ma-2">
          <v-img
            src="data:image/png;base64,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"
            class="img-fluid technologie"
            contain
          />
          <br />
          <span class="font-weight-bold">JAVASCRIPT</span>
        </div>
        <div class="col-md-2 text-center ma-2">
          <v-img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png"
            class="img-fluid technologie"
            contain
          />
          <br />
          <span class="font-weight-bold">VUE</span>
        </div>
        <div class="col-md-2 text-center ma-2">
          <v-img
            src="data:image/png;base64,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"
            class="img-fluid technologie"
            contain
          />
          <br />
          <span class="font-weight-bold">VUETIFY</span>
        </div>
        <div class="col-md-2 text-center ma-2">
          <v-img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1200px-WordPress_blue_logo.svg.png"
            class="img-fluid technologie"
            contain
          />
          <br />
          <span class="font-weight-bold">WORDPRESS</span>
        </div>
        <div class="col-md-2 text-center ma-2">
          <v-img
            src="data:image/png;base64,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"
            class="img-fluid technologie"
            contain
          />
          <br />
          <span class="font-weight-bold">SHOPIFY</span>
        </div>
        <div class="col-md-2 text-center ma-2">
          <v-img
            src="data:image/png;base64,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"
            class="img-fluid technologie"
            contain
          />
          <br />
          <span class="font-weight-bold">GITHUB</span>
        </div>
      </div>
      <div class="text-center">
        <v-btn
          href="#portfolio"
          color="blue-grey darken-4"
          elevation="0"
          class="rounded-0 white--text"
          large
          outlined
          >Portfolio</v-btn
        >
        <v-btn
          href="#contact"
          color="blue-grey darken-4"
          elevation="0"
          class="rounded-0 white--text mx-4"
          large
          >Let's Talk About Your Project</v-btn
        >
        <v-btn
          href="#testimonials"
          color="blue-grey darken-4"
          elevation="0"
          class="rounded-0 white--text"
          large
          outlined
          >Testimonials</v-btn
        >
      </div>
    </div>
  </div>
  <!-- / About Us -->
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.technologie {
  height: 57px !important;
  transition: 0.5s;
}
.technologie:hover {
  transition: 0.5s;
  transform: scale(1.09);
}
@media screen and (max-width: 1100px) {
  .v-btn.v-btn--has-bg,
  .v-btn.v-btn--outlined {
    width: 100% !important;
    max-width: 100% !important;
    margin-left: 0% !important;
    margin-right: 0% !important;
    margin-top: 10px;
  }
}
</style>
