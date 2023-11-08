import React from "react";
import { useState, useEffect } from 'react'

import { useNavigate, useLocation } from "react-router-dom";

import { Button, Img, Input, List, Text } from "components";
import DesktopSixBadge from "components/DesktopSixBadge";
import DesktopSixImage from "components/DesktopSixImage";
import DesktopOneDate from "components/DesktopOneDate";

import DesktopSixGuest from "components/DesktopSixGuest";
import DesktopSixteenHeader from "components/DesktopSixteenHeader";
import DesktopOneTime from "components/DesktopOneTime";

const DesktopSixPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [resto_details, setRest_details] = useState("")
  const res_id = location.state.venue_id
  console.log(res_id);
  const url="http://127.0.0.1:8000/find/" + res_id
  
  const fetchData = () =>{
      fetch(url)
          .then((response) => response.json())
          .then((json) => setRest_details(json))
  }
  useEffect(() => {
      fetchData();
      console.log("Fetching")
      console.log(resto_details)
    }, []);

  return (
    <>{ resto_details && 
      <div className="bg-white-A700 flex flex-col font-copperplate gap-[54px] items-center justify-start mx-auto pb-[230px] w-full">
        <DesktopSixteenHeader className="border-b border-blue_gray-100_01 border-solid flex flex-col gap-2.5 h-[74px] md:h-auto items-center justify-center max-w-[1440px] p-2.5 w-full" />
        <div className="flex flex-col font-inter gap-[55px] items-start justify-start max-w-[1032px] mx-auto md:px-5 w-full">
          <Button
            className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[66px]"
            onClick={() => navigate("/desktop")}
            leftIcon={
              <Img
                className="h-4 mt-px mb-0.5 mr-3"
                src="images/img_chevron_left.svg"
                alt="Chevron left"
              />
            }
          >
            <div className="text-base text-gray-900 text-left">Back</div>
          </Button>
          <div className="flex md:flex-col flex-row gap-14 items-start justify-start max-w-[1032px] w-full">
            <div className="flex sm:flex-1 flex-col gap-8 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-row gap-8 items-start justify-between w-full">
                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtInterMedium16"
                  >
                    {resto_details.name}
                  </Text>
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    New York City
                  </Text>
                </div>
                    
                <DesktopSixBadge props={resto_details}
                className="bg-gray-100 flex flex-row gap-0.5 items-center justify-center pl-2 pr-1 py-0.5 rounded-[10px] w-auto" />
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-[520px] sm:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[303px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                    src={resto_details['images_list'][0]}
                    alt="rectangleThirtyOne"
                  />
                </div>
                <div className="flex sm:flex-col flex-row gap-4 items-start justify-between w-full">
                <DesktopSixImage props={resto_details} />
                </div>
              </div>
            </div>
            <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start w-auto sm:w-full">
              <div className="bg-gray-50 border border-gray-200 border-solid flex flex-col h-[92px] md:h-auto items-start justify-start p-4 rounded-[16px] shadow-bs w-[455px] sm:w-full">
                <div className="flex flex-row gap-[18px] items-center justify-start w-full">
                  <Img
                    className="h-[60px] md:h-auto object-cover rounded-lg w-[60px]"
                    src={resto_details['images_list'][0]}
                    alt="rectangleThirty"
                  />
                  <div className="flex flex-col gap-1 h-12 md:h-auto items-start justify-between w-auto">
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtInterMedium16"
                    >
                      {resto_details.name}
                    </Text>
                    <Text
                      className="text-gray-600 text-sm w-auto"
                      size="txtInterRegular14"
                    >
                      New York City
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-[455px] sm:w-full">
                <DesktopSixGuest className="bg-white-A700 border border-gray-200 border-solid flex flex-col gap-2 items-start justify-end p-4 rounded-[16px] shadow-bs w-full" />
                {/* <DesktopOneDate className="bg-white-A700 border border-gray-200 border-solid flex flex-col gap-4 items-start justify-end pr-4 py-4 rounded-[16px] shadow-bs1 w-full" /> */}
                
                <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col items-center justify-start p-4 rounded-[12px] shadow-bs w-[455px] sm:w-full">
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtInterMedium16"
                  >
                    What date would you like to reserve ?
                  </Text>
                </div>
                <DesktopOneTime className="bg-white-A700 border border-gray-200 border-solid flex flex-col gap-4 items-start justify-end py-4 rounded-[16px] shadow-bs1 w-full" />

                <Input
                  name="componentOne"
                  placeholder="Which time suits for you"
                  className="font-medium p-0 placeholder:text-gray-900 text-base text-left w-full"
                  wrapClassName="border border-gray-200 border-solid rounded-[12px] w-full"
                  color="white_A700"
                  size="md"
                  variant="fill"
                ></Input>
              </div>
            </div>
          </div>
        </div>
      </div>
}
    </>
  );
};

export default DesktopSixPage;
