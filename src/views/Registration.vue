<template>
  <div class="registration">
    <h3>Please enter your name below to start:</h3>
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
