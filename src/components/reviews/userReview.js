import React, { useState, useContext } from "react";
import {
  useFirestore,
  useFirestoreDocData,
  useAuth,
  useFunctions,
} from "reactfire";
// import { useNavigate } from "react-router-dom";
import { doc } from "firebase/firestore";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";
import Logout from "./Logout/Logout";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { Field, Formik, Form } from "formik";
import { ReviewSchema } from "./validationSchemas";
import { httpsCallable } from "firebase/functions";
import { FaArrowRight, FaStar } from "react-icons/fa";

//Data From React Pages
import { GlobalDataContext } from "../../context/context";

const UserTag = ({ id }) => {
  const functions = useFunctions();

  let navigate = useNavigate();
  let firebase = useFirestore();
  const auth = useAuth();

  const insertReview = httpsCallable(functions, "insertReview");

  //Data Page
  const { rpdata } = useContext(GlobalDataContext);

  //Stars
  const [currentValue, setCurrentValue] = useState(5);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const signOut = (auth) =>
    auth.signOut().then(() => {
      navigate("/");
    });

  const ref = doc(firebase, "Users", id);

  const { status, data: userData } = useFirestoreDocData(ref, {
    idField: "id",
  });

  if (status === "loading") {
    <LoadingSpinner />;
  }
  // console.log(userData)
  if (userData) {
    if (userData.active === false) {
      // console.log("deactivated")
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `User has been disabled.`,
        footer:
          '<a href="tel:+1718-585-5400">Contact Us To Solve Your Problem?</a>',
        confirmButtonColor: "#f98c1d",
      });
      signOut(auth);
    }
  }

  // estado del modal order
  const [showModalLogout, setShowModalLogout] = useState(false);

  // const handleModalLogout = () => {
  //   return setShowModalLogout(!showModalLogout);
  // };

  const onSubmit = async (values) => {
    const review = {
      CompanyName: userData.companyName,
      ReviewBody: values.ReviewBody,
      ReviewsStars: currentValue,
      ReviewTitle: values.ReviewTitle,
      ClientName: userData.clientName,
      ClientEmail: userData.email,
      ClientPhone: userData.clientPhone,
      PageId: userData.pageId,
      Date: new Date().toString(),
    };

    const remoteInsert = await insertReview({
      newReview: review,
    });

    console.log(remoteInsert.data);

    // Desloguear al usuario luego de enviar la review, esperar a que envie la review

    signOut(auth);
  };

  return (
    <>
      {showModalLogout === true ? (
        <Logout
          isModalLogout={showModalLogout}
          onClose={() => setShowModalLogout(false)}
        />
      ) : null}

      <div className="flex md:flex-row flex-col-reverse md:my-4 my-4 md:w-[94%] mx-auto">
        {/* <button onClick={handleModalLogout}> logout</button> */}
        <div className="md:w-[50%] w-full py-10 px-4 border-2 border-gray-200 rounded-2xl md:m-4">
          <Formik
            initialValues={{
              ReviewsStars: 1,
              ReviewTitle: "",
              ReviewBody: "",
            }}
            validationSchema={ReviewSchema}
            onSubmit={async (values, actions) => {
              console.log(values);
              await onSubmit(values);
              actions.resetForm();
              //mostrar un sweet alert de confirmación
              Swal.fire({
                icon: "success",
                title: "Review Sent",
                text: `Thank you for your review.`,
                confirmButtonColor: "#f98c1d",
              });
              window.location.reload();
            }}
          >
            {({ errors, touched, handleBlur, handleChange }) => (
              <Form className="flex flex-col">
                <div className="flex flex-col">
                  <label
                    htmlFor="ReviewsStars"
                    className="text-[18px] font-bold my-2"
                  >
                    Name:{" "}
                    <span className="color-2 px-2">
                      {userData !== undefined ? userData.clientName : "LOADING"}
                    </span>
                  </label>
                  <label
                    htmlFor="ReviewsStars"
                    className="text-[14px] font-bold capitalize"
                  >
                    your overall raiting
                  </label>

                  <div
                    type="text"
                    name="ReviewsStars"
                    id="ReviewsStars"
                    className="p-2 flex mb-5"
                  >
                    {/* Tomar como opción las estrellas */}

                    {stars.map((_, index) => {
                      const ratingValue = index + 1;
                      return (
                        <FaStar
                          key={index}
                          value={ratingValue}
                          onClick={() => handleClick(ratingValue)}
                          onMouseOver={() => handleMouseOver(ratingValue)}
                          onMouseLeave={handleMouseLeave}
                          className="cursor-pointer border-1 stroke-neutral-700 w-6 h-6 "
                          size={20}
                          color={
                            ratingValue <= (hoverValue || currentValue)
                              ? "#ffc107"
                              : "#e4e5e9"
                          }
                        />
                      );
                    })}
                  </div>
                  {errors.ReviewsStars && touched.ReviewsStars ? (
                    <div className="text-red-500 font-bold">
                      {errors.ReviewsStars}
                    </div>
                  ) : null}
                </div>

                <div className="flex flex-col mb-5">
                  <label
                    htmlFor="ReviewTitle"
                    className="text-[14px] font-bold capitalize mb-5"
                  >
                    title of your review
                  </label>
                  <div className="inputBox">
                    <Field
                      type="text"
                      name="ReviewTitle"
                      id="ReviewTitle"
                      required
                    // placeholder="Summarize your review or highlight an interesting detail"
                    // className="border border-gray-300 rounded-md p-2 my-4"
                    />
                    <span>summarize yout review or highilight and interesting detail</span>
                    {errors.ReviewTitle && touched.ReviewTitle ? (
                      <div className="text-red-500 text-[12px]  font-bold">
                        {errors.ReviewTitle}
                      </div>
                    ) : null}

                  </div>
                </div>

                <div className="flex flex-col mb-5">
                  <label htmlFor="ReviewBody" className="text-[14px] font-bold capitalize mb-5 ">
                    your review
                  </label>
                  <div className="inputBox">
                    <Field
                      as="textarea"
                      rows="5"
                      name="ReviewBody"
                      id="ReviewBody"
                      required
                    // placeholder="Tell people your review"
                    // className="border border-gray-300 rounded-md p-2 my-4"
                    />
                    <span>tell people your review</span>
                    {errors.ReviewBody && touched.ReviewBody ? (
                      <div className="text-red-500 text-[12px]  font-bold">
                        {errors.ReviewBody}
                      </div>
                    ) : null}

                  </div>
                </div>

                <div className="flex justify-start">
                  <button
                    type="submit"
                    className="flex self-center items-center  text-white bg-btn ease-in-out duration-300 py-2 px-5 rounded-full capitalize"
                  >
                    <span className="text-[18px] flex self-center items-center font-bold">
                      Send Review <FaArrowRight className="mx-2 text-[18px]" />
                    </span>
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="md:w-[45%] w-full flex self-center md:my-1 my-4 ml-0 md:ml-auto">
          <div
            style={{ backgroundImage: `url("${rpdata?.stock?.[0]}")` }}
            className="bg-cover bg-center bg-no-repeat md:h-[500px] h-[300px] w-full relative reviews-area before:rounded-2xl rounded-2xl"
          >
            <div className="flex md:w-[80%] w-[90%] mx-auto my-6 relative">
              <div className="md:w-[50%] w-full">
                <span className="md:text-[48px] text-[22px] font-bold leading-2 leading-none	 text-white ">
                  Customer <br /> Reviews!
                </span>
              </div>
              <div className="md:w-[50%] w-full flex self-center">
                <img
                  src={rpdata?.dbPrincipal?.logo}
                  alt="logo"
                  className="absolute w-[60%] top-10 md:top-32 right-0 md:-right-8"
                />
              </div>
            </div>
            <div className="">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/searchapp-25415.appspot.com/o/CustomerReviews_Mesa%20de%20trabajo%201.png?alt=media&token=b13e7f98-e8e2-4aa8-9557-24b9b286d5ae"
                alt="CustomerReviews"
                className="absolute bottom-3 right-0 w-[90%]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserTag;
