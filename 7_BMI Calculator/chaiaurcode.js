const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); //to prevent direct execution of submit form

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // results.innerHTML = `<span> ${bmi} </span`;
    if (bmi < 18.6) {
      var message = 'YOU ARE UNDERWEIGHT';
    }
    if (bmi < 24.9 && bmi > 18.6) {
      message = 'YOU ARE NORMAL';
    }
    if (bmi > 24.9) {
      message = 'YOU ARE OVERWEIGHT';
    }
    results.innerHTML = `<span> ${bmi} , ${message} </span>`;
  }
});
