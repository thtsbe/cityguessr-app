<template>
  <Guess :location="location" @selectCity="selectCity($event)"></Guess>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Guess from "../components/Guess.vue";
import { GuessDto } from "@/model/guess.model";
import { GuessResponseDto } from "@/model/guessresponse.model";
import { http } from '@/service/http-api';

export default defineComponent({
  name: "Game",

  components: {
    Guess,
  },

  setup() {
    const location = ref({} as GuessDto);

    const getNewLocation = async () => {
      location.value = (await http.get("/guess")).data as GuessDto;
    };

    return {
      getNewLocation,
      location,
    };
  },

  methods: {
    async selectCity(id: string) {
      const { data } = await http.post("/guess", {
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
