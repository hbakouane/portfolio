<template>
  <v-app>
    <navbar />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/global/Navbar'

export default {
  name: 'App',
  components: { Navbar },
  data: () => ({
    metaInfo: {
      title: 'Haytam Bakouane\'s Portfolio - A Laravel/Vue developer located in Morocco, Fez.',
      titleTemplate: '%s - Laravel / Vue developer'
    }
  }),
  created() {
    document.head.querySelector('title').textContent = this.metaInfo.title
  }
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Mulish:wght@100;200;300;400;500;600;700;800;900&display=swap');
  @import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');
  #app, .v-application .text-h1, .v-application .text-h2, .v-application .text-h3, .v-application .text-h4, .v-application .text-h5, .v-application .text-h6 {
    font-family: 'Mulish' !important;
  }
</style>
