import React from "react";

import { Img, Text } from "components";

const DesktopFourteenDate = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col gap-2 items-start justify-center w-full">
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Img
                className="h-4 w-4"
                src="images/img_calendar.svg"
                alt="calendar"
              />
              <Text
                className="text-base text-black-900 w-auto"
                size="txtInterMedium16Black900"
              >
                {props?.datetext}
              </Text>
            </div>
            <Text
              className="text-base text-gray-600 w-auto"
              size="txtInterRegular16Gray600"
            >
              {props?.saturdayaugust}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopFourteenDate.defaultProps = {
  datetext: "Saturday, August 26",
  saturdayaugust: "Date",
};

export default DesktopFourteenDate;
