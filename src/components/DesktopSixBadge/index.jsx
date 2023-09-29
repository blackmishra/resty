import React from "react";

import { Img, Text } from "components";

const DesktopSixBadge = ({props}) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="text-blue_gray-900 text-center text-xs w-auto"
          size="txtInterMedium12Bluegray900"
        >
          {props?.rating}
        </Text>
        <div className="flex flex-col h-4 items-center justify-start w-4">
          <Img
            className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
            src="images/img_icon.svg"
            alt="icon"
          />
        </div>
      </div>
    </>
  );
};

DesktopSixBadge.defaultProps = { userrating: "4.7" };

export default DesktopSixBadge;
