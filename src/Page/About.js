import React, { useContext } from "react";
import { GlobalDataContext } from "../context/context";
import TransparentHeader from "../components/global/TransparentHeader";
import BaseLayout from "../components/global/BaseLayout";
import ValuesOne from "../components/values/Values_1";
import BlockPrincipal from "../components/block/Block_2";
import BlockSecondary from "../components/block/Block_8";

function About() {
  const { rpdata } = useContext(GlobalDataContext);
  return (
    <BaseLayout PageName="About">
      <div className="md:max-w-full w-full">
        <TransparentHeader
          headertitle="About"
          Subheader="About"
          bgimg={`${rpdata?.stock?.[10]}`}
        />
        <BlockPrincipal
            title={'about us'}
            text={rpdata?.dbAbout?.[0]?.text}
            image={rpdata?.stock?.[3]}
            listsAbout
          />
        <ValuesOne image={rpdata?.stock?.[2]} />

        <BlockSecondary
          title={rpdata?.dbSlogan?.[2]?.slogan}
          text={rpdata?.dbAbout?.[1]?.text}
          image1={rpdata?.stock?.[8]}
          image2={rpdata?.stock?.[6]}
          image3={rpdata?.stock?.[7]}
        />
      </div>
    </BaseLayout>
  );
}

export default About;
