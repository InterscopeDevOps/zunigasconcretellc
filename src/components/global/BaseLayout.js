import { Helmet } from "react-helmet";
import React, { useContext, useEffect, useState } from "react";
import { GlobalDataContext } from "../../context/context";
import Header from "./header/Header_7";
import Footer from "./footer/Footer_6";
import ScrollProgressBar from './ScrollProgressBar'
import ContentWidgetButton from "./botonWidgets/ContentWidgetButton";
import { FaPalette } from 'react-icons/fa'
import { MdOutlineClose } from "react-icons/md";
import TableColor from '../global/TableColor'
import BackToTop from '../global/BackToTop'
import axios from "axios";


import { MdStar } from "react-icons/md";
import { Link } from "react-router-dom";


function BaseLayout(props) {
  const { rpdata } = useContext(GlobalDataContext);

  const [showModal, setShowModal] = React.useState(false);

  //reviews rainting

  const [reviewsDB, setReviewsDB] = useState([]);
  const idCompany = rpdata?.docId;

  useEffect(() => {
    const getReviews = async () => {
      const url = `https://apireviews.herokuapp.com/api/reviews/${idCompany}`;
      const resp = await axios.get(url);
      setReviewsDB(resp.data);
      // console.log(resp.data);
      //order by date
      const reviews = resp.data.sort((a, b) => {
        return new Date(b.Date) - new Date(a.Date);
      });
      setReviewsDB(reviews);
    };
    getReviews();
  }, [idCompany]);

  // total de reviews
  const totalReviews = reviewsDB.map(item => (item.ReviewsStars >= 3 ? item.ReviewsStars : 0)).reduce((prev, curr) => prev + curr, 0);
  const porcReviews = (totalReviews / reviewsDB.length).toFixed(2)
  console.log("total", porcReviews)

  // fin reviews 

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Helmet>
        <title>
          {props.PageName} | {`${rpdata?.dbPrincipal?.name}`}
        </title>
        <meta
          name="description"
          content={`${rpdata?.dbAbout?.[0].text.substring(0, 150) + "..."}`}
        />
        <meta
          name={` ${rpdata?.dbPrincipal?.name}`}
          content={` ${rpdata?.dbPrincipal?.name}`}
        ></meta>
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <link rel="icon" href={rpdata?.dbPrincipal?.favicon} />
      </Helmet>
      <Header />
      <ScrollProgressBar />

      <main>{props.children}</main>



      {/* widgets */}
      {
        rpdata?.simpleWidgets?.[3]?.activo ?
          null
          :
          <ContentWidgetButton />

      }

      {
        // contador de reviews
        // activar tab encuentranos
        rpdata?.simpleWidgets?.[4]?.activo ?
          <Link to={'/reviews'} onClick={goToTop} className="fixed right-0 bottom-[50%] bg2 pr-1 pl-5 rounded-tl-[10px] rounded-bl-[10px]">
            <div className={`flex ${porcReviews >= 1 ? 'flex-row' : 'flex-col'} py-2 justify-start items-center gap-2`}>
              <p className="text-white font-bold capitalize leading-tight ">{porcReviews >= 1 ? porcReviews : <span> leave <br />Reviews</span>}</p>

              <div className="flex">
                <MdStar className="text-yellow-500 text-[18px]" />
                <MdStar className={`text-yellow-500 text-[18px] ${porcReviews >= 1 ? '-ml-3' : ''}`} />
                <MdStar className={`text-yellow-500 text-[18px] ${porcReviews >= 1 ? '-ml-3' : ''}`} />
                <MdStar className={`text-yellow-500 text-[18px] ${porcReviews >= 1 ? '-ml-3' : ''}`} />
                <MdStar className={`text-yellow-500 text-[18px] ${porcReviews >= 1 ? '-ml-3' : ''}`} />
              </div>
            </div>
            {
              porcReviews >= 1 ?
                <p className="text-[14px] text-white">{reviewsDB.length} <span className="text-[12px]">Reviews</span></p>
                : null
            }
          </Link>
          : null
      }

      {/* widgets de modla de colores */}

      {
        rpdata?.simpleWidgets?.map((item) => {
          if (item.val === 'ModalColores' && item.activo === true) {
            return (
              <div>
                <button
                  className="fixed right-0 bottom-[40%] bgbotonFlotante p-4"
                  onClick={() => setShowModal(true)}
                >
                  <FaPalette fontSize={25} />
                </button>
                {showModal ? (
                  <>
                    <div
                      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                      <div className="relative w-auto my-6 mx-auto max-w-6xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                              Color Palettes
                            </h3>
                            <button
                              className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                              onClick={() => setShowModal(false)}
                            >
                              <MdOutlineClose />
                            </button>
                          </div>
                          {/*body*/}
                          <div className="relative p-6 flex-auto overflow-y-auto h-[70vh] md:h-[500px]">
                            <TableColor />
                          </div>
                          {/*footer*/}
                          {/* <div className="block text-center md:flex items-center justify-between p-2 md:p-4 border-t border-solid border-slate-200 rounded-b">
                            <div>
                              <img
                                src={rpdata?.dbPrincipal?.logo}
                                alt='not fount'
                                className="w-[60%] mx-auto md:w-[30%] md:mx-0"
                              />
                            </div>
                            <div className="hidden md:block">

                              <ButtonContent btnStyle={'three'} />
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : null}

              </div>
            )
          }
          return null
        })
      }

      <Footer />
      <BackToTop />

    </>
  );
}

export default BaseLayout;
