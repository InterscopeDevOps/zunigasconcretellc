import React, { useContext, useState } from "react";
import { GlobalDataContext } from "../../../context/context";
import { MdLocalPhone, MdMail,MdCalendarToday } from "react-icons/md";
import Navmenu from "../MenuList";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClock } from "react-icons/io";
import IconsRedes from "../IconRedes";

const Header_7 = () => {
  const { rpdata } = useContext(GlobalDataContext);
  const [isOpen, setOpen] = useState(false);
  return (
    <header className=" w-full min-h-[200px] max-h-[280px] flex justify-start items-center relative borderBottomSecondaryColor">
      <section className="w-[90%] h-full flex justify-between items-center  p-10">
        <div className="w-full md:w-[50%] lg:w-[50%] p-1 lg:p-10">
          <img
            src={rpdata?.dbPrincipal?.logo}
            alt="photo_logo_company"
            className="w-full p-1 lg:p-14"
          />
        </div>
        <nav className="w-[20%] md:w-[80%] flex justify-end">
          <div className="relative hidden md:block">
            <Navmenu classes={'text-black'} />
          </div>
          <div
            className='md:hidden flex justify-center py-1 rounded-md w-[100px] h-[40px] bg-white'
            onClick={() => setOpen(true)}
          >
            <GiHamburgerMenu className="w-full h-full" />
          </div>
        </nav>
      </section>

      <section className="absolute w-full md:pl-14 flex items-center justify-end pr-5 md:w-[70%] min-h-[40px] h-auto p-1 text-white paralelografo-inverso bg1 top-0 z-20 right-0">

        {rpdata?.dbPrincipal?.workdays.slice(0,1).map((item, index) => {
          return (
            <li key={index} className="py-2 items-center justify-center border-r-2 hidden lg:flex">
              <div className="flex">
                <div className="flex items-center pr-5">
                  <MdCalendarToday size={20} />
                  <span className="pl-3">{item.day}</span>
                </div>
                <div className="flex items-center pr-5">
                  <IoMdClock size={20} />
                  <span className="pl-3">
                    {rpdata?.dbPrincipal?.workHours[index].hour}
                  </span>
                </div>
              </div>
            </li>
          );
        })}

        <span className="mx-5 font-medium">Follow Us On:</span>
        <div>
        <IconsRedes classes="flex justify-between gap-5"/>
        </div>
      </section>

      <section className="absolute flex justify-start w-full md:w-[70%] h-[80px] paralelografo bg1 -bottom-10 z-10 right-0">
        <section className="flex gap-5 pl-5 md:pl-28 text-white">
          {rpdata?.dbPrincipal?.phones?.map((item, index) => {
            return (
              <div key={index} className="flex items-center">
                <a
                  href={`tel:+1${item.phone}`}
                  className="py-2 flex items-center"
                >
                  <MdLocalPhone className="text-[40px]" />
                  <div className="flex flex-col">
                    <span className="pl-3 font-extrabold">Call Us</span>
                    <span className="pl-3">{item.phone}</span>
                  </div>
                </a>
              </div>
            );
          })}

          { rpdata?.dbPrincipal?.emails[0].email !== "" ?
          rpdata?.dbPrincipal?.emails?.map((item, index) => {
            return (
              <div key={index} className="lg:flex items-center hidden">
                <a
                  href={`mailto:${item.email}`}
                  className="py-2 flex items-center"
                >
                  <MdMail className="text-[40px]" />
                  <div className="flex flex-col">
                    <span className="pl-3 font-extrabold">Mail Us</span>
                    <span className="pl-3"> {item.email}</span>
                  </div>
                </a>
              </div>
            );
          })
          :null
          }
        </section>
      </section>

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

            <div className="flex flex-col items-center mt-28">
              <span className="font-bold">Follow Us On:</span>
            <IconsRedes classes="flex justify-center gap-5 text-black"/>
            </div>
        </div>
      ) : null}
    </header>
  );
};

export default Header_7;
