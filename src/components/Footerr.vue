<template>
  <!-- Footer -->
  <div class="container-fluid blue-grey darken-4 py-5">
    <v-divider style="border: 1px solid white!important;" />
    <p class="text-center white--text my-0 pt-5">
      Developed with <span class="red--text">♥</span> by
      <a class="text-light" :href="social.github">Haytam Bakouane</a>.
    </p>
    <p class="text-light text-center my-0">
      Sourced on
      <v-btn
        icon
        href="https://github.com/hbakouane/portfolio"
        class="text-light"
        ><v-icon>mdi-github</v-icon></v-btn
      >
    </p>
    <p class="text-center white--text my-0 mb-0">All rights are reserved.</p>
  </div>
  <!-- / Footer -->
</template>

<script>
export default {
  name: "Footerr",
  props: ["social"],
};
</script>

<style scoped>
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
