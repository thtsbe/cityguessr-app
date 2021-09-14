<template>
  <GoogleMap
    id="map"
    api-key="AIzaSyCeykO_a9I6yQyvhYsuLHmTodo7MhJK5h0"
    :center="center"
    :zoom="10"
    :disableDefaultUi="true"
    :mapTypeId="mapTypeId"
  >
  </GoogleMap>
  <div class="selection">
    <CityChoice
      class="city-choice"
      v-for="option in options"
      :key="option"
      :option="option"
    ></CityChoice>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { GoogleMap } from "vue3-google-map";
import axios from "axios";
import CityChoice from "@/components/CityChoice.vue";

export default defineComponent({
  components: { GoogleMap, CityChoice },
  name: "",

  setup() {
    const center = ref({});
    const options = ref([] as string[]);

    const getNewLocation = async () => {
      const newLocation = (await axios.get("http://localhost:8080/guess")).data;
      center.value = {
        lng: parseFloat(newLocation.lng),
        lat: parseFloat(newLocation.lat),
      };
      options.value = [
        newLocation.option1,
        newLocation.option2,
        newLocation.option3,
        newLocation.option4,
      ];
    };

    return {
      getNewLocation,
      center,
      options,
    };
  },

  mounted() {
    this.getNewLocation();
  },

  data() {
    return {
      mapTypeId: "satellite",
    };
  },
});
</script>

<style scoped lang="scss">
#map {
  width: 100vw;
  height: 80vh;
}

.selection {
  float: left;

  .city-choice {
    width: 50vw;
    height: 10vh;
  }
}
</style>
