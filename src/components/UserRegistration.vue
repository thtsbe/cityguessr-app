<template>
  <div class="signup">
    <input v-model="username" placeholder="Enter username here" />
    <button v-on:click="registerUser(username)">Let's Go!</button>
  </div>
</template>

<script lang="ts">
import { http } from "@/service/http-api";
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserRegistration",
  props: {},
  data() {
    return { username: "" };
  },
  methods: {
    registerUser: async function (username: string) {
      if (username) {
        await http
          .post("/checkin", { username: username })
          .then((userId) => {
            localStorage.setItem("userId", userId.data);
            this.$router.push("game");
          })
          .catch((error) => {
            console.error("There was an error!", error);
          });
      }
    },
  },
  mounted() {
    localStorage.removeItem("userId");
  },
});
</script>

<style scoped lang="scss">
input {
  font-size: 1.5em;
  color: #2b2d2f;
  padding: 15px;
  border-radius: 20px;
  border: 1px solid whitesmoke;
}

input:focus {
  outline: none;
}

button {
  border-radius: 20px;
  border: 1px solid #1357be;
  color: whitesmoke;
  background-color: #3eb2fd;
  background-image: linear-gradient(1deg, #1357be, #149bf3 99%);
  font-size: 1.5em;
  padding: 5px 25px 5px 25px;
  margin-left: 40px;
  line-height: 2em;
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: #1357be;
    background-image: linear-gradient(1deg, #23395d, #1357be 99%);
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
  }
}
</style>
