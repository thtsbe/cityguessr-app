<template>
  <div class="signup">
    <input v-model="username" placeholder="Enter user name here" />
    <button @click="registerUser(username)">Register</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UserRegistration",
  props: {
    // username: {
    //   type: String,
    //   default: "",
    // },
  },
  data() {
    return {
      username: "",
    };
  },
  methods: {
    registerUser(username: string) {
      console.log("clicked regsiter", username);
      return fetch("https://localhost:8080/checkin", {
        //TODO: Add correct API request
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ username: username }),
      }).then((res) => {
        console.log("res", res);
      });
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
