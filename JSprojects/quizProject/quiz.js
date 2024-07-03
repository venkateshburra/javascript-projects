
const correctAnwers = ['B', 'B', 'B', 'B'];

const form = document.querySelector('.quiz-form');

const result = document.querySelector('.result');

// const spanScore = document.querySelector('span');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let score  = 0;
  const useranswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  useranswers.forEach((answer, index) => {
    if(answer === correctAnwers[index]) {
      score += 25;
    }
    // show result on page

    scroll(0, 0);
    result.classList.remove('d-none');
    // spanScore.textContent = `${score}%`;
    // result.classList.remove('d-none');
  
    let output = 0;
    const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;
    if(output === score) {
      clearInterval(timer);
    } else {
      output++;
    }

  },10);
  //   let output = 0;
  //   const timer = setInterval(() => {
  //     output++;
  //   result.querySelector('span').textContent = `${output}%`;
  //   if(output === score) {
  //     clearInterval(timer);
  //   } 
  // },10);


  });

})


// SETtimeout
// setTimeout(() => {
//   console.log('hello');
// },8000);

// setIntervel
// setInterval(() => {
//   console.log('hello');
// }, 1000);

// to stop timeout

// let i = 0;
// const timer = setInterval(() => {
//   console.log('hello');
//   i++;
//   if(i === 5) {
//   clearInterval(timer);

//   }
// }, 1000);
