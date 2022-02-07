<template>
  <div id="heading">
    {{ title }}
    <hr />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    title: String
  }
})
export default class Heading extends Vue {
  title!: string;
}
</script>

<style lang="scss" scoped>
@use "@/scss/_variables.scss" as variables;

#heading {
  font-size: variables.$g-font-size-middle;
  padding: 20px 0px;
  hr {
    margin: 0;
  }
}
</style>
