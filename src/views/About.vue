<template>
  <div>
    <div class="g-view-title">
      About me
    </div>
    <Heading title="Profile" />
    <div class="profile">
      <img
        class="icon"
        draggable="false"
        src="@/assets/harachinlab_profile_icon.png"
        oncontextmenu="return false;" />
      <table class="properties">
        <tr class="property">
          <td class="key">
            ニックネーム:
          </td>
          <td class="value">
            harachin
          </td>
        </tr>
        <tr class="property">
          <td class="key">
            性別:
          </td>
          <td class="value">
            男性
          </td>
        </tr>
        <tr class="property">
          <td class="key">
            誕生日:
          </td>
          <td class="value">
            {{ birthday }}
          </td>
        </tr>
        <tr class="property">
          <td class="key">
            年齢
          </td>
          <td class="value">
            {{ age }}歳
          </td>
        </tr>
        <tr class="property">
          <td class="key">
            出身
          </td>
          <td class="value">
            岩手県
          </td>
        </tr>
        <tr class="property">
          <td class="key">
            趣味:
          </td>
          <td class="value">
            ・オンラインゲーム<br />
            ・ツーリング<br />
            ・筋トレ<br />
          </td>
        </tr>
      </table>
    </div>

    <Heading title="History" />

    <table class="history">
      <tr>
        <td class="year">
          1994年
        </td>
        <td class="text">
          岩手県で生まれる。
        </td>
      </tr>
      <tr>
        <td class="year">
          2009年
        </td>
        <td class="text">
          学校の職業研究にてプログラミングと出会った事がきっかけでJavaを勉強し始める。
        </td>
      </tr>
      <tr>
        <td class="year">
          2012年
        </td>
        <td class="text">
          高校を卒業後、地元を離れ県内の情報系専門学校へ進学してプログラミングを学ぶ。
        </td>
      </tr>
      <tr>
        <td class="year">
          2014年
        </td>
        <td class="text">
          専門学校を卒業、首都圏の一部上場企業へ就職。大手ベンダー製の基地局装置開発へ配属となり、C言語やLinux系の組み込み開発を担当する。
        </td>
      </tr>
      <tr>
        <td class="year">
          2019年
        </td>
        <td class="text">
          大手モバイルキャリアのWeb内製開発案件へ転属。AWS、SpringBoot、Vuejs等を使ったWebサービス開発を担当する。
        </td>
      </tr>
      <tr>
        <td class="year">
          2020年
        </td>
        <td class="text">
          都内のベンチャー系ゲーム会社へ転職。Unity、Ruby on
          railsを使ったソーシャルゲームの開発及びサーバーセクションリードを担当する。
        </td>
      </tr>
      <tr>
        <td class="year">
          2021年
        </td>
        <td class="text">
          地元へのUターン転職のため一度退職。
        </td>
      </tr>
      <tr>
        <td class="year" />
        <td class="text">
          現在に至る
        </td>
      </tr>
    </table>

    <Heading title="Contact" />
    <div class="contact">
      <a
        href="https://github.com/harachin"
        target="_blank"
        rel="noopener noreferrer">
        <img
          draggable="false"
          src="@/assets/github_icon.png"
          oncontextmenu="return false;" />
        <div>harachin</div>
      </a>
      <a
        href="https://qiita.com/harachin"
        target="_blank"
        rel="noopener noreferrer">
        <img
          draggable="false"
          src="@/assets/qiita_icon.png"
          oncontextmenu="return false;" />
        <div>harachin</div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Heading from "@/components/common/Heading.vue";
import moment from "moment";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    Heading
  }
})
export default class About extends Vue {
  birthday = "1994/01/27";
  get age(): number {
    return moment().diff(new Date(this.birthday), "years");
  }
}
</script>

<style lang="scss" scoped>
@use "@/scss/_styles.scss";
@use "@/scss/_mixin.scss" as mixin;

td {
  text-align: left;
  vertical-align: top;
}
.profile {
  display: flex;
  flex-direction: row;
  .icon {
    @include mixin.sp {
      width: 128px;
      height: 128px;
    }
  }
  .properties {
    @include mixin.pc {
      padding-left: 30px;
    }
    .property {
      .value {
        padding-left: 25px;
      }
    }
  }
}
.history {
  border-spacing: 7px;
  @include mixin.sp {
    .year {
      width: 15%;
    }
  }
}
.contact {
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  gap: 25px;
  a {
    display: inline-flex;
    align-items: center;
    color: inherit;
    text-decoration: none;
    gap: 10px;
    width: 250px;
    height: 32px;
  }
  a:hover {
    font-weight: bold;
  }
}
</style>
