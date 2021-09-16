<template>
  <div class="container">
    <div class="buttons">
      <button @click="playAgain">Play Again</button>
      <button @click="newGame">New Game</button>
    </div>
    <Scoreboard></Scoreboard>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Scoreboard from "@/components/Scoreboard.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Scores",
  components: {
    Scoreboard,
  },

  methods: {
    playAgain() {
      this.$router.push("game")
    },
    newGame() {
      localStorage.removeItem("userId")
      localStorage.removeItem("username")
      this.$router.push("register")
    }
  },
});
</script>

<style scoped lang="scss">

.container {
  display: flex;
  flex-direction: column;
  align-self: center;
}

.buttons {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

button {
  border-radius: 20px;
  border: 1px solid #1357be;
  color: whitesmoke;
  background-color: #3eb2fd;
  background-image: linear-gradient(1deg, #1357be, #149bf3 99%);
  font-size: 1.5rem;
  padding: 5px 25px 5px 25px;
  margin: 10px;
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: #1357be;
    background-image: linear-gradient(1deg, #23395d, #1357be 99%);
    cursor: pointer;
  }
}
</style>
