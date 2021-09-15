<template>
  <div class="background"></div>
  <meta charset="UTF-8" />
  <div class="registration">
    <h1 class="gameTitle">Städtli Quizzli</h1>
    <p class="flag">&#x1F1E8;&#x1F1ED;</p>
    <UserRegistration />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserRegistration from "@/components/UserRegistration.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Sign Up",
  components: {
    UserRegistration,
  },
});
</script>

<style scoped lang="scss">
.registration {
  margin-top: 25vh;
}

.gameTitle {
  font-size: 10em;
  color: whitesmoke;
  font-family: sans-serif;
  margin: 10vh 10vh 3vh 10vh;
}

.flag {
  font-size: 7em;
  top: -2vh;
  position: relative;
  margin: 0;
}

.background {
  animation: rotation 30s infinite linear;
  background-image: url(/img/earth.04512e70.png);
  background-repeat: no-repeat;
  background-size: contain;
  background-color: black;
  position: absolute;
  left: -20%;
  right: -20%;
  height: 100vh;
  background-position: bottom;
  z-index: -1;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
}
</style>
