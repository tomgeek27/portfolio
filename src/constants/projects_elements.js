import ritmu from '../assets/imgs/projects/ritmu.png'
import candorlanae from '../assets/imgs/projects/candorlanae.png'

//MAX subtititle.length = 53

const projects = [
  {
    title: 'Ritm-U',
    subtitle: {
      it: 'Android/iOS app per migliorare il controllo della respirazione',
      en: 'Android/iOS app with the aim to improve your breath\'s control'
    },
    src: ritmu,
    url: "https://www.ritm-u.com/"
  },
  {
    title: 'Candorlanae',
    subtitle: {
      it: 'Sito e-commerce di Candorlanae',
      en: 'Candorlanae\'s e-commerce website'
    },
    src: candorlanae,
    url: "https://candorlanae.com/"
  },
  {
    title: 'FaceQs',
    subtitle: {
      it: 'Framework Python per stima della pressione sanguigna da remoto',
      en: 'Python framework to estimate remote blood pressure'
    },
    url: "https://github.com/tomgeek27/stima-della-pressione-sanguigna-da-video-mediante-il-framework-FaceQs",
    avatarColor: 'rgb(98 71 218)'
  },
  {
    title: 'CUDA seam carving',
    subtitle: {
      it: 'Algoritmo content-aware per resizing di immagini',
      en: 'Image resizing content-aware algorithm'
    },
    url: "https://github.com/Luca-Tommy/SeamCarving",
    avatarColor: 'rgb(125 193 116)'
  }
]

export {projects}