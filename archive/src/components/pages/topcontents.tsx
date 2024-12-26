"use client";

import React, { useEffect, useState } from "react";

function TopContents() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 1);

    return () => clearTimeout(timer); // クリーンアップ
  }, []);

  return (
    <div
      id="top-header-contents"
      className={`index-Keyvisual ${show ? "show" : ""}`}
    >
      <div
        id="top-main-contents"
        className={`index-Keyvisual_Img ${show ? "show" : ""}`}
      />
      <div id="top-side-contents">
        <span className="block absolute z-[15] top-[24.08854vw] right-[4.42708vw] w-[13.20104vw] h-[116.29076vw] bg-center bg-contain bg-no-repeat bg-[url(/wp-content/themes/images/ttl_sm_name-1.png)] lg:!top-[135px] lg:!right-[.41667vw] lg:!w-[16.70974vw] lg:!h-[44.43193vw] lg:!bg-[url(/wp-content/themes/images/ttl_name-1.png)]" />
        <h1 className="block absolute z-[15] top-[22.78646vw] right-[5.85938vw] w-[13.20104vw] h-[116.29076vw] bg-contain bg-no-repeat bg-[url(/wp-content/themes/images/ttl_sm_name-0.png)] lg:!top-[120px] lg:!right-[1.14583vw] lg:!w-[16.70974vw] lg:!h-[44.43193vw] lg:!bg-center lg:!bg-[url(/wp-content/themes/images/ttl_name-0.png)]"></h1>
        <span className="block absolute z-[15] top-[27.47396vw] right-[21.35417vw] w-[7.29531vw] h-[61.05482vw] bg-contain bg-no-repeat lg:!top-[120px] lg:!right-[11.04167vw] lg:!w-[1.91068vw] lg:!h-[18.20354vw] lg:!bg-center bg-[url(/wp-content/themes/images/txt_menu.png)]" />
      </div>
    </div>
  );
}

export default TopContents;
