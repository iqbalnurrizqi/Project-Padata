import React from "react";
import { Img } from "components";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
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
      <div
        className="common-pointer bg-blue_gray-300 flex md:flex-1 flex-col items-center justify-end md:ml-[0] ml-[43px] p-3.5 rounded-[10px] shadow-bs w-[10%] md:w-full"
        onClick={() => navigate("/logintablet")}
      >
        <Img
          className="h-2.5"
          src="images/img_settings_white_a700.svg"
          alt="settings_Five"
        />
      </div>
      <div
        className="common-pointer bg-blue_gray-900 flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[11px] p-2.5 rounded-[10px] shadow-bs w-[10%] md:w-full"
        onClick={() => navigate("/registertablet")}
      >
        <Img
          className="h-2.5 my-1"
          src="images/img_settings_white_a700_10x66.svg"
          alt="settings_Six"
        />
      </div>
    </div>
  );
};

export { Navbar };
