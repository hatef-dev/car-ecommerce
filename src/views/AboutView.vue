<template>
  <div class="flex flex-col">
    <Header />

    <AboutHero />
    <AboutStory />
    <WhyChooseUs />
    <AboutStats />
    <AboutValues />
    <TeamSection />
    <TimelineSection />
    <AboutCTA />

    <Footer />
    <test />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import AboutHero from "@/components/about/AboutHero.vue";
import AboutStory from "@/components/about/AboutStory.vue";
import WhyChooseUs from "@/components/about/WhyChooseUs.vue";
import AboutStats from "@/components/about/AboutStats.vue";
import AboutValues from "@/components/about/AboutValues.vue";
import TeamSection from "@/components/about/TeamSection.vue";
import TimelineSection from "@/components/about/TimelineSection.vue";
import AboutCTA from "@/components/about/AboutCTA.vue";

export default {
  name: "AboutView",
  components: {
    Header,
    Footer,
    AboutHero,
    AboutStory,
    WhyChooseUs,
    AboutStats,
    AboutValues,
    TeamSection,
    TimelineSection,
    AboutCTA,
  },
};
</script>
