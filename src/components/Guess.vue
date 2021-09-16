<template>
  <GoogleMap
    id="map"
    :api-key="apiKey"
    :center="center"
    :zoom="zoomLevel.level"
    :minZoom="zoomLevel.min"
    :maxZoom="zoomLevel.max"
    :disableDefaultUi="true"
    :mapTypeId="mapTypeId"
  >
    <Marker :options="{ position: center }"></Marker>
  </GoogleMap>
  <div class="selection">
    <div
      class="city-choice"
      v-for="(option, index) in location.options"
      :key="index"
    >
      <CityChoice
        :city="option"
        @selectCity="selectCity(option.id)"
      ></CityChoice>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
import CityChoice from "@/components/CityChoice.vue";
import { GuessDto } from "@/model/guess.model";
import { ZoomLevel } from "@/model/zoom.model";

export default defineComponent({
  components: { GoogleMap, Marker, CityChoice },
  name: "Guess",

  emits: ["selectCity"],

  props: {
    location: {
      type: Object as PropType<GuessDto>,
      required: true,
    },
    zoomLevel: {
      type: Object as PropType<ZoomLevel>,
      requried: true,
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
      apiKey: "AIzaSyAlsWbbEXmMc7Vpvcg7ZCp9qkomDIQqK1o",
    };
  },
});
</script>

<style scoped lang="scss">
#map {
  width: 100vw;
  height: calc(100vh - 7px);
}

@media screen and (max-width: 600px) {
  .selection {
    display: inline-table;
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    bottom: 25px;
    left: 0%;
    right: 0%;

    .city-choice {
      max-width: 50vw;
      display: inline;
    }
  }
}

@media screen and (min-width: 601px) {
  .selection {
    max-height: 100px;
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    bottom: 25px;

    .city-choice {
      width: 50vw;
      height: 50px;
    }
  }
}
</style>
