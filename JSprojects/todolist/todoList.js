const inputBx = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const btn = document.querySelector('.button-add');

btn.addEventListener('click', () => {
    const addTask = () => {
        if(inputBx.value === '') {
            alert('you must write something');
        } else{
            let li = document.createElement('li');
            li.innerHTML = inputBx.value;
            listContainer.appendChild(li);

            let span = document.createElement('span');
            span.innerHTML = '\u00d7';
            li.appendChild(span);
        }
        inputBx.value = '';
        saveData();
    }
    addTask();
})

listContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();

    } else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();

    }
})

const saveData = () => {
    localStorage.setItem('data', listContainer.innerHTML);
}
const showTask = () => {
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();

