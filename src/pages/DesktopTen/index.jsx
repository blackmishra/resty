import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import DesktopSixteenHeader from "components/DesktopSixteenHeader";
import DesktopTwelveColumn from "components/DesktopTwelveColumn";

const DesktopTenPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-copperplate items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-end justify-start w-full">
          <DesktopSixteenHeader className="border-b border-blue_gray-100_01 border-solid flex flex-col gap-2.5 h-[74px] md:h-auto items-center justify-center max-w-[1440px] p-2.5 w-full" />
          <div className="flex md:flex-col flex-row font-inter md:gap-10 items-start justify-between max-w-[1236px] mx-auto md:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[103px] items-start justify-start md:mt-0 mt-[54px]">
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
                  className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900 tracking-[-0.75px] w-auto"
                  size="txtInterExtraBold30"
                >
                  Create Your Account
                </Text>
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <div className="flex flex-col gap-4 items-start justify-start w-[343px]">
                      <DesktopTwelveColumn
                        className="flex flex-col gap-1 items-start justify-start w-full"
                        labelOne="Full Name"
                      />
                      <DesktopTwelveColumn
                        className="flex flex-col gap-1 items-start justify-start w-full"
                        labelOne="Mail"
                      />
                      <DesktopTwelveColumn className="flex flex-col gap-1 items-start justify-start w-full" />
                      <Button
                        className="cursor-pointer font-medium text-base text-center w-full"
                        shape="round"
                        color="red_400"
                        size="sm"
                        variant="fill"
                        onClick={() => navigate("/desktopnine")}
                      >
                        Sign up
                      </Button>
                      <Button
                        className="common-pointer cursor-pointer font-medium text-base text-center w-full"
                        onClick={() => navigate("/desktopseven")}
                        shape="round"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        Already have an account? Login
                      </Button>
                    </div>
                    <Text
                      className="leading-[20.00px] text-center text-gray-600 text-sm"
                      size="txtInterRegular14"
                    >
                      <span className="text-gray-600 font-inter font-normal">
                        <>
                          By register you agree with our
                          <br />
                        </>
                      </span>
                      <span className="text-gray-900 font-inter font-normal">
                        terms
                      </span>
                      <span className="text-gray-600 font-inter font-normal">
                        {" "}
                      </span>
                      <span className="text-gray-900 font-inter font-normal">
                        and
                      </span>
                      <span className="text-gray-600 font-inter font-normal">
                        {" "}
                      </span>
                      <span className="text-gray-900 font-inter font-normal">
                        conditions
                      </span>
                      <span className="text-gray-600 font-inter font-normal">
                        {" "}
                        and
                      </span>
                      <span className="text-gray-900 font-inter font-normal">
                        {" "}
                        privacy policy
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="h-[946px] md:h-auto object-cover"
              src="images/img_frame75.png"
              alt="frameSeventyFive"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopTenPage;
