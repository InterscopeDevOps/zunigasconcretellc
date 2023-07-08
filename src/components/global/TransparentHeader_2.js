import React from "react";

const TransparentHeader2 = ({ headertitle, bgimg }) => {
    return (
        <div className="w-full px-10 lg:px-20 pt-56 lg:pt40 pb-12 h-auto bg-grand lg:flex block ">
            <div className="mx-auto flex lg:justify-start justify-center items-center lg:w-[50%] w-full lg:pb-0 pb-8">
                <h1 className="textH1 lg:text-start text-center">{headertitle}</h1>
            </div>
            <div className="mx-auto flex justify-center items-center lg:w-[50%] w-full">
                <div className="lg:w-[500px] lg:h-[500px] w-[300px] h-[300px] rounded-full border-[10px] border-white shadow-2xl" style={{ backgroundImage: `url("${bgimg}")`, backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"Cover" }}></div>
            </div>

        </div>
    );
};

export default TransparentHeader2;