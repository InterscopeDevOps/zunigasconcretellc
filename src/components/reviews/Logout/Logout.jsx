import React from 'react'
import { BiLogIn } from "react-icons/bi"
import { useAuth } from 'reactfire';
import { useNavigate } from "react-router-dom";

import { RiErrorWarningLine } from 'react-icons/ri'
import { MdClose } from 'react-icons/md'


const Logout = ({ isModalLogout, onClose }) => {


  let navigate = useNavigate()

  const auth = useAuth();
  const signOut = auth => auth.signOut().then(() => navigate("/reviews"));

  if (!isModalLogout) return null;

  return (

    <div
      className='fixed z-50 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
      id='modalLogout'
    >
      <div className='w-[90%] md:w-[40%] flex flex-col'>
        <button
          className='text-white text-[30px] place-self-end'
          onClick={() => onClose()}
        >
          X
        </button>

        <div className='bg-white flex flex-col items-center text-center px-10 md:px-0 py-10 rounded-2xl'>

          <RiErrorWarningLine className='mb-5 text-[105px] color-2' />
          <h1 className='capitalize text-[25px] font-semibold pb-10'>are you sure you want to log out?</h1>

          <div className='flex flex-col md:flex-row space-x-0 space-y-5 md:space-y-0 md:space-x-5'>

            <button
              onClick={() => signOut(auth)}
              className="flex self-center items-center text-white bg-2 py-3 px-4 mx-1 text-[18px] font-bold rounded-lg"
            >
              <span className='pr-3'>
                <BiLogIn />
              </span>
              Sign Out
            </button>
            <button
              onClick={() => onClose()}
              className="flex self-center items-center text-white bg-red-500 py-3 px-4 text-[18px] font-bold rounded-lg"
            >
             <span className='pr-3'>
                <MdClose />
              </span>
              Cancel
            </button>

          </div>
        </div>

      </div>
    </div>

  )
}
export default Logout