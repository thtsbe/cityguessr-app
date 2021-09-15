<template>
  <div class="result">
    <div class="correct" v-if="correct"></div>
    <div class="incorrect" v-if="!correct"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ResultBar",

  props: {
    correct: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.result {
  position: absolute;
  height: 15px;
  bottom: 0;
  left: 0;
  right: 0;

  & .correct,
  & .incorrect {
    width: 100%;
    height: 100%;
  }

  & .correct {
    background-color: green;
  }

  & .incorrect {
    background-color: red;
  }
}
</style>
