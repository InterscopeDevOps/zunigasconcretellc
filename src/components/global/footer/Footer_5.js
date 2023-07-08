import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalDataContext } from "../../../context/context";
import { FaCreditCard, FaArrowRight } from "react-icons/fa";
import { FiInfo } from "react-icons/fi"
import { MdOutlineContactPage } from "react-icons/md"
import { FiPhoneCall, FiMapPin, FiClock, FiMail } from "react-icons/fi";
import { GoCalendar } from "react-icons/go";

function Footer4() {
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
    rpdata?.simpleWidgets?.forEach((element) => {
        const num = menu.length - 1;
        if (element.val === "ReviewTab" && element.activo === true) {
            menu.splice(num, 0, el);
        }
    });
    //  fin de agregar pestaña de reviews

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            <div className="w-full flex flex-col justify-center bg-gray-400 bg-opacity-5 p-8 py-14 bg-footer text-white">
                <div className="md:w-3/4 mx-auto text-center flex justify-center mb-4 md:flex-row flex-col-reverse">
                    <div className="w-full md:w-[27%] h-0 text-start self-center border border-white"></div>
                    <div className="md:w-[46%] grid place-content-center py-6  ">
                        <img
                            src={rpdata?.dbPrincipal?.logo}
                            className="md:w-[400px] w-[280px] object-cover mx-auto"
                            alt="Frank Fence & Construction"
                            loading="lazy"
                        />
                    </div>
                    <div className="w-full md:w-[27%] h-0 text-start self-center border border-white"></div>
                </div>
                <div className="flex justify-center py-10">
                    <ul className="flex flex-col md:flex-row gap-5">
                        {menu.map((item, index) => {
                            return (
                                <li className="mx-3" onClick={goToTop} key={index}>
                                    <Link to={item.link} className="flex gap-1">
                                        <FaArrowRight className="self-center bg1 p-2 text-[30px] rounded-md" />
                                        <span className="pl-2">{item.name}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="w-4/5 mx-auto justify-center md:flex block h-full">
                    <div className="lg:w-1/3 w-full  block px-0 lg:px-5 py-3 text-center place-content-center lg:border-white lg:border-r-2">
                        <div className="flex justify-center mx-auto py-2">
                            <MdOutlineContactPage className="self-center bg1 p-2 text-[45px] rounded-md" />
                        </div>
                        <span className="text-[25px] font-bold">Contact</span>
                        <ul className="grid place-items-center space-y-3">
                            {rpdata?.dbPrincipal?.location
                                ?.slice(0, 1)
                                .map((item, index) => {
                                    return (
                                        <li className="flex pt-2" key={index}>
                                            <FiMapPin className="text-[25px] rounded-md" />
                                            <span className="pl-3">{item.address}</span>
                                        </li>
                                    );
                                })}
                            {rpdata?.dbPrincipal?.phones?.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a
                                            href={`tel:+1${item.phone}`}
                                            className="py-2 flex items-center"
                                        >
                                            <FiPhoneCall className="text-[25px]" />
                                            <span className="pl-3">{item.phone}</span>
                                        </a>
                                    </li>
                                );
                            })}

                            {rpdata?.dbPrincipal?.emails?.[0].email.length > 0 ? (
                                <li>
                                    <a
                                        href={`mailto:${rpdata?.dbPrincipal?.emails[0].email}`}
                                        className="py-2 flex items-center"
                                    >
                                        <FiMail className="text-[25px]" />
                                        <span className="pl-3">
                                            {rpdata?.dbPrincipal?.emails[0].email}
                                        </span>
                                    </a>
                                </li>
                            ) : null}
                            <li className="py-2 flex items-center">
                                <FaCreditCard className="text-[25px]" />
                                <span className="pl-1 capitalize">
                                    {rpdata?.dbPrincipal?.paymentMethod}
                                </span>
                            </li>
                            {rpdata?.tiposPago?.[0]?.activo ? (
                                <li>
                                    <img
                                        src={rpdata?.tiposPago?.[0]?.img}
                                        width={"80%"}
                                        alt="no found"
                                    />
                                </li>
                            ) : null}
                        </ul>
                    </div>
                    <div className="lg:w-1/3 w-full block px-3 lg:px-6 py-3 text-center place-content-center lg:border-white lg:border-r-2">
                        <div className="flex justify-center mx-auto py-2">
                            <FiInfo className="self-center bg1 p-2 text-[45px] rounded-md" />
                        </div>
                        <span className="text-[25px] font-bold">About</span>
                        <p className="pb-4">
                            {
                                rpdata?.simpleWidgets?.[3]?.activo ?
                                    rpdata?.dbAbout?.[1].text
                                    :
                                    rpdata?.dbAbout?.[1].text.substring(0, 216)
                            }
                        </p>
                    </div>
                    <div className="lg:w-1/3 w-full block px-5 py-3 text-center place-content-center">
                        <div className="flex justify-center mx-auto py-2">
                            <MdOutlineContactPage className="self-center bg1 p-2 text-[45px] rounded-md" />
                        </div>
                        <span className="text-[25px] font-bold">Opening Time</span>
                        <ul className="pl-2 grid place-items-center">
                            <h6 className="font-bold">Days Of Work</h6>
                            {rpdata?.dbPrincipal?.workdays.length > 1 ? (
                                <li className="py-2 flex items-center">
                                    <GoCalendar className="text-[25px]" />
                                    <div className="flex flex-col">
                                        <span className="pl-3">
                                            {rpdata?.dbPrincipal?.workdays?.[0].day}
                                        </span>
                                        <span className="pl-3">
                                            {rpdata?.dbPrincipal?.workHours?.[0].hour}
                                        </span>
                                    </div>
                                </li>
                            ) : (
                                <li className="py-2 flex items-center">
                                    <GoCalendar className="text-[25px]" />
                                    <span className="pl-3">
                                        {rpdata?.dbPrincipal?.workdays?.[0].day}
                                    </span>
                                </li>
                            )}

                        </ul>
                        <ul className="pl-2 grid place-items-center py-3">
                            <h6 className="font-bold">Working Hours</h6>
                            {rpdata?.dbPrincipal?.workdays.length > 1 ? (
                                <li className="py-2 flex items-center">
                                    <FiClock className="text-[25px]" />
                                    <div className="flex flex-col">
                                        <span className="pl-3">
                                            {rpdata?.dbPrincipal?.workdays?.[1].day}
                                        </span>
                                        <span className="pl-3">
                                            {rpdata?.dbPrincipal?.workHours?.[1].hour}
                                        </span>
                                    </div>
                                </li>
                            ) : (

                                <li className="py-2 flex items-center">
                                    <FiClock className="text-[25px]" />
                                    <span className="pl-3">
                                        {" "}
                                        {rpdata?.dbPrincipal?.workHours?.[0].hour}
                                    </span>
                                </li>
                            )}

                        </ul>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-around md:flex-row items-center flex-col-reverse text-center text-white  py-4 bg2">
                <p className="text-[20px]">
                    ©{yearsActual.getFullYear()}, Copyright By {rpdata?.dbPrincipal?.name}. All Rights Reserved
                </p>
                <ul className="flex">
                    {rpdata?.dbSocialMedia?.redes.map((item, index) => {
                        return (
                            <li key={index} className="mr-7">
                                <a
                                    href={item.url}
                                    alt={item.name}
                                    aria-label={item.name}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className={`fab fa-${item.icon}`} aria-hidden="true" />
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}

export default Footer4;
