import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import DeleteChat from '../utils/DeleteChat';



 function CustomMenu({userId ,roomId}) {

  // console.log(userId , roomId)



    return (
      <div className=" text-right  ">
        <Menu as="div" className=" text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md  font-medium text-white/50 hover:text-white">
                <MoreHorizIcon fontSize='inherit' />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-50  right-0   w-32 origin-top-right rounded-md bg-[#100f0f] shadow-lg ring-1 ring-black/5 focus:outline-none">
              <div className="px-1 py-1 flex flex-col justify-start text-left ">
              <Menu.Item>
                    <div className=' w-full hover:bg-[#1e1d1d] rounded-md cursor-pointer'>
                    <button
                      className=' p-2 max-w-max text-sm '
                    >
                      
                      Share
                    </button>
                    </div>

                </Menu.Item>
                <Menu.Item>
                <div className=' w-full hover:bg-[#1e1d1d] rounded-md cursor-pointer'>
                    <button
                      className=' p-2 max-w-max text-sm hover:bg-[#1e1d1d]'
                    >
                      
                      Rename
                    </button></div>
                </Menu.Item>
                <Menu.Item>
                <div className=' w-full hover:bg-[#1e1d1d] rounded-md cursor-pointer'>
                    <button
                      onClick={()=>DeleteChat(userId ,roomId)}
                      className=' p-2 max-w-max text-sm text-red-500 hover:bg-[#1e1d1d]'
                    >
                      
                      Delete Chat
                    </button></div>
                </Menu.Item>
                
              </div>
              
              
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    )
  }
  
  

function ChatSetter({item ,user}) {
  const navigate = useNavigate()
  

  return (
    <div onClick={()=>navigate(`/c/${item.id}`)}  className="text-white flex items-center justify-between w-full p-2 rounded-md hover:bg-[#1b1a1a]">
        <p className=' text-sm'>{item.summary}</p>
        <CustomMenu userId={user?.uid} roomId={item?.id} />
        
    </div>
  )
}

export default ChatSetter