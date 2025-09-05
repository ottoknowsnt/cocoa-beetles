<template>
  <p>List</p>
  <p v-for="challengePosition in challengesPositions">
    {{ challengePosition }}
  </p>
  <div v-if="position">
    <p>Position</p>
    <p>
      [{{ position.coords.longitude }}, {{ position.coords.latitude }}] (+/-{{
        position.coords.accuracy
      }}m)
    </p>
  </div>
  <div ref="mapContainer" class="map-container"></div>
</template>

<script lang="ts">
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { defineComponent } from 'vue'

mapboxgl.accessToken =
  'pk.eyJ1Ijoib3R0b2RvZXNudGtub3ciLCJhIjoiY21ibTlrZnJyMHpsNTJrcXZkN3M2aXNzayJ9.IEpe-Wpq-rnMMK2-jWSrjA'

export default defineComponent({
  data() {
    return {
      map: null as mapboxgl.Map | null,
      geolocationId: null as number | null,
      position: null as GeolocationPosition | null,
      challengesPositions: [
        [-3.6675301, 40.1960395],
        [-3.6949157, 40.4466171],
        [-3.6778232, 40.4378105],
      ] as mapboxgl.LngLatLike[],
    }
  },
  methods: {
    initMap() {
      this.map = new mapboxgl.Map({
        container: this.$refs.mapContainer as HTMLElement,
        style: 'mapbox://styles/mapbox/light-v11',
        center: this.challengesPositions[0],
        zoom: 15,
      })

      this.challengesPositions.forEach((challengePosition) => {
        new mapboxgl.Marker().setLngLat(challengePosition).addTo(this.map)
      })
    },
    initGeolocation() {
      this.geolocationId = navigator.geolocation.watchPosition(
        (position) => {
          this.position = position
        },
        (error) => {
          console.log(error)
        },
        {
          enableHighAccuracy: true,
        },
      )
    },
  },
  mounted() {
    this.initMap()
    this.initGeolocation()
  },

  unmounted() {
    if (this.map) {
      this.map.remove()
      this.map = null
    }
    if (this.geolocationId) {
      navigator.geolocation.clearWatch(this.geolocationId)
    }
  },
})
</script>

<style scoped>
.map-container {
  width: 20rem;
  height: 20rem;
}
</style>
