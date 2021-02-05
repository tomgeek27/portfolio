const email = "tommaso.amadori.dev@gmail.com"
const location = "Peschiera Borromeo, Milan, Italy"
const age = () => {
  var today = new Date();
  var birthDate = new Date(1997, 12, 2);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m == 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}


export {email, location, age}