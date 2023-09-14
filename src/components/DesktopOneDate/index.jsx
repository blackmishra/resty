import React from "react";

import { Button, List, Text } from "components";

const DesktopOneDate = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="ml-4 md:ml-[0] mt-0.5 text-gray-600 text-sm"
          size="txtInterMedium14Gray600"
        >
          {props?.whatdatewould}
        </Text>
        <div className="h-72 md:h-[286px] relative w-full">
          <div className="absolute flex flex-col h-max inset-[0] items-center justify-start m-auto w-[423px] sm:w-full">
            <List
              className="flex flex-col gap-px items-center w-full"
              orientation="vertical"
            >
              <div className="bg-gray-50 flex flex-1 flex-row gap-2 items-center justify-start px-2 py-2.5 rounded-lg w-full">
                <div className="flex flex-col items-center justify-center w-4">
                  <div className="bg-red-400 flex flex-col h-4 items-center justify-start p-[5px] rounded-[50%] w-4">
                    <div className="bg-white-A700 h-1.5 rounded-[50%] w-1.5"></div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-gray-900 text-sm w-auto"
                    size="txtInterRegular14Gray900"
                  >
                    {props?.saturdayaugust}
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-row gap-2 items-center justify-start px-2 py-2.5 w-full">
                <div className="flex flex-col items-center justify-center w-4">
                  <div className="bg-white-A700 border border-blue_gray-100_01 border-solid h-4 rounded-[50%] w-4"></div>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-gray-900 text-sm w-auto"
                    size="txtInterRegular14Gray900"
                  >
                    {props?.saturdayaugust6}
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-row gap-2 items-center justify-start px-2 py-2.5 w-full">
                <div className="flex flex-col items-center justify-center w-4">
                  <div className="bg-white-A700 border border-blue_gray-100_01 border-solid h-4 rounded-[50%] w-4"></div>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-gray-900 text-sm w-auto"
                    size="txtInterRegular14Gray900"
                  >
                    {props?.saturdayaugust6}
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-row gap-2 items-center justify-start px-2 py-2.5 w-full">
                <div className="flex flex-col items-center justify-center w-4">
                  <div className="bg-white-A700 border border-blue_gray-100_01 border-solid h-4 rounded-[50%] w-4"></div>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-gray-900 text-sm w-auto"
                    size="txtInterRegular14Gray900"
                  >
                    {props?.saturdayaugust6}
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-row gap-2 items-center justify-start px-2 py-2.5 w-full">
                <div className="flex flex-col items-center justify-center w-4">
                  <div className="bg-white-A700 border border-blue_gray-100_01 border-solid h-4 rounded-[50%] w-4"></div>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-gray-900 text-sm w-auto"
                    size="txtInterRegular14Gray900"
                  >
                    {props?.saturdayaugust6}
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-row gap-2 items-center justify-start px-2 py-2.5 w-full">
                <div className="flex flex-col items-center justify-center w-4">
                  <div className="bg-white-A700 border border-blue_gray-100_01 border-solid h-4 rounded-[50%] w-4"></div>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-gray-900 text-sm w-auto"
                    size="txtInterRegular14Gray900"
                  >
                    {props?.saturdayaugust6}
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-row gap-2 items-center justify-start px-2 py-2.5 w-full">
                <div className="flex flex-col items-center justify-center w-4">
                  <div className="bg-white-A700 border border-blue_gray-100_01 border-solid h-4 rounded-[50%] w-4"></div>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <Text
                    className="text-gray-900 text-sm w-auto"
                    size="txtInterRegular14Gray900"
                  >
                    {props?.saturdayaugust6}
                  </Text>
                </div>
              </div>
            </List>
          </div>
          <div className="absolute bg-gradient  bottom-[0] h-[88px] left-[0] w-[79%]"></div>
        </div>
        <Button
          className="border border-blue_gray-100_01 border-solid cursor-pointer font-inter font-medium ml-4 md:ml-[0] text-base text-center w-[423px]"
          shape="round"
          color="white_A700"
          size="sm"
          variant="fill"
        >
          {props?.continue}
        </Button>
      </div>
    </>
  );
};

DesktopOneDate.defaultProps = {
  whatdatewould: "What date would you like to reserve?",
  saturdayaugust: "Saturday, August 26",
  saturdayaugust1: "Friday, August 31",
  saturdayaugust2: "Friday, August 31",
  saturdayaugust3: "Friday, August 31",
  saturdayaugust4: "Friday, August 31",
  saturdayaugust5: "Friday, August 31",
  saturdayaugust6: "Friday, August 31",
};

export default DesktopOneDate;
