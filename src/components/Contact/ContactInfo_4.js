import React, { useContext } from 'react'
import { FiPhoneCall, FiMapPin, FiClock } from 'react-icons/fi'
import { GoCalendar } from "react-icons/go";
import { GlobalDataContext } from '../../context/context'
import Form from './Form'
// import { MdEmergency } from 'react-icons/md';


const ContactInfo2 = () => {

    const { rpdata } = useContext(GlobalDataContext)
    return (
        <>

            <div className="  w-full flex justify-center bg-[#ffffff] px-8">
                <div className="flex w-[1100px] lg:py-24 py-14 md:flex-row flex-col text-center md:text-start">
                    <div
                        className="md:w-[10%] w-full md:px-14 px-2 bg1 md:mt-10 md:mb-10"
                    ></div>
                    <div className=" shadow-2xl md:w-[80%] md:flex block w-full md:px-14 py-4 lg:bg-white  bg-transparent lg:px-3 px-0">
                        <div className='md:w-[40%] w-full h-auto flex flex-col bg-white justify-center items-start py-5 lg:py-0 lg:px-2 px-8'>
                            <h2>Get In Touch!</h2>
                            <ul className="pt-5">
                                {rpdata?.dbPrincipal?.location
                                    ?.slice(0, 1)
                                    .map((item, index) => {
                                        return (
                                            <li key={index} className="flex py-2">
                                                <FiMapPin className="bg2 p-2 text-[40px] text-white rounded-md" />
                                                <span className="pl-3 font-bold text-[18px]">{item.address}</span>
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
                                                <FiPhoneCall className="bg2 p-2 text-[40px] text-white rounded-md" />
                                                <span className="pl-3 font-bold text-[18px]">{item.phone}</span>
                                            </a>
                                        </li>
                                    );
                                })}

                                {rpdata?.dbPrincipal?.workdays.length > 1 ? (
                                    <li className="py-2 flex items-center">
                                        <GoCalendar className="bg2 p-2 text-[40px] text-white rounded-md" />
                                        <div className="flex flex-col">
                                            <span className="pl-3 font-bold text-[18px]">
                                                {rpdata?.dbPrincipal?.workdays?.[0].day}
                                            </span>
                                            <span className="pl-3 font-bold text-[18px]">
                                                {rpdata?.dbPrincipal?.workHours?.[0].hour}
                                            </span>
                                        </div>
                                    </li>
                                ) : (
                                    <li className="py-2 flex items-center">
                                        <GoCalendar className="bg2 p-2 text-[40px] text-white rounded-md" />
                                        <span className="pl-3 font-bold text-[18px]">
                                            {rpdata?.dbPrincipal?.workdays?.[0].day}
                                        </span>
                                    </li>
                                )}
                                {rpdata?.dbPrincipal?.workdays.length > 1 ? (
                                    <li className="py-2 flex items-center">
                                        <FiClock className="bg2 p-2 text-[40px] text-white rounded-md" />
                                        <div className="flex flex-col">
                                            <span className="pl-3 font-bold text-[18px]">
                                                {rpdata?.dbPrincipal?.workdays?.[1].day}
                                            </span>
                                            <span className="pl-3 font-bold text-[18px]">
                                                {rpdata?.dbPrincipal?.workHours?.[1].hour}
                                            </span>
                                        </div>
                                    </li>
                                ) : (
                                    <li className="py-2 flex items-center">
                                        <FiClock className="bg2 p-2 text-[40px] text-white rounded-md" />
                                        <span className="pl-3 font-bold text-[18px]">
                                            {" "}
                                            {rpdata?.dbPrincipal?.workHours?.[0].hour}
                                        </span>
                                    </li>
                                )}
                            </ul>
                            <div className="flex flex-col ">
                                {
                                    rpdata?.dbSocialMedia?.redes?.length > 0 ?
                                        <div>
                                            <h5 className='py-5'>Follow Us</h5>
                                            <ul className="flex space-x-7">
                                                {
                                                    rpdata?.dbSocialMedia?.redes.map((item, index) => {
                                                        return (
                                                            <li key={index} className="titleColorFt transition-all ease-in-out duration-300">
                                                                <a href={item.url} target="_blank" rel='noopener noreferrer'>
                                                                    <i
                                                                        className={`fab fa-${item.icon} text-[20px]`}
                                                                        aria-hidden="true"
                                                                    />
                                                                </a>
                                                            </li>
                                                        );
                                                    })
                                                }
                                            </ul>
                                        </div>
                                        : null
                                }
                            </div>
                        </div>
                        <div className='md:w-[60%] w-full h-auto lg:mt-0 mt-5 bg-white lg:p-0 p-5 '>
                            <h2 className='md:hidden block'> Contact Us</h2>
                            <Form />
                        </div>
                    </div>
                    <div
                        className="md:w-[10%] w-full md:px-14 px-2 bg1 mt-10 mb-10"
                    ></div>
                </div>
            </div>
        </>
    )
}

export default ContactInfo2