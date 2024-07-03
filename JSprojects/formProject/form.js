
const form=document.querySelector('.sign');
const feedback=document.querySelector('.feedback');
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  const user=form.username.value;
  const userpattern=/^[a-zA-Z]{6,12}$/;
  if(userpattern.test(user)){
      feedback.textContent='Your Username is valid';
  } else{
    feedback.textContent='Your Username is unvalid atleast contain 6 to 12 characters';
  }
});





