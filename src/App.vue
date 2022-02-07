<template>
  <Header />
  <Navimenu />
  <div class="view">
    <router-view />
  </div>
  <Footer />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "@/components/global/Header.vue";
import Navimenu from "@/components/global/Navimenu.vue";
import Footer from "@/components/global/Footer.vue";

@Options({
  components: {
    Footer,
    Navimenu,
    Header,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: $g-font-style-default;
  color: $g-font-color-gray;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .view {
    padding: 10px 10px 20px 10px;
  }
}
</style>
