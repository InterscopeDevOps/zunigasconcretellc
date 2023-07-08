import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { NavLink } from "react-router-dom";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const ServicesHome_6 = ({ bgImg, serviceName, serviceText }) => {
  const { rpdata } = useContext(GlobalDataContext);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <article
      className="w-[380px] h-[400px] mx-10 my-5 relative bg-cover bg-center"
      style={{ backgroundImage: `url("${bgImg}")` }}
    >
      <div className="w-full min-h-[80px] h-auto absolute -bottom-5 -left-5 md:-left-10 bg-[#000000ab] p-5 z-[9] text-white">
        <h5 className="text-[20px] leading-[24px] text-white border-b-2">{serviceName}</h5>
        <p className="text-left">{serviceText}</p>

        <NavLink
          to={
            rpdata?.autoGntLandingFromService
              ? `/${serviceName.replaceAll(/[\^*@!"#$%&/()=?¡!¿'\\ ]/g, "-").toLowerCase()}`
              : "/services"
          }
          className="absolute right-0"
          onClick={goToTop}
        >
          <BsArrowUpRightCircleFill className="bg-2 p-1 text-[32px] text-white rounded-full" />
        </NavLink>
      </div>
    </article>
  );
};

export default ServicesHome_6;
