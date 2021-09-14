<template>
  <Guess :location="location" @selectCity="selectCity($event)"></Guess>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";
import Guess from "../components/Guess.vue";
import { GuessDto } from "@/model/guess.model";
import { GuessResponseDto } from "@/model/guessresponse.model";

export default defineComponent({
  name: "Game",

  components: {
    Guess,
  },

  setup() {
    const location = ref({} as GuessDto);

    const getNewLocation = async () => {
      location.value = (await axios.get("http://localhost:8080/guess")).data as GuessDto;
    };

    return {
      getNewLocation,
      location,
    };
  },

  methods: {
    async selectCity(id: string) {
      const { data } = await axios.post("http://localhost:8080/guess", {
        guessId: this.location.id,
        cityId: id,
      });

      console.log("Result is ", this.isResultCorrect(data));
      this.getNewLocation();
    },

    isResultCorrect(guessResponse: GuessResponseDto) {
      return guessResponse.answerCityId === guessResponse.correctCityId;
    },
  },

  mounted() {
    this.getNewLocation();
  },
});
</script>
