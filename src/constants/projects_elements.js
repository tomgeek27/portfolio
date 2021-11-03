import ritmu from '../assets/imgs/projects/ritmu.png'
import seam_carving from '../assets/imgs/projects/seam_carving.png'

//MAX subtititle.length = 53

const projects = [
  {
    title: 'Ritm-U',
    subtitle: {
      it: 'Android/iOS app per migliorare il controllo della respirazione',
      en: 'Android/iOS app for improve your breath\'s control'
    },
    src: ritmu,
    url: "https://www.ritm-u.com/"
  },
  {
    title: 'GPU accelerated seam carving',
    subtitle: {
      it: 'Algoritmo di riduzione di immagini',
      en: 'Image resizing content-aware algorithm'
    },
    src: seam_carving,
    url: "https://github.com/Luca-Tommy/SeamCarving"
  }
]

export {projects}