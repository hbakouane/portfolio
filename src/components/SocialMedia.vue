<template>
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
</template>

<script>
export default {
    name: "SocialMedia",
    props: ['social']
}
</script>

<style scoped>
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
        height: 65vh;
        width: 1px;
        top: 0;
        left: 50%;
        transition: 1s;
    }
    .social-media:hover:before {
        position: absolute;
        content: "";
        background: white;
        height: 0vh;
        transition: 1s;
        width: 1px;
        bottom: 0;
        left: 50%;
    }
</style>
