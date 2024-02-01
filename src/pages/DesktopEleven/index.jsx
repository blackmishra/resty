import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Img, List, SelectBox, Text } from "components";
import ListBookings from "components/ListBookings";

import DesktopSixteenHeader from "components/DesktopSixteenHeader";
import Cookies from 'js-cookie';

const thisMonthOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DesktopElevenPage = () => {
  const navigate = useNavigate();

  const [total_num_rest, setTotalNumRest] = useState('')
  let bookings_list = [];
  const base_url = process.env.REACT_APP_BASE_URL
  const [restData, setRestData] = useState('')
  const search_url = base_url + 'view_bookings'

  const getAllRest = () => {
    console.log('Function called')
    console.log(search_url)
    const user_email = Cookies.get('user_email')
    console.log('User email is: ', user_email)

    fetch(search_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ "user_email": user_email })
    })
      .then((response) => response.json())
      .then(data => {
        console.log('Printing response');
        setRestData(Object.values(data))

        if (restData.length > 0) {
          console.log('Total number of Bookings:', restData.length);
          setTotalNumRest(restData.length);
          console.log('Data Received:', restData)
        }

      })
      .catch(error => console.error(`Error: $(error)`))
  }

  useEffect(() => {
    getAllRest()

  }, [])

  console.log('Total number of Bookings: ', restData.length)

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-copperplate justify-start mx-auto pb-[92px] w-full">
        <div className="flex flex-col items-center w-full">
          <DesktopSixteenHeader className="bg-white-A700 border-b border-blue_gray-100_01 border-solid flex flex-col gap-2.5 h-[74px] md:h-auto items-center justify-center max-w-[1440px] p-2.5 w-full" />
        </div>
        <div className="flex flex-col font-inter items-start justify-start md:ml-[0] ml-[204px] mt-[54px] md:px-5 w-auto">
          <div className="flex flex-row gap-3 items-center justify-start w-auto">
            <Text
              className="common-pointer text-base text-gray-900 w-auto"
              size="txtInterRegular16"
              onClick={() => navigate("/desktopthree")}
            >
              Profile
            </Text>
            <Img
              className="h-4 w-4"
              src="images/img_chevronleft_gray_900.svg"
              alt="chevronleft"
            />
            <Text
              className="text-base text-gray-900 w-auto"
              size="txtInterRegular16"
            >
              Reservations
            </Text>
          </div>
        </div>
        <div className="flex flex-col font-inter items-center mt-[93px] md:px-10 sm:px-5 px-[441px] w-full">
          <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
            <div className="flex flex-row gap-4 items-start justify-between w-full">
              <Text
                className="text-gray-600 text-sm w-auto"
                size="txtInterMedium14Gray600"
              >
                {total_num_rest} Reservation(s)
              </Text>
              {/* <SelectBox
                className="sm:flex-1 font-medium text-gray-600 text-left text-sm w-[19%] sm:w-full"
                placeholderClassName="text-gray-600"
                indicator={
                  <Img
                    className="h-5 w-5"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="frameFortySix"
                options={thisMonthOptionsList}
                isSearchable={false}
                placeholder="This Month"
              /> */}
            </div>
            <List
              className="flex flex-col gap-6 items-start w-auto"
              orientation="vertical"
            >
              {/* <ListBookings /> */}
              {restData.map(
                (props, index) => (
                  <React.Fragment
                    key={`ListBookings${index}`}
                  >
                    <ListBookings
                      className="flex flex-1 flex-col gap-2 items-start justify-start w-full"
                      {...props}
                    />
                  </React.Fragment>
                ),
              )}
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopElevenPage;
