import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { MdAccountCircle, MdStar, MdStarOutline } from "react-icons/md";

import { GlobalDataContext } from "../../context/context";

const ContentReviews = () => {
  //Data Page
  const { rpdata } = useContext(GlobalDataContext);

  const [reviewsDB, setReviewsDB] = useState([]);
  const idCompany = rpdata?.docId;

  useEffect(() => {
    const getReviews = async () => {
      const url = `https://apireviews.herokuapp.com/api/reviews/${idCompany}`;
      const resp = await axios.get(url);
      setReviewsDB(resp.data);
      console.log(resp.data);
      //order by date
      const reviews = resp.data.sort((a, b) => {
        return new Date(b.Date) - new Date(a.Date);
      });
      setReviewsDB(reviews);
    };
    getReviews();
  }, [idCompany]);

  // console.log(reviewsDB);




  return (
    <div className="containerMansorry">
      { 
        // mostrar los reviews  con estrellas mayores a 3
        reviewsDB?.map((item, index) => {

          return (
            item.ReviewsStars >= 3 && (
              <div key={index} className="w-full mx-3 py-3">
                <div
                  key={index}
                  className="w-full border px-5 py-10 rounded-md shadow-md cardMansorry h-full"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-[15%]">
                      <MdAccountCircle className="text-[50px]" />
                    </div>
                    <div className="w-[85%]">
                      <div className="flex">
                        {[...new Array(5)].map((star, index) => {
                          return index < item.ReviewsStars ? (
                            <MdStar className=" text-orange-400" />
                          ) : (
                            <MdStarOutline />
                          );
                        })}
                      </div>
                      <h3 className="capitalize font-bold text-[20px]">
                        {item.ClientName}
                      </h3>
                      <p className="text-[14px] -mt-3">
                        {item.Date.substring(0, 10)}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[22px] titleColorBodyReviews">{item.ReviewTitle}</h3>
                    <p>{item.ReviewBody}</p>
                  </div>
                </div>
              </div>
            )
          );
        })
      }
    </div>
  );
};

export default ContentReviews;
