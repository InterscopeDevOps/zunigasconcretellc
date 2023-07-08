import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { FiTarget } from "react-icons/fi";
import { MdOutlineVisibility } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";

function Values_4() {
  const { rpdata } = useContext(GlobalDataContext);

  const valuesData = [
    {
      title: rpdata?.dbValues?.[0].title,
      description: rpdata?.dbValues?.[0].description,
      icon: (
        <FiTarget fontSize={80} className="bg2 text-white corteromboclip p-6 " />
      ),
    },
    {
      title: rpdata?.dbValues?.[1].title,
      description: rpdata?.dbValues?.[1].description,
      icon: (
        <MdOutlineVisibility
          fontSize={80}
          className="bg2 text-white corteromboclip p-6 "
        />
      ),
    },
    {
      title: rpdata?.dbValues?.[2].title,
      description: rpdata?.dbValues?.[2].description,
      icon: (
        <FaHandshake
          fontSize={80}
          className="bg2 text-white corteromboclip p-6 "
        />
      ),
    },
  ];

  return (
    <div className="w-full py-20" >

      <div className="md:w-2/3 w-full md:text-start text-center mx-auto px-5 md:px-0 py-10">
        <h4 className="font-bold text-[30px] md:text-[40px]">{rpdata?.dbPrincipal?.name}</h4>
        <h5 className="color-2 font-semibold text-[20px] md:text-[25px]">{rpdata?.dbSlogan?.[2].slogan}</h5>
      </div>


      <div className="md:w-4/5 md:mx-auto w-full flex flex-col md:flex-row">

        <div className="md:w-[40%] w-full md:h-auto md:my-0 my-32 h-[200px] md:mt-0 mt-4 flex flex-col relative">
          <div
            className="w-full md:h-[500px] h-[350px] bg-cover bg-center corteromboclip md:block hidden"
            style={{ backgroundImage: `url("${rpdata?.stock?.[4]}")` }}>
          </div>

          <div className="md:block corteromboclip absolute  md:h-[170px] md:w-[170px] h-[90px] w-[90px] bg2 corteromboclip2 md:-right-20 md:top-8 top-[190px] right-2 z-10">
          </div>

          <div className="corteromboclip absolute md:h-[170px] md:w-[170px] h-[100px]  w-[100px] bg-2 corteromboclip2 md:left-[140px] md:bottom-12 left-2 bottom-[80px] z-10">
          </div>

          <div className="md:ml-10 ml-0 md:-mt-6 w-full md:h-auto  md:space-x-10 space-x-0 flex md:flex-row flex-col justify-center items-center">
            <div className="w-auto h-auto">
              <div
                className="w-[200px] h-[200px]  bg-cover bg-center corteromboclip  md:block  hidden -mt-16 "
                style={{ backgroundImage: `url("${rpdata?.stock?.[0]}")` }}
              ></div>
            </div>

            <div className="w-auto h-auto">
              <div
                className="w-[300px] h-[300px] bg-cover bg-center corteromboclip "
                style={{ backgroundImage: `url("${rpdata?.stock?.[7]}")` }}
              ></div>
            </div>
          </div>

        </div>


        <div className="md:w-[60%] my-auto mx-auto">
          {valuesData.map((items, index) => {
            return (
              <div
                key={index}
                className="bg-white w-4/5 mx-auto text-start flex md:flex-row flex-col my-6"
              >
                <div className="flex flex-col justify-center items-center md:p-4 md:text-center text-center md:w-[30%]">
                  {items.icon}
                  <span className="capitalize font-bold">{items.title}</span>
                </div>
                <div className="p-4 border-l-[1px] border-gray-500 md:w-[70%]">
                  <p className="md:text-start">{items.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Values_4;