import React from "react";

import { Img, Text } from "components";

const DesktopOneGuest = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-[88px]">
          <div className="flex flex-col gap-2 items-start justify-center w-full">
            <div className="flex flex-row gap-2 items-center justify-start w-auto">
              <Img className="h-4 w-4" src="images/img_users.svg" alt="users" />
              <Text
                className="text-base text-black-900 w-auto"
                size="txtInterMedium16Black900"
              >
                {props?.adultscounter}
              </Text>
            </div>
            <Text
              className="text-base text-gray-600 w-auto"
              size="txtInterRegular16Gray600"
            >
              {props?.guests}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

DesktopOneGuest.defaultProps = { adultscounter: "2 Adults", guests: "Guests" };

export default DesktopOneGuest;
