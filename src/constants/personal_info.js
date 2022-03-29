const email = "tommaso.amadori.dev@gmail.com"
const location = {
  it: "Milano, Italia",
  en: "Milan, Italy",
}
const age = () => {
  var today = new Date();
  var birthDate = new Date(1997, 12, 2);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

const aboutme = {
  it: "Ciao! Sono uno studente e freelance front-end developer. Sono un ragazzo sempre pronto a sperimentare e imparare nuovi strumenti e nuove tencologie da poter utilizzare. Ho iniziato a programmare da quando sono adolescente facendo semplici programmini, continuando poi nel mondo dei videogiochi sviluppandone diversi fino ad arrivare allo sviluppo di applicazioni lato front-end.",
  en: "Hi, I am a student and freelance front-end developer and I\'m passionate about experimenting and learning new technologies. I’m into programming since i was a child. I began by developing small and simple programs, then, moved by the passion for video games, I started developing different ones up to the front-end development which I'm currently specializing on"}


export {email, location, age, aboutme}