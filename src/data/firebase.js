// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection,query, where, doc, getDocs, getDoc, addDoc, getFirestore } from "firebase/firestore";
import products from "./products";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FS_APIKEY,
  authDomain: "proyecto-react-772ba.firebaseapp.com",
  projectId: import.meta.env.VITE_FS_PROJECT_ID,
  storageBucket: "proyecto-react-772ba.firebasestorage.app",
  messagingSenderId: "416217101367",
  appId: import.meta.env.VITE_FS_APP_ID,
  measurementId: "G-CM51V67HRK"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


export async function getProducts(){
   const productsRef = collection(db, "products");

   const productsSnapshot = await getDocs(productsRef);
   // * getDocs(productsRef).then( productsSnapshot => ...)

   //const document0 = productsSnapshot.docs[0];
   //console.log( document0.data(), document0.id ) 
   // resp.json()

   const documents = productsSnapshot.docs;

   const dataDocs = documents.map( item => {
    return { id: item.id, ...item.data() }
   })

   return dataDocs
}

/**
 * Obtiene un unico item de firestore
 * @param { string } idParam - Representa el ID del documento en Firestore
 * @returns una promesa a resolver con la data del documento de Firestore
 */
export async function getProductById(idParam){
  const docRef = doc(db, "products", idParam);
  const docSnapshot = await getDoc(docRef)
  const docData = docSnapshot.data();
  docData.id = docSnapshot.id

  return docData;
}

// ? Esta funcion retorna los productos ordenados segun la categoria
export async function getProductsByCateg(categParam){
   const productsRef = collection(db, "products");

   const queryCategory = query(productsRef, where("category", "==", categParam));
   const productsSnapshot = await getDocs(queryCategory);
  

   const documents = productsSnapshot.docs;
   const dataDocs = documents.map( item => {
    return { id: item.id, ...item.data() }
   })

   return dataDocs
} 

//  2. Crear una "orden" de compras en firebase
export async function createOrder( orderData){
   const ordersRef = collection(db, "orders");
   const newDoc = await addDoc(ordersRef, orderData)   
   return newDoc;
}


// 1. "export" mis productos a firebase
export async function exportProductsData(){
   const productsRef = collection(db, "products")  
   for( let item of products ){
      delete item.id;
      const docCreated = await addDoc(productsRef,item)
      console.log("Creado el doc", docCreated.id)
   }
}

export default app;
