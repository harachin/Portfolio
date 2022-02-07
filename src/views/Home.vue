<template>
  <div>
    <div class="text1">
      Harachin.labへようこそ。<br /><br />
      このサイトは、製作者「Harachin」のエンジニアポートフォリオです。<br /><br />
      不定期の更新にはなりますが、訪問頂いたエンジニアの皆様、あるいは企業様へ向けて<br />
      私個人で開発したサービスの公開や習得したスキルのアピールを目的として製作しました。<br /><br />
      皆様にとって魅力的に見えるコンテンツを１つでも多くアウトプットできれば幸いです。<br /><br />
    </div>
    <div class="text2">
      それではごゆっくりとお過ごしください...
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
@use "@/scss/_variables.scss" as variables;
@use "@/scss/_mixin.scss" as mixin;

div {
  font-size: variables.$g-font-size-middle;
  @include mixin.sp {
    font-size: variables.$g-font-size-small;
  }
  padding: 3% 3%;
}
.text2 {
  text-align: right;
}
</style>
