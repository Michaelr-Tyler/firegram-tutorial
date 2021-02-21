import {useState, useEffect} from 'react';
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([])

  useEffect(()=>{
    const unsub = projectFirestore.collection(collection)
    .orderBy('createdAt', 'desc') //orders collection in desc order by creation time
    .onSnapshot((snap)=>{
        let documents = []; //empty array we push all the data into 'GET' request.
        snap.forEach(doc => {
          documents.push({...doc.data(), id: doc.id})
        }); 
        setDocs(documents)
      });

      return () => unsub();
  },[collection])

  return { docs };
}

export default useFirestore;