import React from "react";

import { useNavigate } from "react-router-dom";

import { Img,  Text } from "components";
import { Header } from "components/Header";

const LoginTabletPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="bg-blue_gray-50 flex flex-col items-center justify-end p-2 w-full">
        <Header />

        </div>
        <div className="h-[291px] md:h-[583px] md:px-5 relative w-full">
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
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mb-[34px] mt-[22px] w-[94%] md:w-full">
              <Img
                className="common-pointer h-[68px] md:mt-0 mt-[93px]"
                src="images/img_fearrowup.svg"
                alt="fearrowup"
                onClick={() => navigate(-1)}
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
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[67px] md:mt-0 mt-1 w-[55%] md:w-full">
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
        <Text
          className="bg-blue_gray-50 h-[75px] justify-center mt-[190px] pb-6 pl-[13px] sm:pr-5 pr-[35px] pt-[13px] shadow-bs2 sm:text-[21px] md:text-[23px] text-[25px] text-gray-400 w-[531px]"
          size="txtPoppinsSemiBold25"
        >
          username
        </Text>
        <Text
          className="bg-blue_gray-50 h-[75px] justify-center mt-[34px] pb-6 pl-[13px] sm:pr-5 pr-[35px] pt-3 shadow-bs2 sm:text-[21px] md:text-[23px] text-[25px] text-gray-400 w-[531px]"
          size="txtPoppinsSemiBold25"
        >
          password
        </Text>
        <div className="bg-blue_gray-900 flex flex-col items-center justify-start mt-11 p-[13px] md:px-5 rounded-[10px] shadow-bs w-[48%] md:w-full">
          <Img className="h-[27px]" src="images/img_login.svg" alt="login" />
        </div>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[390px] items-center justify-end mt-[153px] p-[75px] md:px-10 sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_group14.png')" }}
        >
          <Img
            className="h-[83px] max-w-[873px] mb-[55px] mt-[101px] mx-auto w-full"
            src="images/img_sosmed.svg"
            alt="sosmed"
          />
        </div>
      </div>
    </>
  );
};

export default LoginTabletPage;
