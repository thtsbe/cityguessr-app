<template>
  <div class="background"></div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  background-color: black;
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
