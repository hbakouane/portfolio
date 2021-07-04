<template>
    <!-- Specialities -->
    <div>
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
    </div>
    <!-- Specialities -->
</template>

<script>
export default {
    name: "Specialities"
}
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
</style>