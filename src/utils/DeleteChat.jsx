import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";






async function DeleteChat(userId , roomId) {
    await deleteDoc(doc(db,'users', userId ,'config',roomId));
    let temparr = []

    const querySnapshot = await getDocs(collection(db,'users', userId ,'chatroom' , roomId ,'messages'));
    querySnapshot.forEach((doc) => {
    temparr.push(doc.id)
    });


    temparr.forEach((id)=>{
        deleteDoc(doc(db,'users', userId ,'chatroom' , roomId ,'messages',id))
    })



    
}

export default DeleteChat