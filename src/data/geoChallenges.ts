import bobaPixelArt from '@/assets/boba_pixel_art.png'
import ringPixelArt from '@/assets/ring_pixel_art.png'
import sunPixelArt from '@/assets/sun_pixel_art.png'
import type { FeatureCollection, Point } from 'geojson'

export const geoChallenges: FeatureCollection<Point> = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-3.702973646924752, 40.41699700201422],
      },
      properties: {
        errorMarginMeters: 50,
        challengeId: 'button-sun',
        challengeIcon: sunPixelArt,
        challengeText: 'Adivinanza Sol',
        challengeAnswer: 'Sol',
        nextChallengeId: 'eyes-tea',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-3.7120982162426333, 40.42471829680057],
      },
      properties: {
        errorMarginMeters: 10,
        challengeId: 'eyes-tea',
        challengeIcon: bobaPixelArt,
        challengeText: 'Adivinanza Bubble Tea',
        challengeAnswer: 'Bubble Tea',
        nextChallengeId: 'run-fast',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-3.698994518088924, 40.43316295946176],
      },
      properties: {
        errorMarginMeters: 10,
        challengeId: 'run-fast',
        challengeIcon: ringPixelArt,
        challengeText: 'Adivinanza Juegos',
        challengeAnswer: 'Juegos',
      },
    },
  ],
}
