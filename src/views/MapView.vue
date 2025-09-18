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
import type { Feature, Point } from 'geojson'

mapboxgl.accessToken =
  'pk.eyJ1Ijoib3R0b2RvZXNudGtub3ciLCJhIjoiY21ibTlrZnJyMHpsNTJrcXZkN3M2aXNzayJ9.IEpe-Wpq-rnMMK2-jWSrjA'

export default defineComponent({
  data() {
    return {
      map: null as any,
      position: null as GeolocationPosition | null,
    }
  },
  methods: {
    initMap() {
      this.map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/standard?optimize=true',
        config: {
          basemap: {
            theme: 'monochrome',
            showPointOfInterestLabels: false,
            show3dObjects: false,
          },
        },
        center: geoChallenges.features[0].geometry.coordinates as mapboxgl.LngLatLike,
        zoom: 15,
      })

      const geolocate = new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      })
      this.map.addControl(geolocate)

      geolocate.on('geolocate', (geolocationPosition: GeolocationPosition) => {
        this.position = geolocationPosition
      })

      this.map.on('style.load', () => {
        this.map.setRain({
          'center-thinning': 0,
          density: 1,
          intensity: 1,
          'distortion-strength': 1,
        })
      })

      this.map.on('load', () => {
        this.addMarkers()
        geolocate.trigger()
      })
    },
    addMarkers() {
      for (const geoChallenge of geoChallenges.features) {
        const el = document.createElement('div')
        el.className = 'marker'
        el.style.backgroundImage = `url(${geoChallenge.properties?.challengeIcon})`
        el.style.width = '2rem'
        el.style.height = '2rem'
        el.style.backgroundSize = '100%'

        el.addEventListener('click', () => {
          this.goToChallenge(geoChallenge)
        })

        new mapboxgl.Marker(el)
          .setLngLat(geoChallenge.geometry.coordinates as mapboxgl.LngLatLike)
          .addTo(this.map)
      }
    },
    goToChallenge(geoChallenge: Feature<Point>) {
      const lineToChallenge = {
        type: 'Feature' as const,
        geometry: {
          type: 'LineString',
          coordinates: [
            [this.position?.coords.longitude || 0, this.position?.coords.latitude || 0],
            geoChallenge.geometry.coordinates,
          ],
        },
        properties: null,
      }
      const metersToChallenge = length(lineToChallenge) * 1000
      const accuracy = this.position?.coords.accuracy ?? 0
      const errorMarginMeters = accuracy + geoChallenge.properties?.errorMarginMeters
      if (metersToChallenge < errorMarginMeters) {
        this.$router.push('/challenge')
      } else {
        window.alert(
          `Distancia al punto: ${metersToChallenge.toFixed(2)} metros\nMargen de error: ${errorMarginMeters.toFixed(2)} metros`,
        )
      }
    },
  },
  mounted() {
    this.initMap()
  },

  unmounted() {
    if (this.map) {
      this.map.remove()
      this.map = null
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
