<template>
  <div>
      <div class="landing-pages">
        <LandingFirstPage/>
        <LandingSecondPage/>
      </div>
  </div>
</template>

<script>
import LandingFirstPage from "../components/LandingFirstPage.vue";
import LandingSecondPage from "../components/LandingSecondPage.vue";

export default {
  name: "Main",
  components: {
    LandingFirstPage,
    LandingSecondPage
  }
};
</script>

<style scoped>
.landing-pages {
    display: flex;
    flex-direction: column;
}
</style>
