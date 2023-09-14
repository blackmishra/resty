import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import DesktopSixteenHeader from "components/DesktopSixteenHeader";

const SuccesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-copperplate items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-end justify-start w-full">
          <DesktopSixteenHeader className="border-b border-blue_gray-100_01 border-solid flex flex-col gap-2.5 h-[74px] md:h-auto items-center justify-center max-w-[1440px] p-2.5 w-full" />
          <div className="flex md:flex-col flex-row font-inter md:gap-10 items-start justify-between max-w-[1236px] mx-auto md:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[105px] items-start justify-start md:mt-0 mt-[54px]">
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[66px]"
                onClick={() => navigate("/desktoptwelve")}
                leftIcon={
                  <Img
                    className="h-4 mt-px mb-0.5 mr-3"
                    src="images/img_chevron_left.svg"
                    alt="Chevron left"
                  />
                }
              >
                <div className="text-base text-gray-900 text-left">Back</div>
              </Button>
              <div className="flex flex-col gap-14 items-center justify-start w-[343px]">
                <div className="flex flex-col gap-6 items-center justify-start w-[91%] md:w-full">
                  <div className="bg-gradient2  flex flex-col h-20 items-center justify-start p-6 sm:px-5 rounded-[50%] shadow-bs w-20">
                    <Img
                      className="h-8 w-8"
                      src="images/img_check.svg"
                      alt="check"
                    />
                  </div>
                  <Text
                    className="leading-[28.00px] text-center text-gray-900 text-xl w-full"
                    size="txtInterMedium20"
                  >
                    Your password changed successfully
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Button
                      className="common-pointer cursor-pointer font-medium text-base text-center w-full"
                      onClick={() => navigate("/desktopeleven")}
                      shape="round"
                      color="red_400"
                      size="sm"
                      variant="fill"
                    >
                      Button Text
                    </Button>
                    <Button
                      className="common-pointer border border-blue_gray-100_01 border-solid cursor-pointer font-medium text-base text-center w-full"
                      onClick={() => navigate("/desktopsixteen")}
                      shape="round"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    >
                      Secondary Button Text
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="h-[946px] md:h-auto object-cover"
              src="images/img_frame75_946x720.png"
              alt="frameSeventyFive"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccesPage;
