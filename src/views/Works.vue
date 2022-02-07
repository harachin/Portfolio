<template>
  <div>
    <div class="g-view-title">
      Works
    </div>
    <Heading title="Games" />
    <div class="cards">
      <Card
        v-for="work in games"
        :key="work.name"
        class="card"
        :preview="work.icon"
        :name="work.name"
        :desc="work.desc"
        @click="onTapCard(work.url)" />
    </div>
    <Heading title="Web services" />
    <div class="cards">
      <Card
        v-for="work in webServices"
        :key="work.name"
        class="card"
        :preview="work.icon"
        :name="work.name"
        :desc="work.desc"
        @click="onTapCard(work.url)" />
    </div>
  </div>
</template>

<script lang="ts">
import Card from "@/components/common/Card.vue";
import Heading from "@/components/common/Heading.vue";
import WorkModal from "@/components/modal/WorkModal.vue";
import { WorkCategory } from "@/scripts/constant";
import { Options, Vue } from "vue-class-component";

interface WorkInformation {
  category: WorkCategory;
  name: string;
  desc: string;
  icon: string;
  url: string;
}
@Options({
  components: {
    Heading,
    Card,
    WorkModal
  }
})
export default class Works extends Vue {
  workInformations: Array<WorkInformation> = [
    {
      category: WorkCategory.GAME,
      name: "DROID I",
      desc: "学生時代、文化祭にて一般公開用に開発した対戦型2Dシューティングゲームです。",
      icon: require("@/assets/work_screenshot_droid_i_1.png"),
      url: "https://github.com/harachin/DROID_I"
    },
    {
      category: WorkCategory.GAME,
      name: "DROID II",
      desc: "卒業制作にて開発した縦型スクロールシューティングゲームです。敵を撃破する毎に経験値を獲得することができシールドやボムなどの追加装備を獲得できる。",
      icon: require("@/assets/work_screenshot_droid_ii_1.png"),
      url: "https://github.com/harachin/DROID_II"
    },
    {
      category: WorkCategory.WEB_SERVICE,
      name: "Harachin.lab",
      desc: "エンジニアHarachinのポートフォリオサイトです。",
      icon: require("@/assets/work_screenshot_harachinlab_1.png"),
      url: "https://github.com/harachin/Portfolio"
    }
  ];
  onTapCard(url: string): void {
    window.open(url, "_blank");
    return;
  }

  get games(): Array<WorkInformation> {
    return this.categoryOf(WorkCategory.GAME);
  }
  get webServices(): Array<WorkInformation> {
    return this.categoryOf(WorkCategory.WEB_SERVICE);
  }

  public categoryOf(category: WorkCategory): Array<WorkInformation> {
    return this.workInformations.filter((work) => {
      return work.category === category;
    });
  }
}
</script>

<style lang="scss" scoped>
@use "@/scss/_styles.scss";
@use "@/scss/_mixin.scss" as mixin;

.cards {
  display: flex;
  flex-wrap: wrap;
  @include mixin.sp {
    flex-direction: column;
    align-items: center;
  }
  gap: 20px;
}
</style>
