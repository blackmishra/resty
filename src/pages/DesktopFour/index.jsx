import React from "react";

import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react'
import { Button, Img, Text } from "components";
import DesktopSixBadge from "components/DesktopSixBadge";
import DesktopSixteenHeader from "components/DesktopSixteenHeader";
import DesktopSixImage from "components/DesktopSixImage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function tConvert(time) {
  // Check correct time format and split into components
  time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) { // If time format correct
      time = time.slice(1);  // Remove full string match value
      time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
      time[3] = ''
  }
  return time.join(''); // return adjusted time or original string
}


const DesktopFourPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [resto_details, setRest_details] = useState("")
  const bookingID = location.state.data.booking_id
  const bookingStatus = location.state.data.booking_status
  const bookedOn = location.state.data.created_at
  const venueID = location.state.data.rest_id
  const reservation_date = location.state.data.date
  const rest_name = location.state.data.rest_name
  const base_img_url = location.state.data.base_img_url

  const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
  var booking_date = new Date(reservation_date)
  booking_date = booking_date.toLocaleDateString('en-US', DATE_OPTIONS)
  const booking_time = tConvert(location.state.data.from_time)
  console.log(venueID, bookingID, bookingStatus, bookedOn, reservation_date, location.state.data.rating)
  // console.log(booking_time, booking_date)

  const base_url = process.env.REACT_APP_BASE_URL
  const SEARCH_VENUE_API = base_url + "find/" + venueID
  const CANCEL_RESERVATION_API = base_url + "cancel_booking"

  const colorName = bookingStatus === "Confirmed" ? "gray_100_01" : "red_50";
  console.log(colorName)


  const fetchData = () => {
    fetch(SEARCH_VENUE_API)
      .then((response) => response.json())
      .then((json) => {
        setRest_details(json)
        console.log(json)
      })
  };

  const cancel_reservation = () => {
    fetch(CANCEL_RESERVATION_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "booking_id": bookingID })
    })
      .then((response) => {
        console.log(response);
        if(response.status==200){
          toast.success("Booking Cancellation successful!")

        }
        else{
          toast.error("Bad Request. Please try again.")
        }
      })
      
      .catch(error => console.error(`Error: $(error)`))
  }

  useEffect(() => {
    fetchData();
    console.log("Fetching")
    console.log(resto_details)
  }, []);


  return (
    <>{resto_details &&
      <div className="bg-gray-50 flex flex-col font-copperplate gap-[54px] items-center justify-start mx-auto pb-72 w-full">
        <DesktopSixteenHeader className="bg-white-A700 border-b border-blue_gray-100_01 border-solid flex flex-col gap-2.5 h-[74px] md:h-auto items-center justify-center max-w-[1440px] p-2.5 w-full" />
        <div className="flex flex-col font-inter gap-[5px] items-start justify-start max-w-[1032px] mx-auto md:px-5 w-full">
          {/* <Button
            className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[66px]"
            onClick={() => navigate("/desktopfifteen")}
            leftIcon={
              <Img
                className="h-4 mt-px mb-0.5 mr-3"
                src="images/img_chevron_left.svg"
                alt="Chevron left"
              />
            }
          >
            <div className="text-base text-gray-900 text-left">Back</div>
          </Button> */}
          <ToastContainer />

          <div className="flex md:flex-col flex-row gap-14 items-start justify-start max-w-[1032px] w-full">
            <div className="flex sm:flex-1 flex-col gap-8 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-row gap-8 items-start justify-between w-full">
                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtInterMedium16"
                  >
                    {rest_name}
                  </Text>
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    New York City
                  </Text>
                </div>
                <DesktopSixBadge props= { {"rating": location.state.data.rating} } className="bg-gray-100 flex flex-row gap-0.5 items-center justify-center pl-2 pr-1 py-0.5 rounded-[10px] w-auto" />
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-[520px] sm:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[303px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                    // src="images/img_rectangle31.png"
                    src={base_img_url}
                    alt="rectangleThirtyOne"
                  />
                </div>
                <div className="flex sm:flex-col flex-row gap-4 items-start justify-between w-full">
                <DesktopSixImage props={resto_details} />
                </div>
              </div>
            </div>
            <div className="flex sm:flex-1 flex-col items-start justify-start w-auto sm:w-full">
              <div className="flex flex-col items-start justify-start w-[455px] sm:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-col items-start justify-start w-[455px] sm:w-full">
                    <div className="bg-gray-50 border border-gray-200 border-solid flex flex-col gap-3 items-start justify-start p-4 rounded-[16px] shadow-bs w-[455px] sm:w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-row gap-[18px] items-center justify-start w-[56%]">
                          <Img
                            className="h-[90px] md:h-auto object-cover rounded-lg w-[90px]"
                            // src="images/img_rectangle31.png"
                            src={base_img_url}
                            alt="rectangleThirty"
                          />
                          <div className="flex flex-col gap-[22px] items-start justify-start w-[54%]">
                            <div className="flex flex-col gap-1 items-start justify-start w-auto">
                              <Text
                                className="text-base text-gray-900 w-auto"
                                size="txtInterMedium16"
                              >
                                {rest_name}
                              </Text>
                              <Text
                                className="text-gray-600 text-sm w-auto"
                                size="txtInterRegular14"
                              >
                                New York City
                              </Text>
                            </div>
                            <DesktopSixBadge props= { {"rating": location.state.data.rating} } className="bg-gray-100 flex flex-row gap-0.5 items-center justify-center pl-2 pr-1 py-0.5 rounded-[10px] w-auto" />
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
                              {location.state.data.number_of_guests} Adults
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
                              {booking_date} • {booking_time}
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Button
                        className="border border-blue_gray-100_01 border-solid cursor-pointer flex items-center justify-center min-w-[423px] sm:min-w-full rounded-md"
                        leftIcon={
                          <Img
                            className="h-4 mr-2"
                            src="images/img_map.svg"
                            alt="Map"
                          />
                        }
                        shape="round"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        <div className="font-medium text-left text-xs">
                          Get Directions
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col gap-3 items-start justify-start p-4 rounded-[16px] shadow-bs w-[455px] sm:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="border-b border-gray-100 border-solid flex flex-row gap-1 items-center justify-between py-2 w-full">
                        <Text
                          className="text-gray-600 text-sm w-auto"
                          size="txtInterRegular14"
                        >
                          Status
                        </Text>
                        <Button
                          className="cursor-pointer min-w-[88px] rounded-[14px] text-center text-sm"
                          color={colorName}
                          size="xs"
                          variant="fill"
                        >
                          {bookingStatus}
                        </Button>
                      </div>
                      <div className="border-b border-gray-100 border-solid flex flex-row gap-1 items-start justify-between py-3 w-full">
                        <Text
                          className="text-gray-600 text-sm w-auto"
                          size="txtInterRegular14"
                        >
                          Booking ID
                        </Text>
                        <Text
                          className="text-blue_gray-800 text-sm w-auto"
                          size="txtInterRegular14Bluegray800"
                        >
                          {bookingID}
                        </Text>
                      </div>
                      <div className="border-b border-gray-100 border-solid flex flex-row gap-1 items-start justify-between py-3 w-full">
                        <Text
                          className="text-gray-600 text-sm w-auto"
                          size="txtInterRegular14"
                        >
                          Restaurant ID
                        </Text>
                        <Text
                          className="text-blue_gray-800 text-sm w-auto"
                          size="txtInterRegular14Bluegray800"
                        >
                          {venueID}
                        </Text>
                      </div>
                      <div className="flex flex-row gap-1 items-start justify-between py-3 w-full">
                        <Text
                          className="text-gray-600 text-sm w-auto"
                          size="txtInterRegular14"
                        >
                          Booked On
                        </Text>
                        <Text
                          className="text-blue_gray-800 text-sm w-auto"
                          size="txtInterRegular14Bluegray800"
                        >
                          {bookedOn}
                        </Text>
                      </div>
                    </div>
                    {
                      bookingStatus!='Cancelled' &&
                      <Button
                      className="common-pointer !text-red-700 border border-blue_gray-100_01 border-solid cursor-pointer font-medium text-base text-center w-full"
                      onClick={cancel_reservation}
                      shape="round"
                      color="white_A700" 
                      size="sm"
                      variant="fill"
                      disabled={bookingStatus==='Cancelled'?true:false}
                    >
                      Cancel Reservation
                    </Button>

                    }
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      }
    </>
  );
};

export default DesktopFourPage;
