<template>
    <div>
        <v-app-bar
            app
            color="white"
            elevate-on-scroll
            inverted-scroll
            height="100px"
            style="z-index: 25;"
        >
            <v-spacer></v-spacer>
            <div class="d-flex align-center">
                <v-img
                alt="Vuetify Logo"
                class="shrink mr-2"
                contain
                :src="logo"
                transition="scale-transition"
                width="40"
                />
            </div>

            <v-spacer></v-spacer>

            <div>
                <v-btn
                    :href="item.href"
                    text
                    :class="[item.class, 'hidden-md-and-down']"
                    v-for="(item, index) in items"
                    :key="index"
                >
                    <span class="mr-2">{{ item.item }}</span>
                </v-btn>
            </div>
            <v-btn href="/#contact" color="blue-grey darken-3" class="white--text rounded-0" elevation="0" large>Let's Talk</v-btn>
            <v-btn icon class="hidden-lg-and-up" @click="drawer = !drawer">
                <v-icon>mdi-menu</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-navigation-drawer class="pa-5" fixed absolute permanent height="111vh" style="z-index: 100" v-if="drawer">
                <div class="d-flex justify-center">
                    <v-img
                    alt="Vuetify Logo"
                    class="shrink mr-2"
                    contain
                    :src="logo"
                    transition="scale-transition"
                    width="40"
                    />
                </div>
                <v-list nav dense>
                    <v-list-item :href="item.href" v-for="(item, index) in items" :key="index">
                        <v-list-item-content>{{ item.item }}</v-list-item-content>
                    </v-list-item>
                </v-list>
                <v-btn-toggle class="text-center d-flex justify-center">
                    <v-btn icon class="bg-light border"><v-icon>mdi-facebook</v-icon></v-btn>
                    <v-btn icon class="bg-light border"><v-icon>mdi-instagram</v-icon></v-btn>
                    <v-btn icon class="bg-light border"><v-icon>mdi-email</v-icon></v-btn>
                </v-btn-toggle>
            </v-navigation-drawer>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    data: () => ({
        items: [
            { item: 'Home', href: '#top', class: '' },
            { item: 'About Me', href: '#about', class: '' },
            { item: 'Testmonials', href: '#testimonials', class: '' },
            { item: 'Portfolio', href: '#portfolio', class: '' },
            { item: 'Contact Me', href: '#contact', class: '' }
        ],
        drawer: false,
        logo: 'https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png'
    })
}
</script>
