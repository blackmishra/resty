import React from "react";
import { useState, useEffect } from 'react'
import Collapsible from 'react-collapsible';
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from 'universal-cookie';


import { Button, Img, Input, List, Text } from "components";
import DesktopSixBadge from "components/DesktopSixBadge";
import DesktopSixImage from "components/DesktopSixImage";
import DesktopOneDate from "components/DesktopOneDate";
import TimePickerComp from "components/TimePickerComp";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import CalendarComp from "components/CalendarComp";
import * as moment from 'moment';

import DesktopSixGuest from "components/DesktopSixGuest";
import DesktopSixteenHeader from "components/DesktopSixteenHeader";
import DesktopOneTime from "components/DesktopOneTime";

const DesktopSixPage = () => {
  const notify = () => toast("Wow so easy!");
  const base_url = "http://127.0.0.1:8000/"

  const navigate = useNavigate();
  const location = useLocation();

  const [resto_details, setRest_details] = useState("")
  const [bookingDate, setbookingDate] = useState(new Date());
  const [from_time, setFromTime] = useState('10:00');
  const [num_guests, setNumGuests] = useState(2);


  const res_id = location.state.venue_id
  const cookies = new Cookies();

  console.log(res_id);
  const url = base_url + "find/" + res_id

  const makeRequest = (req, res) => {
    fetch(base_url + "booking_request", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        rest_name: resto_details.name,
        rest_id: res_id,
        reservation_date: bookingDate,
        time_slot: from_time,
        guests_size: num_guests

      })
    })
      .then((response) => {
        console.log(response.status)
        if (response.ok) {
          toast.success("Reservation request added!")
          let path = `/desktopten`;
          setTimeout(() => {
            navigate(path, { replace: true, state: {} });
          }, 3000);
        }
        else {
          toast.error("Bad Request. Please try again.")
        }

      })
  }

  const saveFormData = (req, res) => {
    try {

    cookies.set('rest_name', resto_details.name, { path: '/' });
    cookies.set('rest_id', res_id, { path: '/' });
    cookies.set('reservation_date', bookingDate, { path: '/' });
    cookies.set('time_slot', from_time, { path: '/' });
    cookies.set('guests_size', num_guests, { path: '/' });
    cookies.set('rest_details_ck', resto_details, { path: '/' });

    console.log(cookies.get('rest_name'));
    console.log(cookies.get('rest_id'));
    console.log(cookies.get('reservation_date'));
    console.log(cookies.get('time_slot'));
    console.log(cookies.get('guests_size'));

    toast.success("Data Saved!")
    let path = `/desktopseven`;
          setTimeout(() => {
            navigate(path, { replace: true, state: {} });
          }, 3000);
  } catch (error) {
    toast.error("Bad Request. Please try again.")
    console.error('An error occurred:', error);
  
  }

  }
  console.log(bookingDate)
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
    console.log('Printing cookie data:', cookies.get('rest_details_ck'));
  }, []);

  return (
    <>{resto_details &&
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
            <ToastContainer />
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
                <DesktopSixGuest setNumGuests={setNumGuests}
                  className="bg-white-A700 border border-gray-200 border-solid flex flex-col gap-2 items-start justify-end p-4 rounded-[16px] shadow-bs w-full" />
                {/* <DesktopOneDate className="bg-white-A700 border border-gray-200 border-solid flex flex-col gap-4 items-start justify-end pr-4 py-4 rounded-[16px] shadow-bs1 w-full" /> */}

                <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col items-center justify-start p-4 rounded-[12px] shadow-bs w-[455px] sm:w-full">
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtInterMedium16"
                  >
                    What date would you like to reserve ?
                  </Text>

                  <span class="text-xl mb-3"></span>
                  <CalendarComp setbookingDate={setbookingDate} />
                </div>
                <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col items-center justify-start p-4 rounded-[12px] shadow-bs w-[455px] sm:w-full">
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtInterMedium16"
                  >
                    Which time suits for you ?
                  </Text>
                  <TimePickerComp setFromTime={setFromTime} />
                </div>
              </div>
              <Button
                className="cursor-pointer font-medium text-base text-center w-full"
                shape="round"
                color="red_400"
                size="sm"
                variant="fill"
                onClick={saveFormData}
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    }
    </>
  );
};

export default DesktopSixPage;
