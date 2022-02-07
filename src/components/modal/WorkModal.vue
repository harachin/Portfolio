<template>
  <div class="background">
    <div class="window">
      <div class="texts">
        <div class="g-view-title">
          タイトル
        </div>
        <Heading title="説明" />
        <div class="desc">
          説明説明説明説明説明説明説明説明説明説明説明
        </div>
        <Heading title="技術" />
        <div class="tech">
          技術技術技術技術技術技術技術技術技術技術技術
        </div>
        <Heading title="リンク" />
        <div class="link">
          link
        </div>
      </div>
      <div class="previews">
        aaa
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Heading from "@/components/common/Heading.vue";
import { Options, Vue } from "vue-class-component";

  @Options({
    props: {
      title: String,
      tech: String,
      link: String
    },
    components: {
      Heading
    }
  })
  export default class WorkModal extends Vue {
    title!: string;
    tech!: string;
    link!: string;
  }
</script>
<style lang="scss" scoped>
@use "@/scss/_variables.scss" as variables;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }

  .window {
    display: inline-flex;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70%;
    height: 90%;
    padding: 32px;
    background-color: variables.$g-color-white;
    border-radius: 4px;
    transform: translate(-50%, -50%);
    .texts {
      display: flex;
      flex-direction: column;
      flex-basis: 40%;
    }
    .previews {
      display: flex;
      flex-direction: column;
      flex-basis: 60%;
    }
  }

  .modal__message {
    font-size: variables.$g-font-size-middle;
  }
</style>
