import React from "react";
import { useState, useEffect } from 'react'
import axios from 'axios'

import { Button, Img, Input, Text } from "components";
import DesktopSixteenColumnrectanglethirtyone from "components/DesktopSixteenColumnrectanglethirtyone";
import DesktopSixteenHeader from "components/DesktopSixteenHeader";

import { CloseSVG } from "../../assets/images";

const DesktopPage = () => {
  const [searchvalue, setSearchvalue] = React.useState("");
  // const desktopSixteenColumnrectanglethirtyonePropList = [

  //   { restaurantimage: "images/img_rectangle31_230x230.png" },
  //   {},
  //   { restaurantimage: "images/img_rectangle31_1.png" },
  //   {},
  // ];
  let desktopSixteenColumnrectanglethirtyonePropList = RestData()
  console.log(desktopSixteenColumnrectanglethirtyonePropList);

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
          <div className="flex flex-col gap-6 items-start justify-start max-w-[1032px] w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-gray-600 text-sm"
                size="txtInterMedium14Gray600"
              >
                436 Restaurants
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="md:gap-5 gap-[37px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                {desktopSixteenColumnrectanglethirtyonePropList.map(
                  (props, index) => (
                    <React.Fragment
                      key={`DesktopSixteenColumnrectanglethirtyone${index}`}
                    >
                      <DesktopSixteenColumnrectanglethirtyone
                        className="flex flex-1 flex-col gap-2 items-start justify-start w-full"
                        {...props}
                      />
                    </React.Fragment>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function RestData() {
  const [restData, getRestData] = useState('')
  const url = 'https://resybot-22sv.onrender.com/search'
  useEffect(() => {
      getAllRest();
  }, [])

  const getAllRest = () => {
      axios({
          method: 'GET',
          url: url,
          headers: {
              'Content-Type': 'application/json'
          }
      })
          .then((response) => {
              const allRestList = response.data.data;
              console.log(allRestList);

              getRestData(allRestList)
          })
          .catch(error => console.error(`Error: $(error)`))
  }
  return (
      // console.log(restData);
      restData
      // < Col key={restData.id} >
      //     <Restaurant restData={restData} />
      // </Col >
  )
}

export default DesktopPage;
