<template>
  <Guess
    :location="location"
    :zoomLevel="zoomLevel"
    @selectCity="selectCity($event)"
  ></Guess>
  <ResultBar :correct="correct" :answered="answered" />
  <div class="username">
    {{ username }}
  </div>
  <div class="timer">
    {{ remainingTime }} | <b>{{ round }}</b>
  </div>
  <div class="timerDesc">possible points | <b> round</b></div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import Guess from "../components/Guess.vue";
import ResultBar from "../components/ResultBar.vue";
import { GuessDto } from "@/model/guess.model";
import { ZoomLevel } from "@/model/zoom.model";
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
    const answered = ref(false);
    const round = ref(0);
    const maxRounds = ref(5);
    const router = useRouter();
    const userId = ref(localStorage.getItem("userId"));
    const username = ref(localStorage.getItem("username"));
    const zoomLevel = ref({ min: 9, max: 13, level: 11 } as ZoomLevel);

    const getNewLocation = async () => {
      answered.value = false;
      setZoomLevel();

      location.value = (await http.get("/guess/" + userId.value))
        .data as GuessDto;
    };

    const updateRounds = () => {
      round.value = round.value + 1;

      if (round.value > maxRounds.value) {
        router.push({ name: "Scores" });
      }
    };

    const updateZoom = (minZoom: number, maxZoom: number, newZoom?: number) => {
      const zoom = newZoom
        ? newZoom
        : Math.floor(Math.random() * (maxZoom - minZoom) + minZoom);
      zoomLevel.value.level = zoom;
      zoomLevel.value.min = zoom - 2 > 0 ? zoom - 2 : 1;
      zoomLevel.value.max = 19;
    };

    const setZoomLevel = () => {
      const zoomProb = Math.random();
      let minZoom;
      let maxZoom;
      if (zoomProb < 0.1) {
        minZoom = 6;
        maxZoom = 10;
      } else if (zoomProb < 0.55) {
        minZoom = 11;
        maxZoom = 19;
      } else {
        minZoom = 2;
        maxZoom = 5;
      }
      updateZoom(minZoom, maxZoom);
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
      answered,
      round,
      maxRounds,
      username,
      zoomLevel,
      updateZoom,
      updateRounds,
    };
  },

  methods: {
    async zoomAway() {
      let i = 0;
      if (this.zoomLevel.level > 9) {
        for (
          let newZoom = this.zoomLevel.level;
          newZoom > 1;
          newZoom = newZoom - 2
        ) {
          setTimeout(() => {
            this.updateZoom(1, 19, newZoom);
          }, i * 500);
          i++;
        }
        return new Promise((res) => setTimeout(res, i * 400 + 2000));
      } else {
        return Promise.resolve();
      }
    },

    async selectCity(id: string) {
      this.answered = true;
      const { data } = await http.post("/guess", {
        guessId: this.location.id,
        cityId: id,
        userId: localStorage.getItem("userId"),
        score: this.remainingTime,
      });

      if (this.isResultCorrect(data)) {
        this.correct = true;

        this.zoomAway().then(() => {
          this.updateRounds();
          this.getNewLocation();
          this.startTimer();
        });
      } else {
        this.reduceAvailableTimeInHalf();
        this.correct = false;
      }
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
.timerDesc {
  position: absolute;
  right: 15px;
  top: 60px;
  font-size: 0.95em;
  color: white;
}

.timer {
  position: absolute;
  right: 15px;
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
