import ritmu from '../assets/imgs/projects/ritmu.png'

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