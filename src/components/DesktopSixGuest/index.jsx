import React from "react";
import { useState, useEffect } from 'react'

import { Button, Img, List, Text } from "components";

const DesktopSixGuest = ({setNumGuests}) => {
  const [count, setCount] = useState(2);

  return (
    <>
      <div>
          <div className="border-gray-100 border-solid flex flex-row gap-2 items-center justify-between my-0  w-full">
            <div className="flex flex-col gap-1 items-start justify-start w-auto">
              <Text
                className="text-base  w-auto"
                size="txtInterMedium16"
              >
                Number of guests you are expecting?
              </Text>
              
            </div>
            <div className="flex flex-row gap-2 items-start justify-start w-auto">
              <Button
                className="border border-gray-200 border-solid flex h-8 items-center justify-center w-8"
                shape="round"
                color="white_A700"
                size="xs"
                variant="fill"
                onClick={() => {
                  setCount(prevCount => prevCount - 1)
                  // console.log("Printing guest count")
                  // console.log(count)
                  setNumGuests(count-1)
                }}
              >
                <Img
                  className="h-5"
                  src="images/img_minus_blue_gray_100_01.svg"
                  alt="minus"
                />
              </Button>
              <Text
                className="text-center text-lg w-[11px]"
                size="txtInterRegular18Bluegray300"
              >
                {/* {props?.twotext2} */}
                {count}
              </Text>
              <Button
                className="border border-blue_gray-100_01 border-solid flex h-8 items-center justify-center w-8"
                shape="round"
                color="white_A700"
                size="xs"
                variant="fill"
                onClick={() => {
                  setCount(prevCount => prevCount + 1)
                  setNumGuests(count+1)
                }}
              >
                <Img className="h-5" src="images/img_plus.svg" alt="plus" />
              </Button>
            </div>
          </div>

      </div>
    </>
  );
};

DesktopSixGuest.defaultProps = {
  numberofguests: "Number of guests you are expecting?",
  adultscount: "Adults",
  ages13orabovecount: "Above 18",
  twotext: "0",
  adultscount1: "Infants",
  ages13orabovecount1: "Under 2",
  twotext1: "0",
  adultscount2: "Infants",
  ages13orabovecount2: "Under 2",
  twotext2: "0",
};

export default DesktopSixGuest;
