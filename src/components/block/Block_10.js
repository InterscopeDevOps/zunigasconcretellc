import React,{useContext} from "react";
import { GlobalDataContext } from '../../context/context';
import { ButtonContent } from '../global/boton/ButtonContent';
import imgDefault from "../../assets/image/placeholder.png"
import { BsArrowReturnRight } from 'react-icons/bs';

const Block_10 = ({image,sloganPrincipal,title,text,listsAbout,listsServices}) => {

    const { rpdata } = useContext(GlobalDataContext);

    return(
        <section className="w-full min-h-[95vh] relative h-auto bg-cover bg-no-repeat bg-right flex flex-col lg:flex-row-reverse py-20">

            <div className="right-chevron w-full lg:w-[50%] min-h-[500px] bg-cover bg-center bg-no-repeat "
                    style={{ backgroundImage: `url("${image ? image : imgDefault}")` }}></div>

            <div className=" w-full min-h-[90vh] h-auto lg:w-[90%] bg2 right-point text-white p-5 -mt-72 md:-mt-48 lg:mt-0 mx-auto lg:mx-0">
                    <section className="w-4/5 mx-auto lg:mx-0 h-auto lg:pt-20 pt-48">
                    {
                            sloganPrincipal ?
                                rpdata?.dbPrincipal?.licensed ?
                                    <h2 className='pb-3 capitalize'>
                                        {rpdata?.dbPrincipal?.licensed}
                                    </h2>
                                    : <h3 className='pb-10 capitalize text-center'>
                                        {
                                            rpdata?.dbPrincipal?.exprYears ?
                                                `we have ${rpdata?.dbPrincipal?.exprYears} years of experience`
                                                : 'we have many years of experience'
                                        }
                                    </h3>
                                :
                                <h2 className='pb-3 capitalize '>
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
                        <ButtonContent/>
                    </section>
            </div>
        </section>
    )
}

export default Block_10