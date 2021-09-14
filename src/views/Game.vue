<template>
  <Guess></Guess>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Guess from "../components/Guess.vue";

export default defineComponent({
  name: "Game",

  components: {
    Guess,
  },
});
</script>
