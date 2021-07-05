<template>
    <!-- Hero -->
    <div class="hero my-auto">
        <div class="container">
                <div class="row justify-center">
                <div class="col-md-10 text-center">
                    <p class="typer hero-text text-center">
                        I Develop
                        <vue-typer :text="['Quality', 'Responsive', 'Clean-coded']" style="z-index: 5;"></vue-typer> Products.
                    </p>
                    <v-btn href="#about" color="white darken-4 mx-3" outlined class="white--text rounded-0" elevation="0" append x-large style="z-index: 10; position: relative;">About Me</v-btn>
                    <v-btn href="#contact" color="blue-grey darken-4 mx-3" class="white--text rounded-0" elevation="0" append x-large style="z-index: 10; position: relative;">Let's Talk About Your Project</v-btn>
                </div>
            </div>
        </div>
    </div>
    <!-- Hero -->
</template>

<script>
import { VueTyper } from 'vue-typer';

export default {
    name: "Hero",
    components: { VueTyper }
}
</script>

<style>
    .hero {
        height: 100vh !important;
    }
    .hero .container .row {
        margin-top: 28vh;
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