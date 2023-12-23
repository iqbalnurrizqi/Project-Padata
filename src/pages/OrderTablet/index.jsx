import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Navbar, Text } from "components";

const OrderTabletPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-blue_gray-50 flex md:flex-col flex-row md:gap-10 items-center justify-between p-[5px] w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-10 md:ml-[0] md:px-5">
            <Navbar />
            </div>
            <Button className="bg-blue_gray-900 flex h-[47px] items-center justify-center mr-[42px] p-[7px] rounded-[23px] w-[47px]">
              <Img src="images/img_lock.svg" alt="lock" />
            </Button>
          </div>
          <div className="h-[291px] md:h-[514px] md:px-5 relative w-full">
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
            <div className="absolute bg-white-A700_7e flex flex-col h-full inset-[0] items-start justify-center m-auto p-[13px] w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[67px] items-center justify-start mb-[21px] mt-[18px] w-[95%] md:w-full">
                <div className="md:h-[193px] h-[225px] relative w-[38%] md:w-full">
                  <Img
                    className="common-pointer absolute h-[68px] left-[0] top-[32%]"
                    src="images/img_fearrowup.svg"
                    alt="fearrowup"
                    onClick={() => navigate(-1)}
                  />
                  <div className="absolute md:h-[193px] h-[225px] inset-y-[0] my-auto right-[0] w-[83%]">
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
                </div>
                <div className="flex flex-col items-center justify-start w-[56%] md:w-full">
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
          <div className="flex md:flex-col flex-row font-montserrat gap-9 items-start justify-center max-w-[717px] mt-[154px] mx-auto md:px-5 w-full">
            <div className="bg-gradient  flex md:flex-1 flex-col items-center justify-end p-[45px] md:px-10 sm:px-5 rounded-[20px] shadow-bs w-[55%] md:w-full">
              <div className="h-[304px] relative w-[92%]">
                <Img
                  className="h-[304px] m-auto object-cover w-full"
                  src="images/img_vector_304x276.png"
                  alt="vector_Three"
                />
                <Img
                  className="absolute h-[304px] inset-[0] justify-center m-auto object-cover w-full"
                  src="images/img_vector.png"
                  alt="vector_Four"
                />
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start w-[41%] md:w-full">
              <Img
                className="h-[42px]"
                src="images/img_lpg3kg.svg"
                alt="lpg3kg"
              />
              <Img
                className="h-[31px] mt-[33px]"
                src="images/img_group115.svg"
                alt="group115"
              />
              <Text
                className="mt-[25px] sm:text-[35px] md:text-[41px] text-[45px] text-red-A700"
                size="txtMontserratSemiBold45"
              >
                Rp 19.000
              </Text>
              <div className="flex flex-row gap-[13px] items-center justify-start mt-[149px] w-full">
                <Img
                  className="h-[35px] w-[35px]"
                  src="images/img_thumbsup.svg"
                  alt="thumbsup"
                />
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-black-900"
                  size="txtMontserratSemiBold30"
                >
                  Stock : Tersedia
                </Text>
              </div>
            </div>
          </div>
          <Text
            className="bg-blue_gray-50 h-[43px] justify-center max-w-[750px] md:max-w-full mt-[58px] pl-3 sm:pr-5 pr-[35px] pt-2 shadow-bs2 text-[22px] text-gray-400 sm:text-lg md:text-xl w-full"
            size="txtPoppinsSemiBold22"
          >
            No. Telp
          </Text>
          <Input
            name="address"
            placeholder="Alamat"
            className="font-semibold leading-[normal] md:text-xl p-0 placeholder:text-gray-400 sm:pr-5 sm:text-lg text-[22px] text-gray-400 text-left w-full"
            wrapClassName="bg-blue_gray-50 mt-[13px] pb-[35px] pl-3 pr-[35px] pt-[17px] shadow-bs2 w-[74%]"
          ></Input>
          <div
            className="common-pointer bg-blue_gray-900 flex flex-col items-start justify-start max-w-[633px] mt-10 mx-auto p-[11px] md:px-5 rounded-[10px] shadow-bs w-full"
            onClick={() => navigate("/checkoutsuccessfultablet")}
          >
            <Img
              className="h-[27px] md:ml-[0] ml-[174px]"
              src="images/img_checkout.svg"
              alt="checkout"
            />
          </div>
          <footer
            className="bg-cover bg-no-repeat flex flex-col h-[328px] items-center justify-center mt-[154px] md:px-5 w-full"
            style={{ backgroundImage: "url('images/img_group14.png')" }}
          >
            <Img
              className="h-[81px] mb-[95px] mt-[151px] mx-auto"
              src="images/img_sosmed.svg"
              alt="sosmed"
            />
          </footer>
        </div>
      </div>
    </>
  );
};

export default OrderTabletPage;
