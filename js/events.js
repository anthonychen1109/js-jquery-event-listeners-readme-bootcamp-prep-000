//define functions here

$(document).ready(function(){

// call functions here
<<<<<<< HEAD
const getIt = () => {
=======
function getIt() {
>>>>>>> 26b39ade66208785d4cd2f900e728d6edfa50274
  $('p').on('click', () => {
    alert('Hey!')
  })
}
<<<<<<< HEAD

const frameIt = () => {
  $('img').on('load', () => {
    $('img').addClass('tasty')
  })  
}

const pressIt = () => {
  $('input').on('keydown', (key) => {
    if (key.which === 71) {
      alert('G key has been pressed.')
    }
  })  
}

const submitIt = () => {
  $('form').on('submit', () => {
    alert('Your form is going to be submitted now.')
  })  
}
=======
>>>>>>> 26b39ade66208785d4cd2f900e728d6edfa50274

});
