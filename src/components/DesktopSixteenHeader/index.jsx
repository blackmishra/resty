import React from "react";

import { Button, Img, Text } from "components";

const DesktopSixteenHeader = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-[73%] md:w-full">
          <div className="flex flex-row md:gap-10 items-start justify-between max-w-[1032px] w-full">
            <div className="flex flex-col items-start justify-start">
              <Text
                className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900 tracking-[-0.52px]"
                size="txtCopperplate26"
              >
                {props?.resty}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-[8%]">
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[81px] rounded-[15px]"
                leftIcon={
                  <Img
                    className="h-4 mr-2"
                    src="images/img_user_circle.svg"
                    alt="User circle"
                  />
                }
                color="gray_200"
                size="xs"
                variant="outline"
              >
                <div className="font-inter font-medium text-left text-xs">
                  {props?.profiletext}
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopSixteenHeader.defaultProps = { resty: "RESTY", profiletext: "Profile" };

export default DesktopSixteenHeader;
