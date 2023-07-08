import React, { useContext } from 'react';
import { BsArrowReturnRight } from 'react-icons/bs';
import { GlobalDataContext } from '../../context/context';
import { ButtonContent } from '../global/boton/ButtonContent';

import imgDefault from '../../assets/image/placeholder.png'

const Block_8 = ({ title, text, listsAbout, listsServices, image1, image2, image3, sloganPrincipal }) => {
  const { rpdata } = useContext(GlobalDataContext);

  return (
    <div className='py-[150px]'>
      <div className='w-[95%] md:w-[95%] mx-auto'>
        <div className=' flex flex-col-reverse md:flex-row px-1 md:px-10'>
          <div className='w-full md:w-1/2 rounded-md mr-0 -mb-20 mt-5 md:mr-2 md:-my-20 px-5 md:px-10 py-12 flex flex-col justify-center text-center md:text-start' data-aos="zoom-in" data-aos-duration="800">
            {
              sloganPrincipal ?
                rpdata?.dbPrincipal?.licensed ?
                  <h2 className='pb-3 capitalize'>
                    {rpdata?.dbPrincipal?.licensed}
                  </h2>
                  : <h3 className='pb-10 capitalize'>
                    {
                      rpdata?.dbPrincipal?.exprYears ?
                        `we have ${rpdata?.dbPrincipal?.exprYears} years of experience`
                        : 'we have many years of experience'
                    }
                  </h3>
                :
                <h2 className='pb-3 capitalize'>
                  {
                    title ? title :
                      <span className='lowercase text-[18px]'>
                        {`default title={'frase'}`} o
                        {` agregar licencia o años de experienceias sloganPrincipal={true}`}
                      </span>
                  }
                </h2>
            }
            <p className='pb-3'>
              {
                text ? text :
                  <span>{`para agregar el texto -> text={'description'}`}
                    <br />{'para agregar lista de about -> listsAbout={true}'}
                    <br />{'para agregar lista de servicios -> listsServices={true}'}
                  </span>
              }
            </p>
            {
              listsAbout ?
                <ul className='grid grid-cols-1 md:grid-cols-2 pb-5'>
                  {
                    rpdata?.dbAbout?.[0].list.length > 1 ?
                      rpdata?.dbAbout?.[0].list.map((item, index) => {
                        return (

                          <li key={index} className="py-2 flex items-center">
                            <BsArrowReturnRight />
                            <span className="pl-2">{item}</span>
                          </li>
                        )
                      })
                      : null
                  }
                </ul>
                : null
            }
            {
              listsServices ?
                <ul className="grid grid-cols-1 md:grid-cols-2 pb-5">
                  {rpdata?.dbServices?.slice(0, 6).map((item, index) => {
                    return (
                      <li key={index} className="py-1 flex items-center">
                        <BsArrowReturnRight />
                        <span>{item.name}</span>
                      </li>
                    )
                  })}
                </ul>
                : null
            }

            <div>
              <ButtonContent />
            </div>
          </div>
          <div className='w-full h-auto flex flex-row md:w-1/2 space-x-2 ml-0 -mt-20 mb-0 md:ml-2 md:-my-20'>
            <div className='w-[48%] h-[250px] md:h-[430px] md:w-[250px] bg-center bg-no-repeat bg-cover border-[5px] border-white rounded-[10px] shadow-md' data-aos="fade-up" data-aos-duration="800" style={{ backgroundImage: `url("${image1 ? image1 : imgDefault}")` }} ></div>
            <div className=' w-[48%] h-[250px] md:h-[430px] md:w-[250px] bg-center bg-no-repeat bg-cover border-[5px] border-white rounded-[10px] shadow-md md:mt-8 mt-10' data-aos="fade-up" data-aos-duration="900" style={{ backgroundImage: `url("${image2 ? image2 : imgDefault}")` }} ></div>
            <div className='hidden md:block w-[48%] h-[150px] md:h-[430px] md:w-[250px] bg-center bg-no-repeat bg-cover border-[5px] border-white rounded-[10px] shadow-md md:mt-16 mt-10' data-aos="fade-up" data-aos-duration="1000" style={{ backgroundImage: `url("${image3 ? image3 : imgDefault}")` }} ></div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Block_8;