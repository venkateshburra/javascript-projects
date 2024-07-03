
//     // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
// import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyDPo32d1tvddb5Dg8BEMDJlWZQrrrnezpI",
//   authDomain: "javascript-project-74e34.firebaseapp.com",
//   projectId: "javascript-project-74e34",
//   storageBucket: "javascript-project-74e34.appspot.com",
//   messagingSenderId: "564327625615",
//   appId: "1:564327625615:web:ae08a59e7f06c759f311fa",
//   measurementId: "G-CBZLZ52XMZ"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = getFirestore(app);

// // Fetch data from Firestore
// const list = document.querySelector('ul');
// const form = document.querySelector('form');

// const addRecipe = (recipe, id) => {
//   let time = recipe.created_at.toDate();
//   let title = recipe.title;
//   let html = `
//     <li data-id="${id}">
//       <div>${title}</div>
//       <div>${time}</div>
//       <button class="btn btn-danger btn-sm my-2">delete</button>
//     </li>
//   `;
//   list.innerHTML += html;
// };

// // get docs
// // const recipesCollection = collection(db, 'recipes');
// // getDocs(recipesCollection).then(snapshot => {
// //   snapshot.forEach(doc => {
// //     addRecipe(doc.data(), doc.id);
// //     console.log(doc.id);
// //   });
// // }).catch(err => {
// //   console.log("Error getting documents: ", err);
// // });
// const deleteRecipe = (id) => {
//   const recipes = document.querySelectorAll('li');
//   recipes.forEach(recipe => {
//     if(recipe.getAttribute('data-id') === id) {
//       recipe.remove();
//     }
//   })
// }



// const recipesCollection = collection(db, 'recipes');
// getDocs(recipesCollection).onSnapshot(snapshot => {
//   snapshot.docChange().forEach(change => {
//     const doc = change.doc;
//     if(change.type === 'added') {
//       addRecipe(doc.data(), doc.id);
//     } else if(change.type === 'removed') {
//       deleteRecipe(doc.id);
//     }
//   })
// });
// // Add documents
// form.addEventListener('submit', e => {
//   e.preventDefault();
//   const now = new Date();
//   const recipe = {
//     title: form.recipe.value,
//     created_at: now
//   };

//   const recipesCollection = collection(db, 'recipes');
//   addDoc(recipesCollection, recipe)
//     .then(docRef => {
//       console.log('Document added with ID: ', docRef.id);
//     })
//     .catch(err => {
//       console.error('Error adding document: ', err);
//     });
// });

// list.addEventListener('click', e => {
//   e.preventDefault();
//   if (e.target.tagName === 'BUTTON') {
//     const id = e.target.parentElement.getAttribute('data-id');
//     const docRef = doc(db, 'recipes', id);
//     deleteDoc(docRef)
//       .then(() => {
//         console.log("Document successfully deleted!");
//       })
//       .catch((error) => {
//         console.error("Error removing document: ", error);
//       });
//   }
// });



// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

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

// Fetch data from Firestore
const list = document.querySelector('ul');
const form = document.querySelector('form');

const addRecipe = (recipe, id) => {
  let time = recipe.created_at.toDate();
  let title = recipe.title;
  let html = `
    <li data-id="${id}">
      <div>${title}</div>
      <div>${time}</div>
      <button class="btn btn-danger btn-sm my-2">delete</button>
    </li>
  `;
  list.innerHTML += html;
};

const deleteRecipe = (id) => {
  const recipes = document.querySelectorAll('li');
  recipes.forEach(recipe => {
    if(recipe.getAttribute('data-id') === id) {
      recipe.remove();
    }
  });
}

const recipesCollection = collection(db, 'recipes');
onSnapshot(recipesCollection, snapshot => {
  snapshot.docChanges().forEach(change => {
    const doc = change.doc;
    if(change.type === 'added') {
      addRecipe(doc.data(), doc.id);
    } else if(change.type === 'removed') {
      deleteRecipe(doc.id);
    }
  });
});

// Add documents
form.addEventListener('submit', e => {
  e.preventDefault();
  const now = new Date();
  const recipe = {
    title: form.recipe.value,
    created_at: now
  };
  form.reset();

  const recipesCollection = collection(db, 'recipes');
  addDoc(recipesCollection, recipe)
    .then(docRef => {
      console.log('Document added with ID: ', docRef.id);
    })
    .catch(err => {
      console.error('Error adding document: ', err);
    });
});

list.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.tagName === 'BUTTON') {
    const id = e.target.parentElement.getAttribute('data-id');
    const docRef = doc(db, 'recipes', id);
    deleteDoc(docRef)
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  }
});


