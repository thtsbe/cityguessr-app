<template>
  <div v-if="!isLoading && users" class="scoreboard-container">
    <table class="table center">
      <thead>
        <tr>
          <th class="rank">Rank</th>
          <th class="name">Username</th>
          <th class="score">Score</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="user.id">
          <td class="rank">{{ index + 1 }}.</td>
          <td class="name">{{ user.name }}</td>
          <td class="score">{{ user.score }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "Scoreboard",
  props: {},
  data() {
    return {
      users: [
        { name: "Frank", score: 25 },
        { name: "Lucy", score: 21 },
        { name: "Jerry", score: 20 },
        { name: "Pedro", score: 19 },
      ],
    };
  },
  setup() {
    const userScores = ref(null);
    const isLoading = ref(true);
    const error = ref(null);

    function fetchScores() {
      isLoading.value = true;
      return fetch("<API-REQUEST-URL>", {
        //TODO: Add correct API request
        method: "get",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => {
          if (!res.ok) {
            const error = new Error(res.statusText);
            throw error;
          }
          return res.json();
        })
        .then((json) => {
          userScores.value = json.data;
        })
        .catch((err) => {
          error.value = err;
        })
        .then(() => {
          isLoading.value = false;
        });
    }

    onMounted(() => {
      fetchScores();
    });

    return {
      userScores,
      isLoading,
      error,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.scoreboard-container {
  display: inline-flex;
}

thead {
  background-color: grey;
  color: white;
}

tr:nth-child(even) {
  background-color: lightgrey;
}

.rank {
  width: 100px;
}

.score {
  width: 100px;
}

.name {
  width: 200px;
}
</style>
