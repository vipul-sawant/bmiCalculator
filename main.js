const results = document.querySelector('#results');
const form = document.querySelector('#form');

const bmiCalculator = () => {
    
    const weight = parseFloat(document.querySelector('#weight').value);
    const height = parseFloat(document.querySelector('#height').value);

    const heightInMeter = height * 0.01;

    const bmi = weight / (heightInMeter * heightInMeter);

    return bmi.toFixed(2);

};

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const bmi = bmiCalculator();
  // console.log(results);
  const text = document.createTextNode(`Your BMI Is ${bmi}`);
  results.appendChild(text);
});
