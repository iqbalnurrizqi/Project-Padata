import React from "react";
import { Img, List, Navbar } from "components";

const HomeTabletPage = () => {

  return (
    <>
      <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto w-full">
        <div className="bg-blue_gray-50 flex flex-col items-center justify-end p-2 w-full">
        {/* <Header className="bg-blue_gray-50 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" /> */}
          <Navbar className="bg-blue_gray-50 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full"/>
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
          <div className="absolute bg-white-A700_7e flex flex-col h-full inset-[0] items-start justify-center m-auto p-[26px] sm:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[116px] items-center justify-start mb-[13px] w-[96%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[32%] md:w-full">
                <div className="md:h-[193px] h-[225px] relative w-full">
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
          className="h-[543px] mt-[25px]"
          src="images/img_lebihmurah.svg"
          alt="lebihmurah"
        />
        <div className="flex flex-col mt-[25px] md:px-5 relative w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[551px] items-center justify-start mx-auto p-[51px] md:px-10 sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_group9.png')" }}
          >
            <div className="h-[248px] sm:h-[449px] md:h-[679px] mb-[116px] mt-[85px] relative w-full">
              <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                <List
                  className="sm:flex-col flex-row md:gap-10 gap-[233px] grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="h-[219px] sm:ml-[0] relative rounded-[15px] shadow-bs1 w-full">
                    <Img
                      className="h-[219px] m-auto object-cover rounded-[15px] w-full"
                      src="images/img_antarafotopena.png"
                      alt="antarafotopena"
                    />
                    <div className="absolute bottom-[11%] flex flex-col inset-x-[0] justify-start mx-auto w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Img
                          className="h-[42px] w-[43px]"
                          src="images/img_fearrowup.svg"
                          alt="fearrowup"
                        />
                        <Img
                          className="h-[42px] w-[43px]"
                          src="images/img_fearrowup_gray_50.svg"
                          alt="fearrowup_One"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start md:ml-[0] ml-[21px] w-[63%] md:w-full">
                        <Img
                          className="h-[21px]"
                          src="images/img_television.svg"
                          alt="television"
                        />
                        <Img
                          className="h-[39px] mt-[3px]"
                          src="images/img_padatacookingcompetition.svg"
                          alt="padatacookingco"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="h-[219px] sm:ml-[0] relative rounded-[15px] shadow-bs1 w-full">
                    <Img
                      className="h-[219px] m-auto object-cover rounded-[15px] w-full"
                      src="images/img_antarafotopena.png"
                      alt="antarafotopena"
                    />
                    <div className="absolute bottom-[11%] flex flex-col inset-x-[0] justify-start mx-auto w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <Img
                          className="h-[42px] w-[43px]"
                          src="images/img_fearrowup.svg"
                          alt="fearrowup"
                        />
                        <Img
                          className="h-[42px] w-[43px]"
                          src="images/img_fearrowup_gray_50.svg"
                          alt="fearrowup_One"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start md:ml-[0] ml-[21px] w-[63%] md:w-full">
                        <Img
                          className="h-[21px]"
                          src="images/img_settings_blue_gray_900.svg"
                          alt="settings"
                        />
                        <Img
                          className="h-[39px] mt-[3px]"
                          src="images/img_padatacookingcompetition.svg"
                          alt="padatacookingco"
                        />
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              
            </div>
          </div>
          <footer
            className="bg-cover bg-no-repeat flex flex-col h-[328px] items-center justify-center mt-[-119px] mx-auto w-full z-[1]"
            style={{ backgroundImage: "url('images/img_group14.png')" }}
          >
            <Img
              className="h-[209px] mb-8 ml-12 md:ml-[0] mr-[29px] mt-[87px]"
              src="images/img_group101.svg"
              alt="group101"
            />
          </footer>
        </div>
      </div>
    </>
  );
};

export default HomeTabletPage;
