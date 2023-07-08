import React, { useContext } from "react";
import { GlobalDataContext } from "../../../context/context";

function QrContent({ stateQr, closeBtn }) {

    const { rpdata } = useContext(GlobalDataContext);

    if (!stateQr) return null

    return (

        <div
            className='fixed z-50 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
        >
            <div className='w-auto flex flex-col'>

                <button
                    className='text-white text-[30px] place-self-end'
                    onClick={() => closeBtn()}
                >
                    X
                </button>
                <div className="flex justify-center p-2 rounded">
                    <img
                        src={rpdata?.qrImg}
                        alt="qr images"
                        className="rounded-lg"
                    />
                </div>
            </div>

        </div>
    );

}

export default QrContent;