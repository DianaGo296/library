// Import the function to initialize firebase
import { initializeApp } from "firebase/app";
import {
    getFirestore, //provides access to Google Cloud Firestore
    collection, // get spesific collection from db
    getDocs, // get all documents insite the collection
    addDoc // add new document to collection
} from 'firebase/firestore';

// keys and identifiers for my app
const firebaseConfig = {
    apiKey: "AIzaSyA_KaMAGNnVZoPORMEc5nClYYcYPEQ_oXg",
    authDomain: "library-49b85.firebaseapp.com",
    projectId: "library-49b85",
    storageBucket: "library-49b85.appspot.com",
    messagingSenderId: "695093973706",
    appId: "1:695093973706:web:235ba8f56614b79c21da33"
};


// initialize firebase
initializeApp(firebaseConfig);

// initialize services 
const db = getFirestore();

/* 
get spesific collenction we want to get the data from
Firt - pass the db we want to get the collection from
Second - name of the collection 
*/
const colRef = collection(db, 'books');

// GET DATA

//get all docs data from the collection -> returns Automaticly a Promise
getDocs(colRef)
    // after we get the docs run a snapshot
    // >>> snapshot = object that givs access to all of the documents
    .then((snapshot) => {
        var books = []
        // run through all the docs - get the id and all other relevant info (title, name etc)
        snapshot.docs.forEach(doc => books.push({ ...doc.data(), id: doc.id }))
        console.log(books);
    }).catch(err => console.log(err.message))




// ADD DATA

/* TODO
1. get new collection users (collection(db, 'users))
2. add new user on sumbit
3. getDocs again for users
*/
const addUser = document.querySelector('.formName');

// add document on submit
addUser.addEventListener('submit', (e) => {
    e.preventDefault();

    // add fields to doc in the collection (html name attr)
    addDoc(colRef, {
        username: addUser.name.value,
        userId: addUser.userId.value,
        date //add date now()
    }).then(() => {
        // async action, after comeplete get the curent book id and disable button for current user
    })
});



// DELETE DATA -- advanced

/* TODO
1. import deleteDoc + doc functions from firestore (deleteDoc = function that deleting then doc we want, doc = get spesific doc from a collection)
2. submit event listener
3. docRef = doc(db, ''collection', 'doc id')
4. call deleteDoc(docRef).then( remove the book from user + set button to enable )
*/