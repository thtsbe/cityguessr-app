<template>
  <Guess :location="location" @selectCity="selectCity($event)"></Guess>
  <ResultBar :correct="correct" />
  <div class="username">
    {{ username }}
  </div>
  <div class="timer">
    {{ remainingTime }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import Guess from "../components/Guess.vue";
import ResultBar from "../components/ResultBar.vue";
import { GuessDto } from "@/model/guess.model";
import { GuessResponseDto } from "@/model/guessresponse.model";
import { http } from "@/service/http-api";
import { withTimer } from "@/composite/timer";

export default defineComponent({
  name: "Game",

  components: {
    Guess,
    ResultBar,
  },

  beforeRouteEnter(to, from, next) {
    if (!localStorage.getItem("userId")) {
      next("/register");
    } else {
      next();
    }
  },

  setup() {
    const location = ref({} as GuessDto);
    const correct = ref(true);
    const round = ref(0);
    const maxRounds = ref(2);
    const router = useRouter();
    const userId = ref(localStorage.getItem("userId"))
    const username = ref(localStorage.getItem("username"))

    const getNewLocation = async () => {
      location.value = (await http.get("/guess/" + userId.value)
      ).data as GuessDto;
      round.value = round.value + 1;

      if (round.value > maxRounds.value) {
        router.push({ name: "Scores" });
      }
    };

    const { remainingTime, startTimer, reduceAvailableTimeInHalf } = withTimer(
      60,
      getNewLocation
    );

    return {
      remainingTime,
      startTimer,
      getNewLocation,
      reduceAvailableTimeInHalf,
      location,
      correct,
      round,
      maxRounds,
      username,
    };
  },

  methods: {
    async selectCity(id: string) {
      const { data } = await http.post("/guess", {
        guessId: this.location.id,
        cityId: id,
        userId: localStorage.getItem("userId"),
        score: this.remainingTime,
      });

      if (this.isResultCorrect(data)) {
        this.getNewLocation();
        this.startTimer();
        this.correct = true;
      } else {
        this.reduceAvailableTimeInHalf();
        this.correct = false;
      }
    },

    redirectToScores() {
      this.$router.push({ name: "Scores" });
    },

    isResultCorrect(guessResponse: GuessResponseDto) {
      return guessResponse.answerCityId === guessResponse.correctCityId;
    },
  },

  mounted() {
    this.startTimer();
    this.getNewLocation();
  },
});
</script>

<style scoped lang="scss">
.timer {
  position: absolute;
  right: 5px;
  top: 5px;
  font-size: 3em;
  color: white;
}

.username {
  position: absolute;
  left: 15px;
  top: 5px;
  font-size: 2em;
  padding: 5px;
  background-color: #2c3e50;
  font-weight: bold;
  color: white;
}
</style>
