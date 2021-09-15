<template>
  <div class="home"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  mounted() {
    if (localStorage.getItem("userId")) {
      this.$router.push("/game");
    } else {
      this.$router.push("/register");
    }
  },
});
</script>
