<template>
  <Header />
  <NaviMenu />
  <div class="view">
    <transition appear>
      <router-view />
    </transition>
  </div>
  <Footer />
</template>

<script lang="ts">
import Footer from "@/components/global/Footer.vue";
import Header from "@/components/global/Header.vue";
import NaviMenu from "@/components/global/NaviMenu.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    Footer,
    NaviMenu,
    Header
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@use "@/scss/_variables.scss" as variables;

#app {
  font-family: variables.$g-font-style-default;
  color: variables.$g-font-color-gray;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .view {
    padding: 10px 10px 20px 10px;

    .v-enter-active, .v-leave-active {
      transition: opacity 1.3s ease;
    }

    .v-enter-from, .v-leave-to {
      opacity: 0;
    }
  }
}
</style>
