<template>
  <div class="signup">
    <input v-model="username" placeholder="Enter user name here" />
    <button v-on:click="registerUser(username)">Register</button>
    <div v-if="isEmptyUser" class="emptyUsername">
      Please enter a username to start the game.
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserRegistration",
  props: {},
  data() {
    return { username: "", isEmptyUser: false };
  },
  methods: {
    registerUser: async function (username: string) {
      if (username) {
        await axios
          .post("http://localhost:8080/checkin", { username: username })
          .then((userId) => {
            console.log(userId.data);
            localStorage.setItem("userId", userId.data);
            this.$router.push("game");
          })
          .catch((error) => {
            console.error("There was an error!", error);
          });
      } else {
        this.isEmptyUser = true;
      }
    },
  },
});
</script>

<style scoped lang="scss">
.emptyUsername {
  color: red;
  font-size: 12px;
  margin-top: 10px;
}
</style>
