<template>
  <Scoreboard />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Scoreboard from "@/components/Scoreboard.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Scores",
  components: {
    Scoreboard,
  },
});
</script>
