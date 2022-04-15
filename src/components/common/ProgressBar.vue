<template>
  <div class="progress-bar-frame">
    <div class="progress-bar-fill" :style="styles" v-if="isDisplay">
      {{ percentage }}%
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    percentage: Number,
  },
})
export default class ProgressBar extends Vue {
  percentage!: number;

  get isDisplay(): boolean {
    return this.percentage !== 0;
  }

  get styles(): { [key: string]: string } {
    return {
      "--percentage": this.percentage + "%",
    };
  }
}
</script>

<style lang="scss" scoped>
.progress-bar-frame {
  /* Colors */
  background-color: $g-color-light-gray;

  /* Rounded border */
  border-radius: 9999px;
}

.progress-bar-fill {
  /* Percentage */
  width: var(--percentage);

  /* Center the content */
  align-items: center;
  display: flex;
  justify-content: center;

  /* Colors */
  background-color: $g-color-gray;
  color: $g-color-white;

  /* Rounded border */
  border-radius: 9999px;
}
</style>
