import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const CheckoutSuccessfulTabletPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-montserrat items-center justify-start mx-auto w-full">
        <div className="bg-blue_gray-50 flex md:flex-col flex-row md:gap-10 items-center justify-between p-[5px] w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-10 md:ml-[0] md:px-5">
            <div className="flex flex-row gap-[5px] items-center justify-evenly w-[23%] md:w-full">
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
              onClick={() => navigate("/ordertablet")}
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
          </div>
          <Button className="bg-blue_gray-900 flex h-[47px] items-center justify-center mr-[42px] p-[7px] rounded-[23px] w-[47px]">
            <Img src="images/img_lock.svg" alt="lock" />
          </Button>
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
                className="common-pointer h-[68px] md:mt-0 mt-[85px]"
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
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[67px] w-[55%] md:w-full">
                <Img
                  className="h-[19px]"
                  src="images/img_mudahpraktis.svg"
                  alt="mudahpraktis"
                />
                <Img
                  className="h-2.5 md:h-auto mt-2.5 object-cover"
                  src="defaultNoData.png"
                  alt="lineOne"
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
        <Img
          className="h-[225px] mt-[182px] w-[225px]"
          src="images/img_vector_green_400.svg"
          alt="vector_Three"
        />
        <Text
          className="mt-[23px] md:text-5xl text-6xl text-blue_gray-900 text-center"
          size="txtMontserratSemiBold60"
        >
          Checkout Successful!
        </Text>
        <Text
          className="mt-[9px] text-blue_gray-900 text-center text-xl"
          size="txtMontserratSemiBold20"
        >
          Pesanan Anda akan kami proses secepatnya.
        </Text>
        <footer
          className="bg-cover bg-no-repeat flex flex-col h-[328px] items-center justify-center mt-[486px] md:px-5 w-full"
          style={{ backgroundImage: "url('images/img_group14.png')" }}
        >
          <Img
            className="h-[81px] mb-[95px] mt-[151px] mx-auto"
            src="images/img_sosmed.svg"
            alt="sosmed"
          />
        </footer>
      </div>
    </>
  );
};

export default CheckoutSuccessfulTabletPage;
