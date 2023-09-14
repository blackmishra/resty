import React from "react";

import { Text } from "components";

const DesktopTwelveDate = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-center w-4">
          {!!props?.userradio ? (
            <div className="bg-white-A700 border border-blue_gray-100_01 border-solid h-4 rounded-[50%] w-4"></div>
          ) : null}
        </div>
        <div className="flex flex-col items-start justify-start w-auto">
          <Text
            className="text-gray-900 text-sm w-auto"
            size="txtInterRegular14Gray900"
          >
            {props?.scheduletext}
          </Text>
        </div>
      </div>
    </>
  );
};

DesktopTwelveDate.defaultProps = { scheduletext: "Sunday, August 26" };

export default DesktopTwelveDate;
