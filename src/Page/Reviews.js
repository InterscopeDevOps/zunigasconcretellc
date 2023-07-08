import React, { useState, useContext } from "react";
import { GlobalDataContext } from "../context/context";
import TransparentHeader from "../components/global/TransparentHeader";
import BaseLayout from "../components/global/BaseLayout";
import ContentReviews from "../components/reviews/ContentReviews";
import LoadingSpinner from "../components/global/Loader";
import { BiLogInCircle } from "react-icons/bi";
import UserTag from "../components/reviews/userReview";
import { useSigninCheck } from "reactfire";
import ModalRegister from "../components/reviews/ModalRegister";

function Reviews() {
  const { rpdata } = useContext(GlobalDataContext);
  const [modalRegister, setModalRegister] = useState(false);

  const { status, data: signinResult } = useSigninCheck();
  if (status === "loading") {
    return <LoadingSpinner />;
  }
  const { signedIn, user } = signinResult;

  return (
    <BaseLayout PageName="Reviews">
      <div className="md:max-w-full w-full">
        <TransparentHeader
          headertitle="Reviews"
          Subheader="Reviews"
          bgimg={`${rpdata?.stock?.[0]}`}
        />
      </div>
      <div className="w-[90%] md:w-4/5 mx-auto py-[100px]">
        <h1 className="text-center pb-4">
          {rpdata?.labels?.general?.titleReviews}
        </h1>
        {
          // activar tab encuentranos
          rpdata?.simpleWidgets?.[4]?.activo ?
            <>
              <div className="w-full flex md:flex-col justify-between self-center items-center my-4">
                {signedIn !== true ? (
                  <div className="flex flex-col md:flex-row justify-center items-center md:justify-between w-full">
                    <span className="text-[30px] font-bold mx-3 text-center color-2">
                      Leave Us a Review!
                    </span>
                    <button
                      className="bg-white bg-btn text--slate-900 duration-300 ease-in-out hover:text-white  rounded-full px-5 py-2 w-[250px] flex items-center justify-center"
                      onClick={() => setModalRegister(true)}
                    >
                      <span className="px-2 text-[20px] font-bold text-white">
                        Write A Review
                      </span>
                      <BiLogInCircle className="text-[22px] font-bold text-white" />
                    </button>
                  </div>
                ) : (
                  <UserTag id={user.uid} />
                )}
              </div>
              <ContentReviews />
            </>
            : null
        }
        {/* reviews del link de elfsight  */}
        <div className={`${rpdata?.reviews?.links?.[0]} mt-10`}></div>

      </div>
      {modalRegister ? (
        <ModalRegister
          isModalLogout={modalRegister}
          onClose={() => setModalRegister(false)}
        />
      ) : null}
    </BaseLayout>
  );
}

export default Reviews;
