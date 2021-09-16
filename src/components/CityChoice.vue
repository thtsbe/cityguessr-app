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
    city() {
      this.disabled = false;
    },
  },
});
</script>

<style scoped lang="scss">
button {
  border-radius: 8px;
  background-color: whitesmoke;
  border: 1px solid whitesmoke;
  background-image: linear-gradient(1deg, #d5d5d5, #f5f5f5 99%);
  color: #2b2d2f;
  font-size: 1.5em;
  width: 100%;
  height: 100%;
  padding: 5px 25px 5px 25px;
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: #1357be;
    background-image: linear-gradient(1deg, #bbbbbb, #d5d5d5 99%);
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
