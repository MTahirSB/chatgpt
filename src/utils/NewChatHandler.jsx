
import { collection, addDoc, serverTimestamp} from "firebase/firestore"; 
import { db } from '../firebase-config';
import respond from "../openai/openaiclient";



async function newChatHandler(userId ,message) {
    const docRef =  await addDoc(collection(db ,'users', userId ,'config'), {
        timestamp: serverTimestamp(),
        summary : message
    }).then(res => res.id)



     await addDoc(collection(db,'users', userId  , 'chatroom' , docRef ,'messages'), {
        timestamp: serverTimestamp(),
        role : 'user',
        message 
    }).then(res => res.id)

    const GPTresponse = await respond(message) ;


    await addDoc(collection(db,'users', userId  , 'chatroom' , docRef ,'messages'), {
        timestamp: serverTimestamp(),
        role : 'assistant',
        message : GPTresponse
    }).then(res => res.id)


    return docRef

    // Navigation 


  
}

export default newChatHandler