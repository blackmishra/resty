import React from "react";

import { Button, Img, List, Text } from "components";

const DesktopSixGuest = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="mt-0.5 text-gray-600 text-sm"
          size="txtInterMedium14Gray600"
        >
          {props?.numberofguests}
        </Text>
        <List
          className="flex flex-col items-start w-[423px] md:w-full"
          orientation="vertical"
        >
          <div className="border-b border-gray-100 border-solid flex flex-row gap-2 items-center justify-between my-0 py-3 w-full">
            <div className="flex flex-col gap-1 items-start justify-start w-auto">
              <Text
                className="text-base text-gray-900 w-auto"
                size="txtInterMedium16"
              >
                {props?.adultscount2}
              </Text>
              <Text
                className="text-gray-600 text-sm w-auto"
                size="txtInterRegular14"
              >
                {props?.ages13orabovecount2}
              </Text>
            </div>
            <div className="flex flex-row gap-2 items-start justify-start w-auto">
              <Button
                className="border border-gray-200 border-solid flex h-8 items-center justify-center w-8"
                shape="round"
                color="white_A700"
                size="xs"
                variant="fill"
              >
                <Img
                  className="h-5"
                  src="images/img_minus_blue_gray_100_01.svg"
                  alt="minus"
                />
              </Button>
              <Text
                className="text-blue_gray-300 text-center text-lg w-[11px]"
                size="txtInterRegular18Bluegray300"
              >
                {props?.twotext2}
              </Text>
              <Button
                className="border border-blue_gray-100_01 border-solid flex h-8 items-center justify-center w-8"
                shape="round"
                color="white_A700"
                size="xs"
                variant="fill"
              >
                <Img className="h-5" src="images/img_plus.svg" alt="plus" />
              </Button>
            </div>
          </div>
          <div className="border-b border-gray-100 border-solid flex flex-row gap-2 items-center justify-between my-0 py-3 w-full">
            <div className="flex flex-col gap-1 items-start justify-start w-auto">
              <Text
                className="text-base text-gray-900 w-auto"
                size="txtInterMedium16"
              >
                {props?.adultscount2}
              </Text>
              <Text
                className="text-gray-600 text-sm w-auto"
                size="txtInterRegular14"
              >
                {props?.ages13orabovecount2}
              </Text>
            </div>
            <div className="flex flex-row gap-2 items-start justify-start w-auto">
              <Button
                className="border border-gray-200 border-solid flex h-8 items-center justify-center w-8"
                shape="round"
                color="white_A700"
                size="xs"
                variant="fill"
              >
                <Img
                  className="h-5"
                  src="images/img_minus_blue_gray_100_01.svg"
                  alt="minus"
                />
              </Button>
              <Text
                className="text-blue_gray-300 text-center text-lg w-[11px]"
                size="txtInterRegular18Bluegray300"
              >
                {props?.twotext2}
              </Text>
              <Button
                className="border border-blue_gray-100_01 border-solid flex h-8 items-center justify-center w-8"
                shape="round"
                color="white_A700"
                size="xs"
                variant="fill"
              >
                <Img className="h-5" src="images/img_plus.svg" alt="plus" />
              </Button>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center justify-between my-0 py-3 w-full">
            <div className="flex flex-col gap-1 items-start justify-start w-auto">
              <Text
                className="text-base text-gray-900 w-auto"
                size="txtInterMedium16"
              >
                {props?.adultscount2}
              </Text>
              <Text
                className="text-gray-600 text-sm w-auto"
                size="txtInterRegular14"
              >
                {props?.ages13orabovecount2}
              </Text>
            </div>
            <div className="flex flex-row gap-2 items-start justify-start w-auto">
              <Button
                className="border border-gray-200 border-solid flex h-8 items-center justify-center w-8"
                shape="round"
                color="white_A700"
                size="xs"
                variant="fill"
              >
                <Img
                  className="h-5"
                  src="images/img_minus_blue_gray_100_01.svg"
                  alt="minus"
                />
              </Button>
              <Text
                className="text-blue_gray-300 text-center text-lg w-[11px]"
                size="txtInterRegular18Bluegray300"
              >
                {props?.twotext2}
              </Text>
              <Button
                className="border border-blue_gray-100_01 border-solid flex h-8 items-center justify-center w-8"
                shape="round"
                color="white_A700"
                size="xs"
                variant="fill"
              >
                <Img className="h-5" src="images/img_plus.svg" alt="plus" />
              </Button>
            </div>
          </div>
        </List>
        <Button
          className="border border-blue_gray-100_01 border-solid cursor-pointer font-inter font-medium text-base text-center w-[423px]"
          shape="round"
          color="white_A700"
          size="sm"
          variant="fill"
        >
          {props?.continuebutton}
        </Button>
      </div>
    </>
  );
};

DesktopSixGuest.defaultProps = {
  numberofguests: "Number of guests you are expecting?",
  adultscount: "Infants",
  ages13orabovecount: "Under 2",
  twotext: "0",
  adultscount1: "Infants",
  ages13orabovecount1: "Under 2",
  twotext1: "0",
  adultscount2: "Infants",
  ages13orabovecount2: "Under 2",
  twotext2: "0",
};

export default DesktopSixGuest;
