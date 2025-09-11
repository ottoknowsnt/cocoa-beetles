<template>
  <div class="map-container">
    <div class="map-note">
      <p>En cada una de las tres maravillas que he hecho solo para ti</p>
      <p>un ojo de fantasma se oculta y se ve a la vez</p>
    </div>
    <div id="map" class="map"></div>
  </div>
</template>

<script lang="ts">
import { geoChallenges } from '@/data/geoChallenges'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { defineComponent } from 'vue'
import { length } from '@turf/length'

mapboxgl.accessToken =
  'pk.eyJ1Ijoib3R0b2RvZXNudGtub3ciLCJhIjoiY21ibTlrZnJyMHpsNTJrcXZkN3M2aXNzayJ9.IEpe-Wpq-rnMMK2-jWSrjA'

export default defineComponent({
  data() {
    return {
      map: null as any,
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
        container: 'map',
        style: 'mapbox://styles/mapbox/standard',
        config: {
          basemap: {
            theme: 'monochrome',
          },
        },
        center: geoChallenges.features[0].geometry.coordinates as mapboxgl.LngLatLike,
        zoom: 15,
      })

      for (const marker of geoChallenges.features) {
        const el = document.createElement('div')
        el.className = 'marker'
        el.style.backgroundImage = `url(${marker.properties.challengeIcon})`
        el.style.width = '2rem'
        el.style.height = '2rem'
        el.style.backgroundSize = '100%'

        el.addEventListener('click', () => {
          this.goToChallenge(marker.geometry.coordinates)
        })

        new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates as mapboxgl.LngLatLike)
          .addTo(this.map)
      }
    },
    initGeolocation() {
      this.geolocationId = navigator.geolocation.watchPosition(
        (position) => {
          this.position = position
          this.map.setCenter([position.coords.longitude, position.coords.latitude])
        },
        (error) => {
          console.log(error)
        },
        {
          enableHighAccuracy: true,
        },
      )
    },
    goToChallenge(challengeCoordinates: number[]) {
      const lineToChallenge = {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: [
            [this.position?.coords.longitude || 0, this.position?.coords.latitude || 0],
            challengeCoordinates,
          ],
        },
        properties: null,
      }
      const metersToChallenge = length(lineToChallenge) * 1000
      const accuracy = this.position?.coords.accuracy ?? 0
      if (metersToChallenge < accuracy + 10) {
        this.$router.push('/challenge')
      }
    },
  },
  mounted() {
    this.initGeolocation()
    this.initMap()
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
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.map {
  width: 100%;
  height: 40rem;
  clip-path: polygon(
    0px calc(100% - 25px),
    5px calc(100% - 25px),
    5px calc(100% - 15px),
    10px calc(100% - 15px),
    10px calc(100% - 10px),
    15px calc(100% - 10px),
    15px calc(100% - 5px),
    25px calc(100% - 5px),
    25px 100%,
    calc(100% - 25px) 100%,
    calc(100% - 25px) calc(100% - 5px),
    calc(100% - 15px) calc(100% - 5px),
    calc(100% - 15px) calc(100% - 10px),
    calc(100% - 10px) calc(100% - 10px),
    calc(100% - 10px) calc(100% - 15px),
    calc(100% - 5px) calc(100% - 15px),
    calc(100% - 5px) calc(100% - 25px),
    100% calc(100% - 25px),
    100% 25px,
    calc(100% - 5px) 25px,
    calc(100% - 5px) 15px,
    calc(100% - 10px) 15px,
    calc(100% - 10px) 10px,
    calc(100% - 15px) 10px,
    calc(100% - 15px) 5px,
    calc(100% - 25px) 5px,
    calc(100% - 25px) 0px,
    25px 0px,
    25px 5px,
    15px 5px,
    15px 10px,
    10px 10px,
    10px 15px,
    5px 15px,
    5px 25px,
    0px 25px
  );
}

.marker {
  display: block;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 0;
}

.map-note {
  font-size: 0.88rem;
  text-transform: uppercase;
  text-align: center;
}
</style>
