import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import DesktopSixteenHeader from "components/DesktopSixteenHeader";
import DesktopTwelveColumn from "components/DesktopTwelveColumn";

const PasswordPage = () => {
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
              <div className="flex flex-col gap-[42px] items-start justify-start w-auto">
                <Text
                  className="leading-[32.00px] text-3xl sm:text-[26px] md:text-[28px] text-gray-900 tracking-[-0.75px]"
                  size="txtInterExtraBold30"
                >
                  <>
                    Reset your
                    <br />
                    password
                  </>
                </Text>
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col gap-4 items-start justify-start w-[343px]">
                      <DesktopTwelveColumn className="flex flex-col gap-1 items-start justify-start w-full" />
                      <DesktopTwelveColumn
                        className="flex flex-col gap-1 items-start justify-start w-full"
                        labelOne="Re-enter your password"
                      />
                      <Button
                        className="cursor-pointer font-medium text-base text-center w-full"
                        shape="round"
                        color="red_400"
                        size="sm"
                        variant="fill"
                      >
                        Reset Password
                      </Button>
                    </div>
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

export default PasswordPage;
