import React,{useContext} from "react";
import imgDefault from "../../assets/image/placeholder.png"
import { BsArrowReturnRight } from 'react-icons/bs';
import { GlobalDataContext } from '../../context/context';
import { ButtonContent } from '../global/boton/ButtonContent';

const Block_11 = ({image,sloganPrincipal,title,text,listsAbout,listsServices}) =>{

    const { rpdata } = useContext(GlobalDataContext);
    return(
        <section className="w-full relative min-h-screen h-auto my-20  bg-cover bg-no-repeat bg-center flex justify-end"
        style={{ backgroundImage: `url("${image ? image : imgDefault}")` }}>

            <section className="absolute -top-10 bg-[#000000ab] p-5 left-5 md:left-40 z-20 text-white">
                <h3>A Little About Us</h3>
            </section>
        
            <section className="w-full lg:w-[60%] min-h-screen trapecio bg-[#000000ab] lg:text-right pt-20 p-10 text-white">
                <section className="w-full md:w-[85%] h-auto mx-auto lg:mr-4">
                {
                            sloganPrincipal ?
                                rpdata?.dbPrincipal?.licensed ?
                                    <h2 className='p-3 capitalize'>
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
                                <h3 className='pb-3 capitalize text-[#D09845]'>
                                    {
                                        title ? title :
                                            <span className='lowercase text-[18px]'>
                                                {`default title={'frase'}`} o
                                                {` agregar licencia o años de experienceias sloganPrincipal={true}`}
                                            </span>
                                    }
                                </h3>
                        }
                        <p className='p-3'>
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
                       
                            <ButtonContent/>
                      
                        
                </section>
            </section>

        </section>
    )
}

export default Block_11