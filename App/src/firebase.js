import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

// gauth project-442402480387

const firebaseConfig = {
  apiKey: "AIzaSyBl2_9e9jG8naGDRYuLxR1fMkucmkkh6cE",
  authDomain: "romanbudai-70a52.firebaseapp.com",
  projectId: "romanbudai-70a52",
  storageBucket: "romanbudai-70a52.appspot.com",
  messagingSenderId: "442402480387",
  appId: "1:442402480387:web:f02dc39df7966fbbcdc936",
  measurementId: "G-1FYRDJ9PP6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export function getApp() {
  return app;
}

export function setUserCart(userId, data) {
  setDoc(doc(db, "cart", userId), {
    cartItems: data
  });
}

export async function getUserCart(email) {
  const docRef = doc(db, "cart", email);
  const document = await getDoc(docRef);
  const result = document.data();
  return result.cartItems;
}
