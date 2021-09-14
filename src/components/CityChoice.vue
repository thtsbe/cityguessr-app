<template>
  <button @click="click">{{ option }}</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CityChoice",

  emits: ["selectCity"],

  props: {
    option: { type: String, required: true },
  },

  methods: {
    click() {
      this.$emit("selectCity");
    },
  },
});
</script>

<style scoped lang="scss">
button {
  background: red;
}
</style>
