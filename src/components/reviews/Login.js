import React, { useState, useContext } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { Link } from "react-router-dom";
import { Field, Formik, Form } from "formik";
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useFirestore } from "reactfire";
import Swal from "sweetalert2";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import MaskedInput from "react-text-mask";
import { phoneNumberMask } from "../../utils/utils";
import { LoginSchema } from "./validationSchemas";

import { GlobalDataContext } from "../../context/context";

const Login = () => {
  const firestore = useFirestore();
  let navigate = useNavigate();
  const auth = getAuth();
  // auth.settings.appVerificationDisabledForTesting = true;//TODO:DESCOMENTAR ESTO EN PRODUCCION

  // const [isLogin, setIsLogin] = useState(true);
  const [Loading, setLoading] = useState(false);

  /////for phone auth
  auth.languageCode = "US";

  //Data Page
  const { rpdata } = useContext(GlobalDataContext);

  const [expandForm, setexpandForm] = useState(false);
  const [formatedPhone, setFormatedPhone] = useState("");
  const [OTP, setOTP] = useState("");
  const [hasSendCode, setHasSendCode] = useState(false);

  //Form data
  const [userFormData, setUserFormData] = useState({
    clientPhone: "",
    email: "",
    clientName: "",
    // password: ''
  });

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // console.log(response)
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      auth
    );
  };

  const handleChangeOtp = (e) => {
    // console.log("entro en verifyOtp")
    let otp = e.target.value;

    setOTP(otp);
  };

  const verifyOtp = async () => {
    if (OTP.length === 6) {
      setLoading(true);

      try {
        let confirmResult = window.confirmationResult;

        const result = await confirmResult.confirm(OTP);

        const user = result.user;
        const ref = doc(firestore, "Users", user.uid);
        const docSnap = await getDoc(ref);
        if (docSnap.exists()) {
          // console.log("Document data:", docSnap.data());

          if (docSnap.data().active === true) {
            const Toast = Swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
              },
            });

            Toast.fire({
              icon: "success",
              title: "Signed in successfully",
            });

            navigate(`/reviews`);
            return;
          }
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `User has been disabled.`,
            footer:
              '<a href="tel:+1718-585-5400">Contact Us To Solve Your Problem?</a>',
            confirmButtonColor: "#f98c1d",
          });
          signOut(auth);
        } else {
          // doc.data() will be undefined in this case
          // alert('User dont have any record')
          // console.log("No such document!");
          // signOut(auth)

          const user = result.user;

          await setDoc(doc(firestore, "Users", user.uid), {
            clientName: userFormData.clientName,
            clientPhone: formatedPhone,
            email: userFormData.email,
            active: true,
            createdAt: serverTimestamp(),
            uid: user.uid,
            pageId: rpdata?.docId,
            companyName: rpdata?.dbPrincipal?.name,
          });

          // alert('User Created WELCOME')
          Swal.fire(
            "Success!",
            `User Created WELCOME ${rpdata?.dbPrincipal?.name}`,
            "success"
          );

          navigate(`/reviews`);
        }
        // console.log(user);
        setLoading(false);
      } catch (error) {
        alert(error);
      }
    }
  };

  const sendCode = async (formatedPhone) => {
    // setLoading(true);
    try {
      let appVerifier = window.recaptchaVerifier;
      const respAuth = await signInWithPhoneNumber(
        auth,
        formatedPhone,
        appVerifier
      );
      console.log(respAuth);
      window.confirmationResult = respAuth;
      setHasSendCode(true);
    } catch (error) {
      // const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      console.log(errorMessage);
      setLoading(false);
      // alert(

      //   errorMessage,
      // );
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${errorMessage}`,
        footer:
          '<a href="tel:+1718-585-5400">Contact Us To Solve Your Problem?</a>',
        confirmButtonColor: "#f98c1d",
      });
    }
  };

  /////////

  const signOut = (auth) => auth.signOut().then(() => navigate("/login"));

  if (Loading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="h-[100vh] bg-gray-100 text-gray-900 flex justify-center self-center items-center">
      <div className="container">
        <div className="form-container sign-in-container">
          <div className="pt-5 pl-5">
            <Link to={"/reviews"} className="flex items-center">
              <FaArrowLeft className="text-[22px]" />
              <span className="px-2 text-[22px] font-bold">Back</span>
            </Link>
          </div>
          <div className="md:w-[50%] mx-auto">
            <Formik
              initialValues={{
                clientPhone: "",
                //si hay email guardarlo si no Not Email
                email: "",
                clientName: "",
                // password: ''
              }}
              validationSchema={LoginSchema}
              onSubmit={async (values) => {
                // same shape as initial values
                console.log(values);
                setexpandForm(true);
                setUserFormData((prev) => ({ ...prev, ...values }));

                const fp = `+1${values.clientPhone
                  .replaceAll("-", "")
                  .replaceAll(" ", "")
                  .replaceAll("(", "")
                  .replaceAll(")", "")}`;
                setFormatedPhone(fp);
                console.log(fp);

                generateRecaptcha();

                await sendCode(fp);
              }}
            >
              {({ errors, touched, handleBlur, handleChange }) => (
                <Form className="flex flex-col items-center justify-center h-full px-10 py-12 text-center bg-white m-6">
                  <h1 className="text-2xl font-extrabold xl:text-3xl">
                    Login with Phone
                  </h1>
                  <div className="my-3 text-center border-b">
                    <div className="inline-block px-2 text-sm font-medium leading-none tracking-wide text-gray-600 transform translate-y-1/2 bg-white">
                      Use your phone number for login
                    </div>
                  </div>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full px-8 py-4 my-2 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                  />

                  <Field
                    name="clientName"
                    placeholder="Doe"
                    className="w-full px-8 py-4 my-2 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                  />
                  {errors.clientName && touched.clientName ? (
                    <div>{errors.clientName}</div>
                  ) : null}

                  <Field name="clientPhone">
                    {({
                      field, // { name, value, onChange, onBlur }
                      form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                      meta,
                    }) => (
                      <>
                        <MaskedInput
                          {...field}
                          mask={phoneNumberMask}
                          id="clientPhone"
                          placeholder="Enter your phone number"
                          type="text"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="w-full px-8 py-4 my-2 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                        />
                        {errors.clientPhone && touched.clientPhone ? (
                          <div>{errors.clientPhone}</div>
                        ) : null}
                      </>
                    )}
                  </Field>

                  {expandForm === true ? (
                    <>
                      <input
                        name="OTP"
                        type="number"
                        value={OTP}
                        maxLength={6}
                        onChange={handleChangeOtp}
                        placeholder="Enter your 6 digits code sent to the number above"
                        className="w-full px-8 py-4 my-2 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                      />

                      {hasSendCode === true ? (
                        <>
                          <button
                            type="button"
                            onClick={verifyOtp}
                            className="mt-5 tracking-wide font-semibold bg-[#F18F34] text-gray-100 w-full py-4 rounded-lg hover:bg-[#F18F34] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                          >
                            <AiOutlineUserAdd className="w-6 h-6 -ml-2" />
                            <span className="ml-3">Complete Registration</span>
                          </button>
                        </>
                      ) : null}
                    </>
                  ) : null}

                  {expandForm === false ? (
                    <button
                      type="submit"
                      className="mt-5 tracking-wide font-semibold bg-2 text-gray-100 w-full py-4 rounded-full transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    >
                      <AiOutlineUserAdd className="w-6 h-6 -ml-2" />
                      <span className="ml-3">Send Code</span>
                    </button>
                  ) : null}
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="overlay-container bg-cover bg-[#E74E1C] relative left-[-100%] h-full w-full md:block hidden">
          <div className="overlay">
            <div className="overlay-panel md:px-6 overlay-left">
              <h1 className="text-[22px] md:text-3xl font-extrabold">
                Welcome Back!
              </h1>
              <p className="hidden md:block">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="mt-5 tracking-wide font-semibold bg-white text-[#F18F34] w-full py-4 rounded-lg hover:bg-[#F18F34] hover:text-white transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                onClick={() => {
                  // setIsLogin(!isLogin);
                  // console.log(isLogin);
                }}
              >
                <span className="ml-3">Sign Up</span>
                <FaArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
            <div className="overlay-panel md:px-6 overlay-right">
              <h1 className="text-2xl font-extrabold xl:text-3xl">
                Hello, Welcome!
              </h1>
              <p className="hidden md:block">
                Enter your personal details and start journey with us
              </p>
              <button
                className="mt-5 tracking-wide font-semibold bg-white text-[#F18F34] w-full py-4 rounded-lg hover:bg-[#F18F34] hover:text-white transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                onClick={() => {
                  // setIsLogin(!isLogin);
                  // console.log(isLogin);
                }}
              >
                <span className="ml-3">Contact Us</span>
                <FaArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
