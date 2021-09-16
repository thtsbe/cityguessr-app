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
.gameTitle {
  color: whitesmoke;
  font-family: sans-serif;
  margin: 10vh 10vh 3vh 10vh;
}

@media screen and (min-width: 601px) {
  .gameTitle {
    font-size: 10rem;
    width: 100%;
  }
}

/* If the screen size is 600px wide or less, set the font-size of <div> to 30px */
@media screen and (max-width: 600px) {
  .gameTitle {
    font-size: 10vw;
    width: 50%;
    margin: 10% auto 10% auto;
  }
}

.flag {
  font-size: 7em;
  top: -2vh;
  position: relative;
  margin: 0;
}

@media screen and (min-width: 601px) {
  .background {
    animation: rotation 30s infinite linear;
    background-image: url("../assets/earth.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-color: black;
    position: absolute;
    left: -20%;
    right: -20%;
    height: 100vh;
    background-position: bottom;
    z-index: -1;
  }
}

@media screen and (max-width: 600px) {
  .background {
    animation: rotation 30s infinite linear;
    background-image: url("../assets/earth.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-color: black;
    position: fixed;
    left: -50%;
    right: -50%;
    height: 100vh;
    overflow: hidden;
    background-position: center;
    z-index: -1;
  }
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>
