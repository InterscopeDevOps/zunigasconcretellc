import React, { useContext } from 'react'
import { GlobalDataContext } from "../../context/context";
// import { ButtonContent } from '../global/boton/ButtonContent';

const SlideLogoForm = ({ image, text }) => {
    const { rpdata } = useContext(GlobalDataContext);
    return (
        <div className='bgCountent relative w-full min-h-[800px] h-[900px] md:h-[800px] ' style={{ backgroundImage: `url("${image ? image : rpdata?.gallery?.[1]}")` }}>
            <div className='absolute w-full h-auto'>
                <div className='w-4/5 mx-auto flex flex-col justify-center text-center z-50 space-y-4'>
                    <div className="w-[80%] md:w-[30%] flex justify-center mx-auto">
                        <img
                            src={rpdata?.dbPrincipal?.logo}
                            alt="CompanyLogo"
                            className="w-full flex"
                        />
                    </div>
                    <div className='text-white text-center'>
                        {/* <p>
                            {
                                rpdata?.dbValues?.[1]?.description
                            }     
                        </p> */}
                        <p className='pb-3'>
                            {
                                text ? text :
                                    <span>{`para agregar el texto -> text={'description'}`}
                                        <br />{'para agregar lista de about -> listsAbout={true}'}
                                        <br />{'para agregar lista de servicios -> listsServices={true}'}
                                    </span>
                            }
                        </p>
                    </div>

                    <div >
                        <a className='py-5 px-10 bg-[#E6891D] text-white rounded-lg'
                        href='https://clienthub.getjobber.com/client_hubs/11807508-54bc-42a3-a126-fc7f627aa125/login/new?source=share_login'
                        target='_blank'
                        rel='noreferrer'
                        >
                            Go
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SlideLogoForm;
