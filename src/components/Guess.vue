<template>
  <GoogleMap
    id="map"
    :api-key="apiKey"
    :center="center"
    :zoom="11"
    :disableDefaultUi="true"
    :mapTypeId="mapTypeId"
  >
  </GoogleMap>
  <div class="selection">
    <div
      class="city-choice"
      v-for="option in location.options"
      :key="option.id"
    >
      <CityChoice
        :option="option.city"
        @selectCity="selectCity(option.id)"
      ></CityChoice>
    </div>
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
      apiKey: process.env.VUE_APP_GOOGLE_API_KEY,
    };
  },
});
</script>

<style scoped lang="scss">
#map {
  width: 100vw;
  height: calc(100vh - 7px);
}

.selection {
  bottom: 15px;
  max-height: 100px;
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  bottom: 15px;

  .city-choice {
    width: 50vw;
    height: 50px;
  }
}
</style>
