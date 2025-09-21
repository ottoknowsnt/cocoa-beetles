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
        challengeTexts: [
          'Un ojo en la cara azul',
          'vio un ojo en la cara verde.',
          '«Ese ojo es como este ojo»,',
          'dijo el ojo primero,',
          '«pero en lugares bajos,',
          'y no en lugares altos».',
        ],
        challengeAnswer: 'margarita',
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
        errorMarginMeters: 20,
        challengeId: 'eyes-tea',
        challengeIcon: bobaPixelArt,
        challengeTexts: [
          'Devora todas las cosas: aves, bestias, plantas y flores;',
          'roe el hierro, muerde el acero, y pulveriza la peña compacta;',
          'mata reyes, arruina ciudades y derriba las altas montañas.',
        ],
        challengeAnswer: 'tiempo',
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
        errorMarginMeters: 20,
        challengeId: 'run-fast',
        challengeIcon: ringPixelArt,
        challengeTexts: [
          'No puedes verla ni sentirla, y ocupa todos los huecos;',
          'no puedes olerla ni oírla, está detrás de los astros,',
          'y está al pie de las colinas, llega primero, y se queda;',
          'mata risas y acaba vidas.',
        ],
        challengeAnswer: 'oscuridad',
      },
    },
  ],
}
