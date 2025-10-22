// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection,query, where, doc, getDocs, getDoc, addDoc, getFirestore } from "firebase/firestore";
import products from "./products";


const firebaseConfig = {
  apiKey: "AIzaSyCD6bjW4_CSBk9Si2OrLHS4-CANKnIUb-c",
  authDomain: "proyecto-react-772ba.firebaseapp.com",
  projectId: "proyecto-react-772ba",
  storageBucket: "proyecto-react-772ba.firebasestorage.app",
  messagingSenderId: "416217101367",
  appId: "1:416217101367:web:6bb5a853a867f81078fbb2",
  measurementId: "G-CM51V67HRK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



export  async function getProducts() {

  // referenciamos la coleccion
 const productsRef = collection(db, "products");
 
 const productsSnapshot = await getDocs(productsRef);
 
// const document0 = productsSnapshot.docs[0];
  // console.log(document0.data(), document0.id);

  const documents = productsSnapshot.docs;
  const dataDocs = documents.map( item =>{ 
   return { id: item.id, ...item.data() } });
   
  return dataDocs;   
}

export async function getProductById(idParam) {
  const docRef = doc(db, "products", idParam)
  const docSnapshot = await getDoc(docRef); //esperar a q la fx docRef se cumpla
  const docData = docSnapshot.data();
  docData.id = docSnapshot.id;

  return docData;
}

export async function getProductsByCateg(categParam) {
  const productsRef = collection(db, "products");
  
  const q = query(productsRef, where("category", "==", categParam)); // por convencion se llama q (puede llamarse de cualquierw manera)
  const productsSnapshot = await getDocs(q);

  const documents = productsSnapshot.docs;

  const dataDocs  = documents.map( item =>{ 
   return { id: item.id, ...item.data() } });
     
  return dataDocs;   
}

export async function createOrder(orderData) {
  const ordersRef = collection(db, "orders");
  const newDoc = await addDoc(ordersRef, orderData);
  return newDoc;
}
export async function exportProductsData(){
   const productsRef = collection(db, "products")  
   for( let item of products ){
      delete item.id;
      const docCreated = await addDoc(productsRef,item)
      console.log("Creado el doc", docCreated.id)
   }
}

export default app;
