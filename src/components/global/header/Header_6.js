import React, { useContext, useState } from "react";
import { GlobalDataContext } from "../../../context/context";
import { Link } from "react-router-dom";
import Navmenu from "../MenuList";
import { ImPhone } from "react-icons/im";
import { HiMail } from "react-icons/hi";
import {GiHamburgerMenu} from 'react-icons/gi'

const Header_6 = () => {
  const { rpdata } = useContext(GlobalDataContext);
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <div className="h-auto md:h-[120px] flex">
        <div className="hidden md:block w-full md:w-[70%] h-full">
          <div className="flex flex-wrap justify-center items-center h-full gap-4 p-5">
            {rpdata?.dbPrincipal?.phones.map((phone, index) => {
              return (
                <a
                  key={index}
                  href={`tel:+1${phone.phone}`}
                  className="flex items-center justify-center gap-2 text-[18px] text-black hover:text-sky-600 ease-in-out duration-500 lg:border-gray-400 lg:border-r-2"
                >
                  <ImPhone fontSize={"14px"} />
                  <span>
                    {phone.phone}
                    <span className="pl-2">{phone.name}</span>
                  </span>
                </a>
              );
            })}

            {rpdata?.dbPrincipal?.emails?.map((email, index) => {
              return (
                <li key={index} className={`flex items-center gap-3`}>
                  <a
                    href={`mailto:${email.email}`}
                    className="flex items-center gap-3 ease-in-out duration-500 text-[18px] hover:text-blue-400"
                  >
                    <HiMail />
                    <span>{email.email}</span>
                  </a>
                </li>
              );
            })}
          </div>
        </div>

        <div className="w-full md:w-[40%] bg2 right-chevron p-5 flex flex-wrap md:justify-end items-center">
          <span className="text-white mr-5 font-bold">Follow Us On:</span>
          <ul className="flex justify-end gap-5">
            {rpdata?.dbSocialMedia?.redes.map((item, index) => {
              return (
                <li key={index} className="text-white">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <i className={`fab fa-${item.icon}`} aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {rpdata?.simpleWidgets?.[3]?.activo ? (
        <div className="absolute right-[5%] left-[5%] z-50 pt-10  flex justify-center items-center">
          {/* logo */}
          <div className="w-[70%] md:w-[20%] pr-3 md:pr-0">
            <Link to={"/"}>
              <img
                src={`${rpdata?.dbPrincipal?.logo}`}
                alt="no found"
                className="w-full"
              />
            </Link>
          </div>
        </div>
      ) : (
        <div className="absolute right-[5%] left-[5%] z-10 pt-6 flex justify-between items-center">
          {/* logo */}
          <div className="w-[80%] md:w-[40%] lg:w-[30%] pr-3 md:pr-0">
            <Link to={"/"}>
              <img
                src={`${rpdata?.dbPrincipal?.logo}`}
                alt="no found"
                className="w-full"
              />
            </Link>
          </div>
          {/* nav menu */}
          <nav className="w-[20%] md:w-[80%] flex justify-end">
            <div className="relative hidden md:block">
              <Navmenu classes={'text-white'} />
            </div>
            <div
              className={`md:hidden flex justify-center p-2 rounded-md w-[100px] h-[50px] bg-white`}
              onClick={() => setOpen(true)}
            >
              <GiHamburgerMenu className="w-full h-full " />
            </div>
          </nav>
          {isOpen ? (
            <div className="fixed z-50 top-0 right-0 left-0 bg-white w-full h-screen overflow-y-auto pb-10">
              <div className="flex justify-end w-[90%] mx-auto relative">
                <button
                  className="font-bold text-[20px] mt-5"
                  onClick={() => setOpen(false)}
                >
                  X
                </button>
              </div>
              <div className="w-[60%] mx-auto pb-10">
                <img
                  src={rpdata?.dbPrincipal?.logo}
                  alt="logo"
                  loading="lazy"
                  className="w-full"
                />
              </div>
              <div className="w-4/5 mx-auto ">
                <Navmenu classes="flex-col gap-3" />
              </div>

              <div className="flex flex-col place-items-center pt-20">
                <span className="text-black mr-5 font-bold">Follow Us On:</span>
                <ul className="flex justify-end gap-5">
                  {rpdata?.dbSocialMedia?.redes.map((item, index) => {
                    return (
                      <li key={index} className="text-black">
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i
                            className={`fab fa-${item.icon}`}
                            aria-hidden="true"
                          />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Header_6;
