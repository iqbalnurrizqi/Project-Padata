import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Input } from "components";

const RegisterTabletPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="bg-blue_gray-50 flex flex-col items-center justify-end p-2 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[935px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-row gap-[5px] items-center justify-evenly w-[17%] md:w-full">
              <div className="flex flex-col h-9 items-center justify-start w-9">
                <Img
                  className="h-9 md:h-auto rounded-[50%] w-9"
                  src="images/img_cc816e2d855c.png"
                  alt="cc816e2d855c"
                />
              </div>
              <Img
                className="h-[21px]"
                src="images/img_padata.svg"
                alt="padata"
              />
            </div>
            <Img
              className="common-pointer h-[11px] md:ml-[0] ml-[42px]"
              src="images/img_settings.svg"
              alt="settings"
              onClick={() => navigate("/hometablet")}
            />
            <Img
              className="common-pointer h-[11px] md:ml-[0] ml-[60px]"
              src="images/img_settings_blue_gray_700.svg"
              alt="settings_One"
              onClick={() => navigate("/hometablet")}
            />
            <Img
              className="common-pointer h-[11px] md:ml-[0] ml-[59px]"
              src="images/img_settings_blue_gray_700_11x78.svg"
              alt="settings_Two"
              onClick={() => navigate("/ordertablet")}
            />
            <Img
              className="common-pointer h-[11px] ml-12 md:ml-[0]"
              src="images/img_settings_blue_gray_700_11x53.svg"
              alt="settings_Three"
              onClick={() => navigate("/ordertablet")}
            />
            <Img
              className="common-pointer h-[11px] md:ml-[0] ml-[49px]"
              src="images/img_settings_blue_gray_700_11x60.svg"
              alt="settings_Four"
              onClick={() => navigate("/ordertablet")}
            />
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
        </div>
        <div className="h-[291px] md:h-[582px] md:px-5 relative w-full">
          <div className="h-[291px] m-auto w-full">
            <Img
              className="h-[291px] m-auto object-cover w-full"
              src="images/img_image1.png"
              alt="imageOne"
            />
            <Img
              className="absolute bottom-[34%] h-2.5 left-[42%] w-2.5"
              src="images/img_makiarrow.svg"
              alt="makiarrow"
            />
          </div>
          <div className="absolute bg-white-A700_7e flex flex-col h-full inset-[0] items-start justify-center m-auto p-[5px] w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mb-[29px] mt-[26px] w-[94%] md:w-full">
              <Img
                className="h-[68px] md:mt-0 mt-[88px]"
                src="images/img_fearrowup.svg"
                alt="fearrowup"
              />
              <div className="md:h-[193px] h-[225px] relative w-[31%] md:w-full">
                <div className="absolute md:h-[193px] h-[218px] inset-y-[0] my-auto right-[0] w-4/5">
                  <Img
                    className="absolute h-[193px] left-[0] object-cover top-[0] w-[70%]"
                    src="images/img_vector.png"
                    alt="vector"
                  />
                  <Img
                    className="absolute bottom-[0] h-[193px] object-cover right-[0] w-[70%]"
                    src="images/img_vector.png"
                    alt="vector_One"
                  />
                </div>
                <Img
                  className="absolute bottom-[0] h-[193px] left-[0] object-cover w-[56%]"
                  src="images/img_vector.png"
                  alt="vector_Two"
                />
              </div>
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[67px] w-[55%] md:w-full">
                <Img
                  className="h-[19px]"
                  src="images/img_mudahpraktis.svg"
                  alt="mudahpraktis"
                />
                
                <Img
                  className="h-[19px] mt-[3px]"
                  src="images/img_pesanpadatavia.svg"
                  alt="pesanpadatavia"
                />
                <div className="flex flex-col gap-[15px] items-center justify-start mt-[17px] w-[64%] md:w-full">
                  <Img
                    className="h-[81px] md:h-auto object-cover"
                    src="images/img_group58.png"
                    alt="groupFiftyEight"
                  />
                  <Img
                    className="h-[42px]"
                    src="images/img_pesansebelum1700.svg"
                    alt="pesansebelum170"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Input
          name="username"
          placeholder="username"
          className="font-semibold leading-[normal] p-0 placeholder:text-gray-400 sm:pr-5 text-[15px] text-gray-400 text-left w-full"
          wrapClassName="bg-blue_gray-50 mt-[42px] pb-[31px] pl-4 pr-[35px] pt-[11px] shadow-bs2 w-[64%]"
          type="text"
        ></Input>
        <Input
          name="firstname"
          placeholder="first name"
          className="font-semibold leading-[normal] p-0 placeholder:text-gray-400 sm:pr-5 text-[15px] text-gray-400 text-left w-full"
          wrapClassName="bg-blue_gray-50 mt-10 pb-[13px] pl-[17px] pr-[35px] pt-1.5 shadow-bs2 w-[64%]"
          type="text"
        ></Input>
        <Input
          name="lastname"
          placeholder="last name"
          className="font-semibold leading-[normal] p-0 placeholder:text-gray-400 sm:pr-5 text-[15px] text-gray-400 text-left w-full"
          wrapClassName="bg-blue_gray-50 mt-16 pb-[13px] pl-[17px] pr-[35px] pt-1.5 shadow-bs2 w-[64%]"
          type="text"
        ></Input>
        <Input
          name="email"
          placeholder="email"
          className="font-semibold leading-[normal] p-0 placeholder:text-gray-400 sm:pr-5 text-[15px] text-gray-400 text-left w-full"
          wrapClassName="bg-blue_gray-50 mt-16 pb-[13px] pl-[17px] pr-[35px] pt-1.5 shadow-bs2 w-[64%]"
          type="email"
        ></Input>
        <Input
          name="password"
          placeholder="password"
          className="font-semibold leading-[normal] p-0 placeholder:text-gray-400 sm:pr-5 text-[15px] text-gray-400 text-left w-full"
          wrapClassName="bg-blue_gray-50 mt-16 pb-[11px] pl-[17px] pr-[35px] pt-2 shadow-bs2 w-[64%]"
          type="password"
        ></Input>
        <Input
          name="pass"
          placeholder="confirm password"
          className="font-semibold leading-[normal] p-0 placeholder:text-gray-400 sm:pr-5 text-[15px] text-gray-400 text-left w-full"
          wrapClassName="bg-blue_gray-50 mt-16 pb-[11px] pl-[17px] pr-[35px] pt-[7px] shadow-bs2 w-[64%]"
          type="password"
        ></Input>
        <div className="bg-blue_gray-900 flex flex-col items-center justify-start max-w-[652px] mt-16 mx-auto p-4 md:px-5 rounded-[10px] shadow-bs w-full">
          <Img
            className="h-[33px]"
            src="images/img_register.svg"
            alt="register"
          />
        </div>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[222px] items-center justify-start mt-[43px] p-[70px] md:px-10 sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_group14.png')" }}
        >
          <Img
            className="h-[81px] max-w-[873px] mx-auto w-full"
            src="images/img_sosmed.svg"
            alt="sosmed"
          />
        </div>
      </div>
    </>
  );
};

export default RegisterTabletPage;
