<template>
  <div class="progress-bar-frame">
    <div
      v-if="isDisplay"
      class="progress-bar-fill"
      :style="styles">
      {{ percentage }}%
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    percentage: Number
  }
})
export default class ProgressBar extends Vue {
  percentage!: number;

  get isDisplay(): boolean {
    return this.percentage !== 0;
  }

  get styles(): {
    [key: string]: string;
  } {
    return {
      "--percentage": this.percentage + "%"
    };
  }
}
</script>

<style lang="scss" scoped>
@use "@/scss/_variables.scss" as variables;

.progress-bar-frame {
  background-color: variables.$g-color-light-gray;
  border-radius: 9999px;
}

.progress-bar-fill {
  width: var(--percentage);
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: variables.$g-color-gray;
  color: variables.$g-color-white;
  border-radius: 9999px;
}
</style>
