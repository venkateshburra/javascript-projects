import { Chatroom } from './chat.js';
import { ChatUI } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
  // dom queries
  const chatList = document.querySelector('.chat-list');
  const newChatForm = document.querySelector('.new-chat');
  const newNameForm = document.querySelector('.new-name'); // Fixed selector
  const updateMsg = document.querySelector('.update-mssg');
  const rooms = document.querySelector('.chat-rooms');

  // add a new chat
  newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
      .then(() => newChatForm.reset())
      .catch(err => console.log(err));
  });

  // update username
  newNameForm.addEventListener('submit', e => {
    e.preventDefault();
    // update name via chatroom
    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName);
    // reset the form
    newNameForm.reset();
    updateMsg.textContent =  `your name was updated to ${newName}`;
    setTimeout(() => updateMsg.textContent = '', 3000);
  });

  // update chat rooms
  rooms.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON') {{
      chatUI.clear();
      chatroom.updateRoom(e.target.getAttribute('id'));
      chatroom.getChats(chat => chatUI.render(chat));
    }}
  })

    // check local storage for a name
    const username = localStorage.username ? localStorage.username : 'anon';


    // class instances
    const chatUI = new ChatUI(chatList);
    const chatroom = new Chatroom('general', username);
  
    // get chats and render
    chatroom.getChats(data => chatUI.render(data));

});
