<template>
  <button>{{ option }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CityChoice",

  props: {
    option: { type: String, required: true },
  },
});
</script>

<style scoped lang="scss">
button {
  background: red;
}
</style>
