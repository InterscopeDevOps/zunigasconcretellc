import React, { useContext } from 'react';
import { GlobalDataContext } from '../../context/context';
import imgDefault from '../../assets/image/placeholder.png';



const Values_3 = ({ title, text, listsAbout, listsServices, image1, image2, sloganPrincipal }) => {
    const { rpdata } = useContext(GlobalDataContext);

    return (
        <section className='bg-grand2 relative h-auto w-full flex  flex-wrap flex-col lg:flex-row justify-center items-center content-center lg:justify-evenly md:py-[80px] py-[180px] '>
            <div data-aos="fade-right" className='mb-[50px]'>
                <div className='w-[80%] max-w-[400px] min-w-[300px] max-h-[300px] min-h-[150px] text-left mb-[30px] mx-auto '>
                    <h4 className='font-bold text-white'>
                        {rpdata?.dbValues?.[0].title}
                    </h4>
                    <p className='text-white'>
                        {rpdata?.dbValues?.[0].description}
                    </p>
                </div>

            </div>
            <div data-aos="fade-left" className='rounded-md relative w-[80%] max-w-[400px] h-[300px] mb-[230px] justify-self-center bg-center bg-cover' style={{ backgroundImage: `url("${image1 ? image1 : imgDefault}")`, backgroundPosition: `center` }}>
                <div className='absolute -bottom-[200px] borderColor border-b-[8px] shadow-lg bg-[white] z-10 w-[80%] h-auto text-center p-5' style={{ right: "calc(10%)" }}>
                    <h4 className='font-bold'>
                        {rpdata?.dbValues?.[1].title}
                    </h4>
                    <p>
                        {rpdata?.dbValues?.[1].description}
                    </p>
                </div>
            </div>
            <div data-aos="fade-left" className='rounded-md relative w-[80%] max-w-[400px] h-[300px] object-cover self-center lg:self-start bg-center bg-cover' style={{ backgroundImage: `url("${image2 ? image2 : imgDefault}")`, backgroundPosition: `center` }}>
                <div className='absolute -bottom-[250px] borderColor border-b-[8px] shadow-lg bg-[white] z-10 w-[80%] h-auto my-[50px] text-center p-5' style={{ right: "calc(10%)" }}>
                    <h4 className='font-bold'>
                        {rpdata?.dbValues?.[2].title}
                    </h4>
                    <p>
                        {rpdata?.dbValues?.[2].description}
                    </p>
                </div>
            </div>

        </section>

    )

}

export default Values_3;