import React, { useContext } from "react";
import {
  MdLocationOn,
  MdLocalPhone,
  MdMail,
  MdArrowRight,
  MdCalendarToday,
  MdPayment,
} from "react-icons/md";
// import {GrEmergency} from 'react-icons/gr'
import { GlobalDataContext } from "../../../context/context";
import IconsRedes from "../IconRedes";
import { Link } from "react-router-dom";
import { IoMdClock } from "react-icons/io";

const Footer_6 = () => {
  const { rpdata } = useContext(GlobalDataContext);

  const yearsActual = new Date();

  const menu = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Services",
      link: "/services",
    },
    {
      name: "Gallery",
      link: "/gallery",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  // agregar la pestaña de reviews al array de dbMenu

  const el = {
    name: `Reviews`,
    link: `/reviews`,
    child: false,
  };

  if (rpdata?.reviews?.activo && rpdata?.reviews?.isHomeOnly === false) {
    const num = menu.length - 1;
    menu.splice(num, 0, el);
  }
  //  fin de agregar pestaña de reviews

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="w-full min-w-[320px] h-auto bg-footer  flex flex-col items-center">
      <section className="w-[90%] md:w-4/5 h-full flex flex-col">
        <section className="flex flex-wrap justify-between p-5 text-white py-10 border-b-[1px] border-[#333333]">
          <article className="flex">
            {rpdata?.dbPrincipal?.location?.slice(0, 1).map((item, index) => {
              return (
                <div key={index} className="flex items-center">
                  <MdLocationOn className="text-[40px] rounded-md titleColorFt" />
                  <div className="flex flex-col">
                    <span className="pl-3 font-extrabold titleColorFt">Find Us</span>
                    <span className="pl-3">{item.address}</span>
                  </div>
                </div>
              );
            })}
          </article>
          <article className="flex items-center flex-wrap">
            {rpdata?.dbPrincipal?.phones?.map((item, index) => {
              return (
                <div key={index} className="flex items-center">
                  <a
                    href={`tel:+1${item.phone}`}
                    className="py-2 flex items-center"
                  >
                    <MdLocalPhone className="text-[40px] titleColorFt" />
                    <div className="flex flex-col">
                      <span className="pl-2 font-extrabold titleColorFt ">Call Us</span>
                      <span className="pl-2">{item.phone}</span>
                    </div>
                  </a>
                </div>
              );
            })}
          </article>
          <article className="flex items-center flex-wrap">
            { rpdata?.dbPrincipal?.emails[0].email !== "" ?
            rpdata?.dbPrincipal?.emails?.map((item, index) => {
              return (
                <div key={index} className="flex items-center">
                  <a
                    href={`mailto:${item.email}`}
                    className="py-2 flex items-center"
                  >
                    <MdMail className="text-[30px] md:text-[40px] titleColorFt" />
                    <div className="flex flex-col">
                      <span className="pl-3 font-extrabold titleColorFt">Mail Us</span>
                      <span className="pl-3"> {item.email}</span>
                    </div>
                  </a>
                </div>
              );
              })
              :null
          }
          </article>
        </section>
        <section className="w-full flex flex-col md:flex-row flex-wrap md:justify-between md:gap-5 items-center text-center lg:items-start text-white p-2">
          <section className="flex w-4/5 md:w-3/5 lg:w-1/3 flex-col lg:text-justify items-center lg:items-start">
            <div className="w-[300px] ">
              <img
                src={rpdata?.dbPrincipal?.logo}
                className="w-full"
                alt="photo_logo_company"
              />
            </div>
            <div className="mx-auto">{rpdata?.dbAbout?.[1].text.substring(0,140)}</div>
            <section className="pt-10 font-extrabold">
              <span>Follow Us</span>
              <IconsRedes classes={"flex justify-center items-center gap-5"} />
            </section>
          </section>

          <section>
            {rpdata?.simpleWidgets?.[3]?.activo ? null : (
              <div className="pt-10">
                <h5 className="titleColorFt">Navigation</h5>
                <ul className="pl-2">
                  {menu.map((item, index) => {
                    return (
                      <li className="py-2" onClick={goToTop} key={index}>
                        <Link to={item.link} className="flex">
                          <MdArrowRight className="self-center" />
                          <span className="pl-2">{item.name}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </section>

          <section className="pt-10">
            {" "}
            {/*services*/}
            <h5 className="titleColorFt">Services</h5>
            <ul className="">
              {rpdata?.dbServices?.slice(0, 6).map((item, index) =>
                rpdata?.simpleWidgets?.[3]?.activo ? (
                  <li className="py-2 text-start" onClick={goToTop} key={index}>
                    <a
                      href={`tel:+1${rpdata?.dbPrincipal?.phones?.[0]?.phone}`}
                      className="flex"
                    >
                      <MdArrowRight className="self-center" />
                      <span className="pl-2 text-start">{item.name}</span>
                    </a>
                  </li>
                ) : (
                  <li className="py-2" onClick={goToTop} key={index}>
                    <Link  to='/services' className="flex">
                      {/* to={`/${item.name.replaceAll(/[\^*@!"#$%&/()=?¡!¿'\\ ]/g, "-").toLowerCase()}`} */}
                      <MdArrowRight className="self-center" />
                      <span className="pl-2 text-start">{item.name}</span>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </section>

          <section className="pt-10">
            {/*workdays*/}
            <div>
              <h5 className="titleColorFt">Opening Time</h5>
              {rpdata?.dbPrincipal?.workdays.map((item, index) => {
                return (
                  <li key={index} className="py-2 flex items-center justify-center ">
                    <div className="flex flex-col ">
                      <div className="flex items-center">
                        <MdCalendarToday size={20} />
                        <span className="pl-3">{item.day}</span>
                      </div>
                      <div className="flex items-center">
                        <IoMdClock size={20} />
                        <span className="pl-3">
                          {rpdata?.dbPrincipal?.workHours[index].hour}
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
              {/* <li className="flex items-center justify-center">
              <GrEmergency size={20}/>
                <span className="pl-3">{rpdata?.dbSlogan?.[10].slogan}</span>
              </li> */}
            </div>
            <div className="pt-2 flex flex-col items-center pb-5 w-[300px]">
              <h5 className="titleColorFt">Payment Methods</h5>
              <div className="flex items-center">
                <MdPayment size={20} />
                <span className="pl-3 ">
                  {rpdata?.dbPrincipal?.paymentMethod}
                </span>
              </div>
              {rpdata?.tiposPago?.[0]?.activo ? (
                <div className="w-full flex justify-center">
                  <img
                    src={rpdata?.tiposPago?.[0]?.img}
                    width={"80%"}
                    alt="no found"
                  />
                </div>
              ) : null}
            </div>
          </section>
        </section>
      </section>
      <section className="text-white p-3 font-bold text-center bg1 w-full">
        <p>
          {" "}
          ©{yearsActual.getFullYear()}, Copyright By {rpdata?.dbPrincipal?.name}
          . All Rights Reserved{" "}
        </p>
      </section>
    </footer>
  );
};

export default Footer_6;
