import React, { useEffect, useState } from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import ChatSetter from "./ChatSetter";
import { useNavigate } from "react-router-dom";
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase-config";
import Auth from "../utils/Auth";

function Sidebar({ user ,setFn }) {
  const navigate = useNavigate();

  const [chats, setChats] = useState([]);
  
  // useEffect(()=>{
  //   const q = query(collection(db,'users', user?.uid,'config'), orderBy("timestamp", "desc"));
  //  onSnapshot(q, (querySnapshot) => {
  //   const chats = [];
  //   querySnapshot.forEach((doc) => {
  //     chats.push({ 'id': doc.id , ...doc.data()});
  //   });
  //   setChats(chats);
  // });
  // },[])
  

  let [_,__,___,signout] = Auth(setFn)


 

  return (
    <div className=" h-screen w-64 bg-black p-4 px-2 flex flex-col">
      <div
        onClick={() => navigate("/")}
        className="text-white flex cursor-pointer items-center justify-between w-full p-2 rounded-md hover:bg-[#515151]"
      >
        <div className=" flex space-x-2 items-center">
          <div className=" bg-white rounded-full p-1">
            <img
              width="20"
              height="20"
              src="https://img.icons8.com/material-sharp/24/chatgpt.png"
              alt="chatgpt"
            />
          </div>
          <p className=" text-sm">New Chat</p>
        </div>
        <div className=" text-xl -mt-1">
          <AddOutlinedIcon fontSize="inherit" />
        </div>
      </div>

      <div className=" flex-grow overflow-y-scroll scrollbar-hide py-1 pt-4 relative overflow-x-none">
        {chats.map((item ,index) =>  <ChatSetter key={index} user={user} item={item} /> )}
      </div>

      <div className="relative">
        {/* <div className=" bg-gradient-to-t from-black absolute -top-10 h-10 w-full" /> */}
        <button className="text-white flex items-center justify-between w-full p-2 rounded-md hover:bg-[#2d2d2d]">
          <div className=" flex space-x-2 items-center">
            <div className=" bg-black rounded-full px-2 py-1 aspect-square">
              <AutoAwesomeIcon fontSize="inherit" />
            </div>
            <div>
              <p className=" text-sm text-left font-bold">Upgrade Plan</p>
              <p className=" text-xs text-left text-gray-300 ">
                Get GPT-4, DALL.E , and more
              </p>
            </div>
          </div>
        </button>
        <button className="text-white flex items-center justify-between w-full p-2 rounded-md hover:bg-[#2d2d2d]">
          <div className=" flex space-x-2 items-center">
            <div className=" bg-white rounded-full p-[2px]">
              <img
                width="20"
                height="20"
                className=" rounded-full"
                src={user?.photoURL || "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"}
                alt="ProfilePic"
              />
            </div>
            <p className=" text-sm text-left font-bold">{user?.displayName}</p>
          </div>
        </button>
        <button onClick={signout} className=" bg-red-600 w-full rounded-lg py-2 hover:bg-red-400 cursor-pointer  text-white">
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Sidebar;