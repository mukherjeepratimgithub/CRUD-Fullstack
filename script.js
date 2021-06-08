// Select text input
const textInput = document.getElementById('city');
// Store the value of the input in a variable
let cityName = textInput.value;
// When an input event is triggered update cityName
textInput.addEventListener('input', function(e) {
  cityName = e.target.value;
})
// Select our form
const form = document.querySelector('form');
// When form is submitted print 'submitted' to the browser console
form.addEventListener('submit', function(e) {
  // prevent form default behavior
  e.preventDefault();
// print input value
//   console.log(cityName);

// make request to our API
axios.get('http://localhost:3000/weather/?city=' + cityName)
.then(function(response) {
  console.log(response.data);
})
.catch(function(error) {
  console.log(error);
})

// clear input
  textInput.value = '';
})