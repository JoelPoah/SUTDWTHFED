import React, { useState } from 'react'
import { motion } from 'framer-motion' 

const UserInfo = ({selectedChat}) => {
  const [mute, setMute] = useState(0)
  const muteHandler = () => {
    if (mute === 21) {
      setMute(0)
    } else {
      setMute(21)
    }
  }
  return (
    <motion.div
            animate={{
              opacity: [0, 1],
              translateY: [-100, 0],
              transition: {
                delay: 0.3,
                duration:0.3
              }
            }}

            className='mt-[60px] w-full '>
            <div className='w-full h-[315px] bg-[#111B21] flex flex-col items-center justify-center'>
              <div className='w-[200px] rounded-full overflow-hidden'>
                <img src={selectedChat.pic} alt="" />
              </div>
              <h1 className='text-white text-2xl'>{selectedChat.name}</h1>
              <p className='text-slate-500'>+62 111-1111-1111</p>
            </div>

            <div className='w-full h-[88px] bg-secondary mt-3 px-8 flex flex-col justify-center'>
              <h3 className='text-slate-500'>Info</h3>
              <p className='text-white'>Hey there I'm using WhatsApp.</p>
            </div>

            <div className='w-full h-[55px] bg-secondary mt-3 flex items-center px-8 justify-between'>
              <p className='text-slate-500 text-sm'>Media, links and docs</p>
              <div className='flex items-center h-full text-slate-500 gap-3'>
                <p>1</p>
                <button>
                  <span data-testid="chevron-right-alt" data-icon="chevron-right-alt" class="aft2yglh"><svg viewBox="0 0 10 21" height="21" width="10" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 10 21" ><path fill="currentColor" d="M1,15.75l5.2-5.2L1,5.35l1.5-1.5l6.5,6.7l-6.6,6.6L1,15.75z"></path></svg></span>
                </button>
              </div>
            </div>

            <div className='w-full h-[454px] bg-secondary mt-3 pl-10 pr-8 flex flex-col gap-3'>
              <div className='flex items-center w-full h-[50px]'>
                <div className='flex text-icon gap-5'>
                <button>
                  <svg viewBox="0 0 16 15" height="20" preserveAspectRatio="xMidYMid meet" class=""><path fill="currentColor" d="m8.3 10.2-2.5 1.7c-.3.2-.8-.1-.7-.5L6 8.6c.1-.2 0-.4-.2-.5L3.5 6.3c-.4-.3-.2-.8.2-.8l3-.1c.2 0 .3-.1.4-.3l1-2.8c.1-.4.7-.4.8 0l1 2.8c.1.2.2.3.4.3l3 .1c.4 0 .6.5.3.8l-2.4 1.8c-.1.1-.2.3-.2.5l.9 2.9c.1.4-.3.7-.7.5l-2.5-1.7c-.1-.2-.3-.2-.4-.1z"></path></svg>
                  </button>
                  <h1 className='text-white'>Starred</h1>
                </div>
                <button className='text-icon ml-auto'>
                  <svg viewBox="0 0 10 21" height="21" width="10" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 10 21"><path fill="currentColor" d="M1,15.75l5.2-5.2L1,5.35l1.5-1.5l6.5,6.7l-6.6,6.6L1,15.75z"></path></svg>
                </button>
              </div>

              <div className='flex items-center w-full h-[50px]'>
                <div className='flex text-icon gap-5'>
                <button>
                <svg viewBox="0 0 24 24" height="20" preserveAspectRatio="xMidYMid meet" class=""><path fill="currentColor" d="M12 21.7c.9 0 1.7-.8 1.7-1.7h-3.4c0 .9.8 1.7 1.7 1.7zm5.6-5.2v-4.7c0-2.7-1.8-4.8-4.3-5.4v-.6c0-.7-.6-1.3-1.3-1.3s-1.3.6-1.3 1.3v.6c-2.5.6-4.3 2.7-4.3 5.4v4.7l-1.7 1.7v.9h14.6v-.9l-1.7-1.7z"></path></svg>
                  </button>
                  <h1 className='text-white'>Mute Notification</h1>
                </div>
                <div className='h-4 w-10 bg-slate-600 ml-auto rounded-full flex items-center relative'>
                  <motion.div
                    animate={{
                      translateX:mute
                    }}
                    className='w-5 h-5 rounded-full absolute bg-icon -top-[2px] cursor-pointer' onClick={muteHandler}></motion.div>
                </div>
              </div>



              
              <div className='flex items-center w-full h-[50px] mt-3'>
                <div className='flex text-red-400 gap-5'>
                <button>
                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24" ><path fill="currentColor" d="M12,2.8c-5.3,0-9.7,4.3-9.7,9.7s4.3,9.7,9.7,9.7s9.7-4.3,9.7-9.7S17.3,2.8,12,2.8z  M4.7,12.5c0-4,3.3-7.3,7.3-7.3c1.6,0,3.1,0.5,4.3,1.4L6.1,16.8C5.2,15.6,4.7,14.1,4.7,12.5z M12,19.8c-1.6,0-3-0.5-4.2-1.4 L17.9,8.3c0.9,1.2,1.4,2.6,1.4,4.2C19.3,16.5,16,19.8,12,19.8z"></path></svg>
                  </button>
                  <div>
                    <h1 className='text-red-400'>{`Blokir ${selectedChat.name}`}</h1>
                  </div>
                </div>
              </div>

              <div className='flex items-center w-full h-[50px] mt-3'>
                <div className='flex text-red-400 gap-5'>
                <button>
                <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><g><g id="thumb-down"><path fill="currentColor" d="M14.091,4.2H6.318c-0.691,0-1.295,0.432-1.555,1.036l-2.591,6.132C2.086,11.541,2,11.714,2,11.973v1.641 l0,0V13.7c0,0.95,0.777,1.727,1.727,1.727h5.441L8.305,19.4c0,0.086,0,0.173,0,0.259c0,0.345,0.173,0.691,0.345,0.95l0.95,0.864 l5.7-5.7c0.345-0.345,0.518-0.777,0.518-1.209V5.927C15.818,4.977,15.041,4.2,14.091,4.2z M17.545,4.2v10.364H21V4.2H17.545z"></path></g></g></svg>
                  </button>
                  <div>
                    <h1 className='text-red-400'>{`Report ${selectedChat.name}`}</h1>
                  </div>
                </div>
              </div>


            </div>
          </motion.div>
  )
}

export default UserInfo