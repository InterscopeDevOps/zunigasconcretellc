import React from "react";
import LoadingWidget from "./LoadingWidget";

function Weather() {
  return (
    <div className="absolute top-3 right-12">
      <LoadingWidget />
      <div className="absolute bottom-1 right-2">
        <div className="elfsight-app-7d747bc5-0ab4-4b1c-b88f-cc05d20bbf43"></div>
      </div>

    </div>
  );
}

export default Weather;
