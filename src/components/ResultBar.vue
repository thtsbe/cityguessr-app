<template>
  <div class="result">
    <div class="unanswered" v-if="!answered"></div>
    <div class="correct" v-if="correct && answered"></div>
    <div class="incorrect" v-if="!correct && answered"></div>
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
    answered: {
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
  & .incorrect,
  & .unanswered {
    width: 100%;
    height: 100%;
  }

  & .correct {
    background-color: green;
  }

  & .incorrect {
    background-color: red;
  }

  & .unanswered {
    background-color: grey;
  }
}
</style>
