// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getFirestore, collection, addDoc, onSnapshot, query, where, orderBy } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDPo32d1tvddb5Dg8BEMDJlWZQrrrnezpI",
  authDomain: "javascript-project-74e34.firebaseapp.com",
  projectId: "javascript-project-74e34",
  storageBucket: "javascript-project-74e34.appspot.com",
  messagingSenderId: "564327625615",
  appId: "1:564327625615:web:ae08a59e7f06c759f311fa",
  measurementId: "G-CBZLZ52XMZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chats = collection(db, 'chat');  // Correct collection name
    this.unsub;
  }

  // Add document chat
  async addChat(message) {
    // Format a chat object
    const now = new Date();
    const chat = {
      message,
      username: this.username,
      room: this.room,
      created_at: now,
    };
    // Save the chat document
    const response = await addDoc(this.chats, chat);
    console.log('Chat added:', response);
    return response;
  }

  // Get chats with a query to filter by room
  getChats(callback) {
   const q = query(
      this.chats,
      where('room', '==', this.room),
      orderBy('created_at')
    );
    this.unsub = onSnapshot(q, snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
          callback(change.doc.data());
        }
      });
    }); 
  }

  updateName(username) {
    this.username = username;
    localStorage.setItem('username', username);
  }

  updateRoom(room) {
    this.room = room;
    console.log('room updated');
    if(this.unsub) {
      this.unsub();
    }
  }
  
}

// delete documenet

