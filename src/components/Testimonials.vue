<template>
  <!-- Specialities -->
  <div>
    <div class="container-fluid bg-light border-top py-16" id="testimonials">
      <div class="container">
        <p
          class="blue-grey--text font-weight-bold darken-4 mb-5 text-h3 text-center"
        >
          Testimonials
        </p>
        <carousel :autoplay="true" :items="1" :dots="true">
          <v-img
            class="radius border"
            src="../assets/images/testimonial1.png"
          />
          <v-img
            class="radius border"
            src="../assets/images/testimonial2.png"
          />
          <v-img
            class="radius border"
            src="../assets/images/testimonial3.png"
          />
          <v-img
            class="radius border"
            src="../assets/images/testimonial4.png"
          />
          <v-img
            class="radius border"
            src="../assets/images/testimonial5.png"
          />
        </carousel>
      </div>
    </div>
  </div>
  <!-- Specialities -->
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  name: "Testimonials",
  components: { carousel },
};
</script>

<style scoped>
.owl-stage {
  max-width: 100%;
  width: 100% !important;
}
.owl-item {
  max-width: 100%;
}
.radius {
  border-radius: 12px;
}
</style>
