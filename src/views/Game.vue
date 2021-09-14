<template>
  <Guess :location="location" @selectCity="selectCity($event)"></Guess>
  <transition name="fade">
    <div class="result">
      <div class="correct" v-if="correct"></div>
      <div class="incorrect" v-if="!correct"></div>
    </div>
  </transition>
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
    const correct = ref(true);

    const getNewLocation = async () => {
      location.value = (await http.get("/guess"))
        .data as GuessDto;
    };

    return {
      getNewLocation,
      location,
      correct,
    };
  },

  methods: {
    async selectCity(id: string) {
      const { data } = await http.post("/guess", {
        guessId: this.location.id,
        cityId: id,
      });

      if (this.isResultCorrect(data)) {
        this.getNewLocation();
        this.correct = true;
      } else {
        this.correct = false;
      }
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

<style scoped lang="scss">
.result {
  position: absolute;
  height: 7px;
  bottom: 0;
  left: 0;
  right: 0;

  & .correct,
  & .incorrect {
    width: 100%;
    height: 100%;
  }

  & .correct {
    background-color: green;
  }

  & .incorrect {
    background-color: red;
  }
}
</style>
