import React, {useContext} from "react";
import { GlobalDataContext } from '../../context/context';
import imgDefault from "../../assets/image/placeholder.png"

const Block_12 = ({image,slogan,text}) => {

    const { rpdata } = useContext(GlobalDataContext);

    return(
        <section className="w-full min-h-screen h-auto relative flex flex-col lg:flex-row my-20">
            <section className="w-full lg:w-[55%] h-auto relative bg-cover bg-center"
            style={{ backgroundImage: `url("${image ? image : imgDefault}")` }}
            > 
            <div className="absolute w-[180px] lg:w-[200px] z-10 -bottom-16 right-[25%] md:right-[35%] lg:bottom-[75%] lg:-right-24"
            >
                <img
                src={rpdata?.dbPrincipal?.logo}
                alt="photo_logo"
                className="w-full bg-white rounded-md"
                />
            </div>
                <div className="w-full h-full bg-[#00000077] text-white p-5  pb-20 flex items-center justify-center lg:justify-start text-center">
                    <h3>{slogan}</h3>
                </div>
            </section>
            <section className="w-full lg:w-[45%] h-auto py-20 bg2 flex items-center justify-end text-justify text-white">
                <div className="w-4/5 lg:p-10 mx-auto"> 
                    {text}
                </div>
            </section>
        </section>
    )

}

export default Block_12