<template>
    <div>

        <hero />

        <about />

        <testimonials />
        
        <portfolio />

        <contact :social="social" />

        <footerr :social="social" />

        <particles-bg style="z-index: 1; opacity: .8; position: fixed;" type="thick" :bg="true" />

        <social-media :social="social" />

    </div>
</template>

<script>
import { ParticlesBg } from "particles-bg-vue";
import About from './../components/About';
import Hero from './../components/Hero';
import Portfolio from './../components/Portfolio';
import Testimonials from './../components/Testimonials';
import Contact from './../components/Contact';
import Footerr from './../components/Footerr';
import SocialMedia from './../components/SocialMedia';

export default {
    name: 'Home',
    components: { ParticlesBg, About, Hero, Testimonials, Portfolio, Contact, Footerr, SocialMedia },
    data: () => ({
        social: {
            email: 'hbakouane@gmail.com',
            facebook: 'https://web.facebook.com/cole.haytam.7/',
            whatsapp: '+212 693385403',
            twitter: 'https://twitter.com/BakouaneH',
            linkedin: 'https://www.linkedin.com/in/haytam-bakouane-a36a54197/',
            upwork: 'https://www.upwork.com/freelancers/~0154e49d95a00ee989',
            github: 'https://github.com/hbakouane'
        }
    })
}
</script>

<style scoped>
  *, p {
    z-index: 20;
    position: relative;
  }
  .radius {
    border-radius: 12px;
  }
  .radius-t {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
</style>