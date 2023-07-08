import React, { useContext } from "react";
import { BiEnvelope, BiLogIn, BiPhone } from "react-icons/bi";
import { Link } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useFirestore } from "reactfire";
import { GlobalDataContext } from "../../context/context";
import Swal from "sweetalert2";

const ModalRegister = ({ onClose }) => {
  const firestore = useFirestore();

  //Data Page
  const { rpdata } = useContext(GlobalDataContext);

  const handleSignInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    try {
      const respsingin = await signInWithPopup(auth, provider);

      if (respsingin.user) {
        await setDoc(doc(firestore, "Users", respsingin.user.uid), {
          clientName: respsingin.user.displayName,
          clientPhone: "No Defined",
          email: respsingin.user.email,
          active: true,
          createdAt: serverTimestamp(),
          uid: respsingin.user.uid,
          pageId: rpdata?.docId,
          companyName: rpdata?.dbPrincipal?.name,
        });
        window.location.reload();
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    } catch (error) {
      // Handle Errors here.
      // const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      // // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorMessage);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      
    }
  };

  return (
    <div
      className="fixed z-50 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      id="modalLogout"
    >
      <div className="w-[90%] md:w-[40%] flex flex-col">
        <button
          className="text-white text-[30px] place-self-end"
          onClick={() => onClose()}
        >
          X
        </button>

        <div className="bg-white flex flex-col items-center text-center px-10 md:px-0 py-10 rounded-2xl">
          <BiLogIn className="mb-5 text-[80px] color-2" />
          <h1 className="capitalize text-[25px] font-semibold pb-10">
            Sign in with
          </h1>

          <div className="flex flex-col md:flex-row space-x-0 space-y-5 md:space-y-0 md:space-x-5 self-center items-center">
            <Link
              className="flex self-center items-center text-white bg-2 py-3 px-4 mx-1 text-[18px] font-bold rounded-lg"
              to="/login"
            >
              <span className="pr-3">
                <BiPhone />
              </span>
              Phone
            </Link>
            <span className="font-bold text-[20px]">or</span>
            <button
              className="flex self-center items-center text-white bg-2 py-3 px-4 mx-1 text-[18px] font-bold rounded-lg"
              onClick={handleSignInWithGoogle}
            >
              <span className="pr-3">
                <BiEnvelope />
              </span>
              Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalRegister;
