<template>
  <Guess :location="location" @selectCity="selectCity($event)"></Guess>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";
import Guess from "../components/Guess.vue";

export default defineComponent({
  name: "Game",

  components: {
    Guess,
  },

  setup() {
    const location = ref({});

    const getNewLocation = async () => {
      location.value = (await axios.get("http://localhost:8080/guess")).data;
    };

    return {
      getNewLocation,
      location,
    };
  },

  methods: {
    selectCity(id: string) {
      console.log(id);
      this.getNewLocation();
    }
  },

  mounted() {
    this.getNewLocation();
  },
});
</script>
