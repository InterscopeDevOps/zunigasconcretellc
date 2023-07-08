import React from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-[100vh] bg-gray-100 text-gray-900 flex justify-center self-center items-center">
      <div className="container">
        <div className="form-container sign-in-container">
          <div className="pt-5 pl-5">
            <Link to={"/reviews"} className="flex items-center">
              <FaArrowLeft className="text-[22px]" />
              <span className="px-2 text-[22px] font-bold">Back</span>
            </Link>
          </div>
          <div className="w-full flex justify-center">
            <button className="bg-white bg-2 text--slate-900 duration-300 ease-in-out hover:text-white  rounded-full px-5 py-2 w-[250px] flex items-center justify-center">
              <span className="px-2 text-[20px] font-bold text-white">
                Login With Email
              </span>
              <AiOutlineUserAdd className="text-[22px] font-bold text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
