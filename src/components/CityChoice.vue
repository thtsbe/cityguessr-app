<template>
  <div>
    <button @click="click" :disabled="disabled">{{ option }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CityChoice",

  emits: ["selectCity"],

  props: {
    option: { type: String, required: true },
  },

  data() {
    return {
      disabled: false,
    };
  },

  methods: {
    click() {
      this.$emit("selectCity");
      this.disabled = true;
    },
  },

  watch: {
    option() {
      this.disabled = false;
    },
  },
});
</script>

<style scoped lang="scss">
button {
  border-radius: 8px;
  background: white;
  font-size: 1.4em;
  width: 100%;
  height: 100%;

  &:hover:not(:disabled) {
    background-color: AliceBlue;
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
  }
}

div {
  padding: 10px 10px;
}
</style>
