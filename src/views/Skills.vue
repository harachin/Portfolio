<template>
  <div class="Skills">
    <div class="g-view-title">My skills</div>
    <Heading title="Language" />
    <div class="skills">
      <div class="skill" v-for="skill in languages" :key="skill.name">
        <img class="skill-icon" :src="skill.icon" />
        <p class="skill-name">{{ skill.name }}</p>
        <ProgressBar class="skill-bar" :percentage="skill.percentage" />
      </div>
    </div>
    <Heading title="Web frontend" />
    <div class="skills">
      <div class="skill" v-for="skill in webFrontends" :key="skill.name">
        <img class="skill-icon" :src="skill.icon" />
        <p class="skill-name">{{ skill.name }}</p>
        <ProgressBar class="skill-bar" :percentage="skill.percentage" />
      </div>
    </div>
    <Heading title="Web backend" />
    <div class="skills">
      <div class="skill" v-for="skill in webBackends" :key="skill.name">
        <img class="skill-icon" :src="skill.icon" />
        <p class="skill-name">{{ skill.name }}</p>
        <ProgressBar class="skill-bar" :percentage="skill.percentage" />
      </div>
    </div>
    <Heading title="Game" />
    <div class="skills">
      <div class="skill" v-for="skill in games" :key="skill.name">
        <img class="skill-icon" :src="skill.icon" />
        <p class="skill-name">{{ skill.name }}</p>
        <ProgressBar class="skill-bar" :percentage="skill.percentage" />
      </div>
    </div>
    <Heading title="Cloud" />
    <div class="skills">
      <div class="skill" v-for="skill in clouds" :key="skill.name">
        <img class="skill-icon" :src="skill.icon" />
        <p class="skill-name">{{ skill.name }}</p>
        <ProgressBar class="skill-bar" :percentage="skill.percentage" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Heading from "@/components/common/Heading.vue";
import ProgressBar from "@/components/common/ProgressBar.vue";

enum SkillCategory {
  LANGUAGE,
  WEB_FRONTEND,
  WEB_BACKEND,
  GAME,
  CLOUD,
}
interface SkillInformation {
  category: SkillCategory;
  name: string;
  percentage: number;
  icon: string;
}

@Options({
  components: {
    Heading,
    ProgressBar,
  },
})
export default class Skills extends Vue {
  // TestData
  skillInformations: Array<SkillInformation> = [
    {
      category: SkillCategory.LANGUAGE,
      name: "C",
      percentage: 50,
      icon: require("@/assets/skills_icon_c.svg"),
    },
    {
      category: SkillCategory.LANGUAGE,
      name: "C++",
      percentage: 30,
      icon: require("@/assets/skills_icon_cpp.svg"),
    },
    {
      category: SkillCategory.LANGUAGE,
      name: "C#",
      percentage: 60,
      icon: require("@/assets/skills_icon_cs.svg"),
    },
    {
      category: SkillCategory.LANGUAGE,
      name: "Java",
      percentage: 80,
      icon: require("@/assets/skills_icon_java.svg"),
    },
    {
      category: SkillCategory.LANGUAGE,
      name: "Ruby",
      percentage: 60,
      icon: require("@/assets/skills_icon_ruby.svg"),
    },
    {
      category: SkillCategory.WEB_FRONTEND,
      name: "Vuejs",
      percentage: 80,
      icon: require("@/assets/skills_icon_vuejs.svg"),
    },
    {
      category: SkillCategory.WEB_BACKEND,
      name: "Ruby on rails",
      percentage: 60,
      icon: require("@/assets/skills_icon_rubyonrails.svg"),
    },
    {
      category: SkillCategory.WEB_BACKEND,
      name: "SpringBoot",
      percentage: 60,
      icon: require("@/assets/skills_icon_spring.svg"),
    },
    {
      category: SkillCategory.GAME,
      name: "Unity",
      percentage: 60,
      icon: require("@/assets/skills_icon_unity.svg"),
    },
    {
      category: SkillCategory.CLOUD,
      name: "AWS",
      percentage: 80,
      icon: require("@/assets/skills_icon_aws.svg"),
    },
  ];

  get languages(): Array<SkillInformation> {
    return this.categoryOf(SkillCategory.LANGUAGE);
  }

  get webFrontends(): Array<SkillInformation> {
    return this.categoryOf(SkillCategory.WEB_FRONTEND);
  }

  get webBackends(): Array<SkillInformation> {
    return this.categoryOf(SkillCategory.WEB_BACKEND);
  }

  get games(): Array<SkillInformation> {
    return this.categoryOf(SkillCategory.GAME);
  }

  get clouds(): Array<SkillInformation> {
    return this.categoryOf(SkillCategory.CLOUD);
  }

  public categoryOf(category: SkillCategory): Array<SkillInformation> {
    return this.skillInformations.filter((skill) => {
      return skill.category === category;
    });
  }
}
</script>

<style lang="scss" scoped>
.skills {
  display: flex;
  flex-direction: column;
  gap: 10px;
  .skill {
    display: flex;
    align-items: center;
    gap: 15px;
    .skill-icon {
      width: 48px;
    }
    .skill-name {
      width: 128px;
    }
    .skill-bar {
      width: 100%;
    }
  }
}
</style>
