import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { MdClose } from "react-icons/md";
import girl from "../assets/img/girl.jpg";
import user from "../assets/json/users.json"
import joel from "../assets/img/Joel_WS_IMAGE.jpeg"
const Status = ({ status,setStatus }) => {
  return (
    <AnimatePresence>
      {status && (
        <motion.div className="fixed bg-white w-full h-full z-[555] flex">
          <div className="w-[410px] bg-story h-full">
            <div className="w-full h-[120px] flex items-center px-4 justify-center">
              <div className="flex h-full items-center w-[97%] border-b border-slate-700">
                <div className="w-[40px] h-[40px] rounded-full overflow-hidden cursor-pointer">
                  <img
                    src={joel}
                    alt=""
                    className="w-full h-full"
                  />
                </div>
                <div className="ml-4">
                  <h1 className="text-white text-md">My Status</h1>
                  <p className="text-slate-500 text-sm">No updates</p>
                </div>
              </div>
            </div>



            <div className='h-[50px] w-full flex items-center justify-center'>
          <p className='text-sm text-white'>Your status updates are<span className='text-sky-300'> end-to-end encrypted</span></p>
        </div>
          </div>
          <div className="w-[70%] h-full bg-secondary flex items-center justify-center relative">
            <MdClose className="fixed top-4 right-4 text-white text-[27px] cursor-pointer" onClick={()=>setStatus(false)}/>
            <div className="flex items-center flex-col">
            <span className="text-icon mb-8 opacity-60">
            <svg viewBox="0 0 80 80" height="80" width="80" preserveAspectRatio="xMidYMid meet" class="" version="1.1" id="Layer_1" x="0px" y="0px" enable-background="new 0 0 80 80"><path fill="currentColor" d="M30.566,78.982c-0.222,0-0.447-0.028-0.672-0.087C12.587,74.324,0.5,58.588,0.5,40.631 c0-3.509,0.459-6.989,1.363-10.343c0.377-1.399,1.814-2.23,3.217-1.851c1.399,0.377,2.228,1.818,1.851,3.217 c-0.784,2.909-1.182,5.929-1.182,8.977c0,15.578,10.48,29.226,25.485,33.188c1.401,0.37,2.237,1.806,1.867,3.209 C32.79,78.204,31.728,78.982,30.566,78.982z M49.921,78.875C67.336,74.364,79.5,58.611,79.5,40.563c0-3.477-0.452-6.933-1.345-10.27 c-0.374-1.401-1.812-2.232-3.213-1.858c-1.4,0.375-2.233,1.813-1.858,3.214c0.773,2.896,1.166,5.895,1.166,8.914 c0,15.655-10.545,29.319-25.646,33.23c-1.403,0.363-2.246,1.796-1.883,3.199c0.306,1.182,1.371,1.967,2.539,1.967 C49.478,78.959,49.699,78.932,49.921,78.875z M15.482,16.5C21.968,9.901,30.628,6.267,39.867,6.267 c9.143,0,17.738,3.569,24.202,10.05c1.024,1.026,2.686,1.028,3.712,0.004c1.026-1.024,1.028-2.685,0.005-3.712 C60.329,5.135,50.413,1.018,39.867,1.018c-10.658,0-20.648,4.191-28.128,11.802c-1.016,1.034-1.002,2.696,0.032,3.711 c0.511,0.503,1.175,0.753,1.84,0.753C14.289,17.284,14.968,17.022,15.482,16.5z"></path></svg>
              </span>
              <p className="text-icon opacity-80">Click on a contact to view their status updates</p>
            </div>
          </div>
        </motion.div>
      )}

    </AnimatePresence>

  );
};

export default Status;
