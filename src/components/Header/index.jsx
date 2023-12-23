import React from "react";
import { Img, List } from "components";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[935px] mx-auto md:px-5 w-full">
      <div className="flex md:flex-1 flex-row gap-[5px] items-center justify-evenly w-[17%] md:w-full">
        <div className="flex flex-col h-9 items-center justify-start w-9">
          <Img
            className="h-9 md:h-auto rounded-[50%] w-9"
            src="images/img_cc816e2d855c.png"
            alt="cc816e2d855c"
          />
        </div>
        <Img className="h-[21px]" src="images/img_padata.svg" alt="padata" />
      </div>
      <button
        className="common-pointer h-[11px] md:ml-[0] ml-[42px]"
        src="images/img_settings.svg"
        alt="settings"
        onClick={() => navigate("/hometablet")}
      >Home</button>
      <button
        className="common-pointer h-[11px] md:ml-[0] ml-[60px]"
        src="images/img_settings_blue_gray_700.svg"
        alt="settings_One"
        onClick={() => navigate("/hometablet")}
      ><a href="https://www.liputan6.com/tag/elpiji-3-kg">news</a>
      </button>
      
      <button
        className="common-pointer h-[11px] md:ml-[0] ml-[58px]"
        src="images/img_settings_blue_gray_700_11x78.svg"
        alt="settings_Two"
        onClick={() => navigate("/ordertablet")}
      >Produk</button>
      <button
        className="common-pointer h-[11px] ml-12 md:ml-[0]"
        src="images/img_settings_blue_gray_700_11x53.svg"
        alt="settings_Three"
        onClick={() => navigate("/ordertablet")}
      >Order</button>
      <button
        className="common-pointer h-[11px] md:ml-[0] ml-[49px]"
        src="images/img_settings_blue_gray_700_11x60.svg"
        alt="settings_Four"
        onClick={() => navigate("/ordertablet")}
      >Promo</button>
    
    </div>
  );
};

export { Header };
