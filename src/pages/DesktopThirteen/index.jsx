import React from "react";

import { Button, Img, Input, Text } from "components";
import DesktopSixteenHeader from "components/DesktopSixteenHeader";

import { CloseSVG } from "../../assets/images";

const DesktopThirteenPage = () => {
  const [searchvalue, setSearchvalue] = React.useState("");

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-copperplate gap-[59px] items-center justify-start mx-auto pb-[18px] w-full">
        <DesktopSixteenHeader className="border-b border-blue_gray-100_01 border-solid flex flex-col gap-2.5 h-[74px] md:h-auto items-center justify-center max-w-[1440px] p-2.5 w-full" />
        <div className="flex flex-col font-inter gap-[42px] items-start justify-start max-w-[1032px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-8 items-start justify-start w-[482px] sm:w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
              <Text
                className="text-gray-600 text-sm w-auto"
                size="txtInterRegular14"
              >
                Let’s find your restaurant.
              </Text>
              <Text
                className="leading-[32.00px] max-w-[482px] md:max-w-full text-3xl sm:text-[26px] md:text-[28px] text-gray-900 tracking-[-0.75px]"
                size="txtInterExtraBold30"
              >
                Which restaurant would you like to reserve?
              </Text>
            </div>
            <Input
              name="search"
              placeholder="Tigers|"
              value={searchvalue}
              onChange={(e) => setSearchvalue(e)}
              className="!placeholder:text-blue_gray-600 !text-blue_gray-600 p-0 text-base text-left w-full"
              wrapClassName="border border-blue_gray-300 border-solid flex w-full"
              prefix={
                <Img
                  className="cursor-pointer h-6 mr-2 my-auto"
                  src="images/img_search.svg"
                  alt="search"
                />
              }
              suffix={
                <CloseSVG
                  className="cursor-pointer h-6 my-auto"
                  onClick={() => setSearchvalue("")}
                  fillColor="#616675"
                  style={{
                    visibility: searchvalue?.length <= 0 ? "hidden" : "visible",
                  }}
                  height={24}
                  width={24}
                  viewBox="0 0 24 24"
                />
              }
              shape="round"
              color="white_A700"
              size="sm"
              variant="fill"
            ></Input>
          </div>
          <div className="flex flex-col md:gap-10 gap-[201px] items-center justify-start pr-0.5 py-0.5 w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-gray-600 text-sm"
                size="txtInterMedium14Gray600"
              >
                <>We&#39;re Sorry :(</>
              </Text>
            </div>
            <div className="border border-gray-200 border-solid flex flex-col gap-[23px] items-center justify-start mb-[217px] p-8 sm:px-5 rounded-[24px] w-auto">
              <div className="bg-gray-100 border border-gray-200 border-solid flex flex-col items-center justify-start p-2.5 rounded-[50%] w-[76px]">
                <Img
                  className="h-14 w-14"
                  src="images/img_emojisad.svg"
                  alt="emojisad"
                />
              </div>
              <Text
                className="leading-[20.00px] max-w-[262px] md:max-w-full text-center text-gray-600 text-sm"
                size="txtInterMedium14Gray600"
              >
                <>
                  We couldn&#39;t find a restaurant matching your search
                  requirements
                </>
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopThirteenPage;
