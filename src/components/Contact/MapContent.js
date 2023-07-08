import React, { useContext } from "react";
import { GlobalDataContext } from "../../context/context";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";




const Map = () => {

  const { rpdata } = useContext(GlobalDataContext);

  return (
    <div>
      <div className="md:w-[95%] mx-auto mt-[60px]">
        {
          rpdata?.labels?.general?.titleMap ?
            <h2 className="text-center pb-5">
              {rpdata?.labels?.general?.titleMap}
            </h2>
            :
            <h2 className="text-center pb-5">
              We Cover {rpdata?.dbPrincipal?.miles} Miles Around {rpdata?.dbPrincipal?.location?.[0].address}
            </h2>
        }

      </div>

      {
        rpdata?.dbPrincipal?.location.length > 1 ?

          <Tabs>
            <TabList>
              <div className="flex flex-col md:flex-row justify-center text-center">
                {
                  rpdata?.dbPrincipal?.location?.map((item, index) => {
                    return <Tab key={index}>{item.address}</Tab>;
                  })
                }
              </div>
            </TabList>
            {
              rpdata?.dbPrincipal?.location?.map((item, index) => {
                return (
                  <TabPanel key={index}>
                    <iframe
                      loading="lazy"
                      title="Cover Locations"
                      src={item.url}
                      style={{ width: "100%", height: "400px" }}
                    />
                  </TabPanel>
                )
              })
            }
          </Tabs>
          :
          <iframe
            src={rpdata?.dbPrincipal?.location?.[0].url}
            loading="lazy"
            title="Cover Locations"
            className="w-full h-[500px]"
          />

      }

    </div>
  );
};
export default Map;