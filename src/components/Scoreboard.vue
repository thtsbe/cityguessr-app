<template>
  <div v-if="userScores" class="scoreboard-container">
    <table class="table center scoretable">
      <thead>
      <tr>
        <th class="rank"></th>
        <th class="name">Username</th>
        <th class="score">Total Guesses</th>
        <th class="points">Points</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(scores, index) in userScores" :key="index" class="row">
        <td class="rank">{{ index + 1 }}.</td>
        <td class="name">{{ scores.username }}</td>
        <td class="score">{{ scores.totalGames }}</td>
        <td class="points">{{ scores.points }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { http } from "@/service/http-api";
import { Scores } from "@/model/scores.model";

export default defineComponent({
  name: "Scoreboard",
  props: {},
  data() {
    return {};
  },

  setup() {
    const userScores = ref({} as Scores[]);
    const isLoading = ref(true);
    const error = ref(null);

    const getScores = async () => {
      userScores.value = ((await http.get("/scores")).data as Scores[]).sort(
          (a, b) => b.points - a.points
      );
    };

    return {
      getScores,
      userScores,
      isLoading,
      error,
    };
  },

  mounted() {
    this.getScores();
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.scoreboard-container {
  display: inline-flex;
  justify-content: center;
}

thead {
  background-color: grey;
  color: white;
}

.scoretable {
  font-size: 1.5rem;
}

.row {
  color: white;
}

.rank {
  width: 100px;
}

.score {
  width: 150px;
}

.points {
  width: 120px;
}

.name {
  width: 200px;
}
</style>
