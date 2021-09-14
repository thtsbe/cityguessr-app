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
      v-for="option in location.options"
      :key="option.id"
      :option="option.city"
      @selectCity="selectCity(option.id)"
    ></CityChoice>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { GoogleMap } from "vue3-google-map";
import CityChoice from "@/components/CityChoice.vue";
import { GuessDto } from "@/model/guess.model";

export default defineComponent({
  components: { GoogleMap, CityChoice },
  name: "Guess",

  emits: ["selectCity"],

  props: {
    location: {
      type: Object as PropType<GuessDto>,
      required: true,
    },
  },

  computed: {
    center() {
      const { lat = "0", lng = "0" } = this.location;
      return {
        lat: parseFloat(lat),
        lng: parseFloat(lng),
      };
    },
  },

  methods: {
    selectCity(id: string) {
      this.$emit("selectCity", id);
    },
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
