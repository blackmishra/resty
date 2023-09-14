import React from "react";

import { Input, Text } from "components";

const DesktopTwelveColumn = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-row items-start justify-between w-full">
            <Text
              className="text-blue_gray-800 text-sm w-auto"
              size="txtInterMedium14Bluegray800"
            >
              {props?.labelOne}
            </Text>
            {!!props?.forgot ? (
              <Text
                className="text-blue_gray-800 text-sm"
                size="txtInterMedium14Bluegray800"
              >
                {props?.forgot}
              </Text>
            ) : null}
          </div>
          {!!props?.userpassword ? (
            <Input
              name="formfieldstext"
              placeholder="Enter your password"
              value={props?.userpassword}
              className="!placeholder:text-gray-600 !text-gray-600 font-inter p-0 text-base text-left w-full"
              wrapClassName="border border-blue_gray-100_01 border-solid mt-1 rounded-md w-full"
              color="white_A700"
              size="xs"
              variant="fill"
            ></Input>
          ) : null}
        </div>
      </div>
    </>
  );
};

DesktopTwelveColumn.defaultProps = { labelOne: "Password" };

export default DesktopTwelveColumn;
