import React from "react";
import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom";

import { Button, Img, Text } from "components";
import DesktopSixBadge from "components/DesktopSixBadge";

const DesktopFivePage = ({ route, navigation }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const base_url = process.env.REACT_APP_BASE_URL
  const [resto_details, setRest_details] = useState("")
  const bookingID  = location.state.booking_details
  const reservation_details  = location.state.reservation_details
  console.log(reservation_details)
  const url = base_url + "find/" + reservation_details.rest_id
  var dateString = new Date(reservation_details.reservation_date).toUTCString();
  dateString = dateString.split(' ').slice(0, 4).join(' ');
  console.log(dateString)
  var hh = new String(reservation_details.time_slot).split(':')[0]
  var mm = new String(reservation_details.time_slot).split(':')[1]

  var time_slot = ''
  var ampm = 'AM'
  if (Number(hh)>12){
    hh = Number(hh) - 12
    ampm='PM'
    time_slot = hh + ':' + mm
    console.log(time_slot)

  }

  const fetchData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setRest_details(json)
      })
  }

  useEffect(() => {
    fetchData();
    console.log("Fetching")
    console.log(resto_details)
    console.log("Data Fetching")
  }, []);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-copperplate items-center justify-end mx-auto w-full">
        <div className="md:h-[1013px] sm:h-[1093px] h-[1115px] md:px-5 relative w-full">
          <Img
            className="h-[569px] mx-auto object-cover w-full"
            src="images/img_image2.png"
            alt="imageTwo"
          />
          <div className="absolute bg-blue_gray-100 flex flex-col md:gap-10 gap-[120px] h-full inset-[0] items-center justify-center m-auto pb-[325px] w-full">
            <div className="border-b border-blue_gray-100_01 border-solid flex flex-col h-[74px] md:h-auto items-center justify-center max-w-[1440px] p-2.5 w-full">
              <div className="flex flex-row md:gap-10 items-start justify-between max-w-[1128px] w-full">
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900 tracking-[-0.52px]"
                    size="txtCopperplate26"
                  >
                    RESTY
                  </Text>
                </div>
                <div className="flex flex-col font-inter items-end justify-start md:pl-10 sm:pl-5 pl-[49px]">
                  <Text
                    className="bg-gray-900 flex h-8 items-center justify-center rounded-[50%] text-center text-white-A700 text-xs w-8"
                    size="txtInterMedium12"
                  >
                    EA
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-inter gap-14 items-center justify-start w-auto sm:w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-[69%] md:w-full">
                <div className="bg-white-A700 flex flex-col h-20 items-center justify-start p-6 sm:px-5 rounded-[50%] shadow-bs w-20">
                  <Img
                    className="h-8 w-8"
                    src="images/img_check.svg"
                    alt="check"
                  />
                </div>
                <Text
                  className="leading-[28.00px] text-center text-gray-900 text-xl"
                  size="txtInterMedium20"
                >
                  <>
                    Your reservation has been
                    <br />
                    successfully created
                  </>
                </Text>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[187px] rounded-[15px]"
                  rightIcon={
                    <Img
                      className="h-5 ml-3"
                      src="images/img_layers_copy.svg"
                      alt="layers, copy"
                    />
                  }
                  color="gray_200"
                  size="xs"
                  variant="outline"
                >
                  <div className="font-medium text-left text-sm">
                    Booking ID: {bookingID}
                  </div>
                </Button>
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                <div className="bg-gray-50 border border-gray-200 border-solid flex flex-col gap-3 items-start justify-start p-4 rounded-[16px] shadow-bs w-[455px] sm:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-row gap-[18px] items-center justify-start w-[56%]">
                      <Img
                        className="h-[90px] md:h-auto object-cover rounded-lg w-[90px]"
                        src="images/img_rectangle31.png"
                        alt="rectangleThirty"
                      />
                      <div className="flex flex-col gap-[22px] items-start justify-start w-[54%]">
                        <div className="flex flex-col gap-1 items-start justify-start w-auto">
                          <Text
                            className="text-base text-gray-900 w-auto"
                            size="txtInterMedium16"
                          >
                            {resto_details.name}, {resto_details.venue_id}
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
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-col items-start justify-start p-2 rounded-[10px] shadow-bs w-full">
                    <div className="flex flex-col gap-2 items-start justify-start w-auto">
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-4 w-4"
                          src="images/img_users_blue_gray_100_01.svg"
                          alt="users"
                        />
                        <Text
                          className="text-gray-600 text-sm w-auto"
                          size="txtInterRegular14"
                        >
                          {reservation_details.guests_size} Adults
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-start w-auto">
                        <Img
                          className="h-4 w-4"
                          src="images/img_calendar_blue_gray_100_01.svg"
                          alt="calendar"
                        />
                        <Text
                          className="text-gray-600 text-sm w-auto"
                          size="txtInterRegular14"
                        >
                          
                          {dateString} {time_slot} {ampm}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Button
                    className="common-pointer cursor-pointer font-medium text-base text-center w-full"
                    onClick={() => navigate("/desktopeleven")}
                    shape="round"
                    color="red_400"
                    size="sm"
                    variant="fill"
                  >
                    View All Reservations
                  </Button>
                  <Button
                    className="common-pointer border border-blue_gray-100_01 border-solid cursor-pointer font-medium text-base text-center w-full"
                    onClick={() => navigate("/desktopsixteen")}
                    shape="round"
                    color="white_A700"
                    size="sm"
                    variant="fill"
                  >
                    Go to Home
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopFivePage;
