<template>
  <!-- Portfolio -->
  <div class="container-fluid py-16 " id="portfolio">
    <div class="container">
      <p class="text-center font-weight-bold hero-text text-light">Portfolio</p>
      <div class="row">
        <div class="col-md-4">
          <v-card>
            <v-card-text class="p-0">
              <v-img
                src="../assets/images/mataonme.png"
                class="w-100 rounded-t"
                height="250px"
              ></v-img>
              <div class="p-3">
                <p class="h3 blue-grey--text text--darken-4 font-weight-bold">
                  Mataonme
                </p>
                <v-chip color="indigo lighten-4 mb-3" :ripple="true"
                  >SaaS</v-chip
                >
                <p class="text-muted">
                  Mataonme is a links sharing plateform which allow the users to
                  gather their links in one place, and get the one link they
                  need.
                </p>
                <v-chip
                  color="red darken-4 mb-3 white--text"
                  small
                  :ripple="true"
                  >Laravel</v-chip
                >
                <v-chip
                  color="green darken-4 mb-3 white--text mx-2"
                  small
                  :ripple="true"
                  >Vue</v-chip
                >
                <v-chip
                  color="blue lighten-1 mb-3 white--text"
                  small
                  :ripple="true"
                  >Vuetify</v-chip
                >
              </div>
            </v-card-text>
            <v-card-actions
              class="d-flex justify-content-center indigo lighten-4 py-4"
            >
              <v-btn href="#" icon class="indigo--text darken-3" disabled>
                <v-icon>mdi-github</v-icon>
              </v-btn>
              <v-btn
                href="https://www.mataonme.com"
                icon
                class="indigo--text darken-3"
                target="_blank"
              >
                <v-icon>mdi-link</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
        <div class="col-md-4">
          <v-card>
            <v-card-text class="p-0">
              <v-img
                src="../assets/images/live-chat.webp"
                class="w-100 rounded-t"
                height="250px"
              ></v-img>
              <div class="p-3">
                <p class="h3 blue-grey--text text--darken-4 font-weight-bold">
                  Livechat
                </p>
                <v-chip color="indigo lighten-4 mb-3" :ripple="true"
                  >PLUGIN</v-chip
                >
                <p class="text-muted">
                  This project allows the users for a plateform to connect with
                  the admins of this plateform with a fluent way, it supports
                  files, images and videos sharing as well.
                </p>
                <v-chip
                  color="red darken-4 mb-3 white--text"
                  small
                  :ripple="true"
                  >Laravel</v-chip
                >
                <v-chip
                  color="red darken-1 mb-3 white--text mx-2"
                  small
                  :ripple="true"
                  >Livewire</v-chip
                >
                <v-chip
                  color="indigo darken-1 mb-3 white--text"
                  small
                  :ripple="true"
                  >Bootstrap</v-chip
                >
              </div>
            </v-card-text>
            <v-card-actions
              class="d-flex justify-content-center indigo lighten-4 py-4"
            >
              <v-btn
                target="_blank"
                href="https://github.com/hbakouane/admin-user-chatting"
                icon
                class="indigo--text darken-3"
              >
                <v-icon>mdi-github</v-icon>
              </v-btn>
              <v-btn href="#" icon class="indigo--text darken-3" disabled>
                <v-icon>mdi-link</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
        <div class="col-md-4">
          <v-card>
            <v-card-text class="p-0">
              <v-img
                src="../assets/images/gymeo.png"
                class="w-100 rounded-t"
                height="250px"
              ></v-img>
              <div class="p-3">
                <p class="h3 blue-grey--text text--darken-4 font-weight-bold">
                  Gymeo
                </p>
                <v-chip color="indigo lighten-4 mb-3 mr-2" :ripple="true"
                  >SaaS</v-chip
                >
                <v-chip color="indigo lighten-4 mb-3" :ripple="true"
                  >CRM</v-chip
                >
                <p class="text-muted">
                  Gymeo is a CRM for GYM owners, they can manage their
                  subscriptions, earnings, expenses at one place, not only that
                  adding staves with specific roles is also supported.
                </p>
                <v-chip
                  color="red darken-4 mb-3 white--text"
                  small
                  :ripple="true"
                  >Laravel</v-chip
                >
                <v-chip
                  color="red darken-1 mb-3 white--text mx-2"
                  small
                  :ripple="true"
                  >Livewire</v-chip
                >
                <v-chip
                  color="indigo darken-1 mb-3 white--text"
                  small
                  :ripple="true"
                  >Bootstrap</v-chip
                >
              </div>
            </v-card-text>
            <v-card-actions
              class="d-flex justify-content-center indigo lighten-4 py-4"
            >
              <v-btn
                target="_blank"
                href="#"
                icon
                class="indigo--text darken-3"
                disabled
              >
                <v-icon>mdi-github</v-icon>
              </v-btn>
              <v-btn
                href="https://gymeo.lonicdev.com"
                icon
                class="indigo--text darken-3"
                target="_blank"
              >
                <v-icon>mdi-link</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
        <div class="col-md-4">
          <v-card>
            <v-card-text class="p-0">
              <v-img
                src="../assets/images/watchfly.png"
                class="w-100 rounded-t"
                height="250px"
              ></v-img>
              <div class="p-3">
                <p class="h3 blue-grey--text text--darken-4 font-weight-bold">
                  Watchfly
                </p>
                <v-chip color="indigo lighten-4 mb-3" :ripple="true"
                  >PLATEFORM</v-chip
                >
                <p class="text-muted">
                  Watchfly is a plateform allowing its users to see movies
                  trials, actors, series, shows and more ..., all these
                  information are coming from the
                  <a href="https://developers.themoviedb.org/3" target="_blank"
                    >The Movie DB API</a
                  >.
                </p>
                <v-chip
                  color="red darken-4 mb-3 white--text"
                  small
                  :ripple="true"
                  >Laravel</v-chip
                >
              </div>
            </v-card-text>
            <v-card-actions
              class="d-flex justify-content-center indigo lighten-4 py-4"
            >
              <v-btn
                target="_blank"
                href="https://github.com/hbakouane/watchfly"
                icon
                class="indigo--text darken-3"
              >
                <v-icon>mdi-github</v-icon>
              </v-btn>
              <v-btn href="#" icon class="indigo--text darken-3" disabled>
                <v-icon>mdi-link</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
        <div class="col-md-4">
          <v-card>
            <v-card-text class="p-0">
              <v-img
                src="../assets/images/portfoi.jpg"
                class="w-100 rounded-t"
                height="250px"
              ></v-img>
              <div class="p-3">
                <p class="h3 blue-grey--text text--darken-4 font-weight-bold">
                  Portfoi
                </p>
                <v-chip color="indigo lighten-4 mb-3" :ripple="true"
                  >PAGE BUILDER</v-chip
                >
                <p class="text-muted">
                  Portfolio is a portfolio builder dedicated for designers
                  especially, the users can customize their pages's font,
                  colours, background and more features ...
                </p>
                <v-chip
                  color="red darken-4 mb-3 white--text"
                  small
                  :ripple="true"
                  >Laravel</v-chip
                >
                <v-chip
                  color="green darken-1 mb-3 white--text mx-2"
                  small
                  :ripple="true"
                  >Vue</v-chip
                >
                <v-chip
                  color="blue lighten-1 mb-3 white--text"
                  small
                  :ripple="true"
                  >Vuetify</v-chip
                >
              </div>
            </v-card-text>
            <v-card-actions
              class="d-flex justify-content-center indigo lighten-4 py-4"
            >
              <v-btn
                target="_blank"
                href="#"
                icon
                class="indigo--text darken-3"
                disabled
              >
                <v-icon>mdi-github</v-icon>
              </v-btn>
              <v-btn
                href="https://www.portfoi.com"
                icon
                class="indigo--text darken-3"
                target="_blank"
              >
                <v-icon>mdi-link</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
        <div class="col-md-4">
          <v-card>
            <v-card-text class="p-0">
              <v-img
                src="../assets/images/shop-builder.png"
                class="w-100 rounded-t"
                height="250px"
              ></v-img>
              <div class="p-3">
                <p class="h3 blue-grey--text text--darken-4 font-weight-bold">
                  Stores Builder
                </p>
                <v-chip color="indigo lighten-4 mb-3" :ripple="true"
                  >STORE</v-chip
                >
                <p class="text-muted">
                  Now you can create your store in minutes, this project is
                  dedicated especially for the COD (Cash on delivery) business.
                </p>
                <v-chip
                  color="red darken-4 mb-3 white--text"
                  small
                  :ripple="true"
                  >Laravel</v-chip
                >
                <v-chip
                  color="green darken-1 mb-3 white--text mx-2"
                  small
                  :ripple="true"
                  >Vue</v-chip
                >
                <v-chip
                  color="green darken-1 mb-3 white--text"
                  small
                  :ripple="true"
                  >Vuex</v-chip
                >
                <v-chip
                  color="green darken-1 mb-3 white--text mx-2"
                  small
                  :ripple="true"
                  >Vue Router</v-chip
                >
                <v-chip
                  color="indigo darken-1 mb-3 white--text"
                  small
                  :ripple="true"
                  >Bootstrap</v-chip
                >
              </div>
            </v-card-text>
            <v-card-actions
              class="d-flex justify-content-center indigo lighten-4 py-4"
            >
              <v-btn
                target="_blank"
                href="#"
                icon
                class="indigo--text darken-3"
                disabled
              >
                <v-icon>mdi-github</v-icon>
              </v-btn>
              <v-btn
                href="https://www.shop.lonicdev.com/"
                icon
                class="indigo--text darken-3"
                target="_blank"
              >
                <v-icon>mdi-link</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </div>
    </div>
  </div>
  <!-- / Portfolio -->
</template>

<script>
export default {
  name: "Portfolio",
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
