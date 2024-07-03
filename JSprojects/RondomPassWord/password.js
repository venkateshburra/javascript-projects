
const passwordBox = document.getElementById('password');
const buttonBtn = document.querySelector('.btn');
const copy = document.querySelector('.Copy')
const lenght = 12;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbol = '!@#$%&*[]{}\|?/<>()_=+_^'

const allCars = upperCase + lowerCase + numbers + symbol;

buttonBtn.addEventListener('click', () => {
    
const CreatePassword = () => {
    let password = '';
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(lenght > password.length) {
        password += allCars[Math.floor(Math.random() * allCars.length)]
    }
    passwordBox.value = password;
}
CreatePassword();

})

copy.addEventListener('click', ()=> {
    const copyPassword = () => {
        passwordBox.select();
        document.execCommand('copy');
    }
    copyPassword();
})