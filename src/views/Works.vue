<template>
  <div class="g-view-title">Works</div>
  <Heading title="Games" />
  <div class="cards">
    <Card
      class="card"
      v-for="work in games"
      :key="work.name"
      :preview="work.icon"
      :name="work.name"
      :desc="work.desc"
    />
  </div>
  <Heading title="Web services" />
  <div class="cards">
    <Card
      class="card"
      v-for="work in webServices"
      :key="work.name"
      :preview="work.icon"
      :name="work.name"
      :desc="work.desc"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Heading from "@/components/common/Heading.vue";
import Card from "@/components/common/Card.vue";
import WorkModal from "@/components/modal/WorkModal.vue";

enum WorkCategory {
  GAME,
  WEB_SERVICE,
}
interface WorkInformation {
  category: WorkCategory;
  name: string;
  desc: string;
  icon: string;
}
@Options({
  components: {
    Heading,
    Card,
    WorkModal,
  },
})
export default class Works extends Vue {
  // TestData
  workInformations: Array<WorkInformation> = [
    {
      category: WorkCategory.GAME,
      name: "aaaaaaa",
      desc: "説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明",
      icon: require("@/assets/harachinlab_logo_text_pattern1.png"),
    },
    {
      category: WorkCategory.GAME,
      name: "bbbbbbb",
      desc: "説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明",
      icon: require("@/assets/harachinlab_logo_text_pattern1.png"),
    },
    {
      category: WorkCategory.WEB_SERVICE,
      name: "cccccccc",
      desc: "説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明説明",
      icon: require("@/assets/harachinlab_logo_text_pattern1.png"),
    },
  ];

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
.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
