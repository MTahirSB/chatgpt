import React from 'react'

function ChatMessage({user ,item}) {
  // console.log(item)

  return (
    <div className={`  p-4 py-2'`}>
        <div className='flex space-x-4 max-w-3xl mx-auto'>
        <div >
        <img
              width="28"
              height="28"
              src={user ? "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" : 'https://img.icons8.com/material-sharp/24/chatgpt.png'}
              alt="chatgpt"
              className={`' rounded-3xl mt-1 bg-lime-500 ${user? '' : 'p-1'} '`}
            />
        </div>
        <div>
            <p className=' font-extrabold '>{user? 'You' : 'ChatGPT'}</p>
            <p className=' text-white/90 text-sm'>{item.message}</p>
        </div>

    </div>
    </div>

  )
}

export default ChatMessage