<template>
  <div class="card">
    <div class="preview">
      <img
        :src="preview"
        alt="No preview..."
        draggable="false"
        oncontextmenu="return false;"
      />
    </div>

    <div class="name">
      {{ name }}
    </div>

    <div class="desc">
      {{ desc }}
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    preview: String,
    name: String,
    desc: String,
  },
})
export default class Card extends Vue {
  preview!: string;
  name!: string;
  desc!: string;
}
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  height: 480px;
  width: 360px;
  border: 2px solid $g-font-color-gray;
  border-radius: 5px;
  padding: 10px;
  user-select: none;

  /** ホールド時のアニメーション */
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;

  .preview {
    position: relative;
    border: 2px solid $g-font-color-gray;
    border-radius: 5px;
    height: 60%;
    img {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: auto;
      width: auto;
      max-width: 100%;
      max-height: 100%;
      margin: auto;
    }
  }

  .name {
    margin: 5px;
    height: 10%;
    font-size: $g-font-size-middle;
    font-weight: bold;
  }

  .desc {
    height: 30%;
    margin: 5px;
    font-size: $g-font-size-small;
  }
}
.card:hover {
  /** ホールド時のアニメーション */
  -webkit-transform: translateY(-5px);
  -ms-transform: translateY(-5px);
  transform: translateY(-5px);
}
</style>
