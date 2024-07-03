
const noteContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-Box');

function showNotes(){
    noteContainer.innerHTML = localStorage.getItem('notes');

}
  showNotes();

function updateStorage(){
    localStorage.setItem('notes', noteContainer.innerHTML);

}

createBtn.addEventListener('click', () => {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'input-Box';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = '/notes-app/noteImg/images/delete.png';
    noteContainer.appendChild(inputBox).appendChild(img);
})

noteContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'IMG') {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === 'P') {
        notes = document.querySelectorAll('.input-Box');
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updateStorage();
            }
        })
    }
})

document.addEventListener('keydown', event => {
    if(event.key === 'Enter') {
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
 })
