import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Img, List, SelectBox, Text } from "components";
import DesktopSixBadge from "components/DesktopSixBadge";
import DesktopSixteenHeader from "components/DesktopSixteenHeader";
import Cookies from 'js-cookie';

const thisMonthOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

// function RestData(user_email) {
  
//   const base_url = process.env.REACT_APP_BASE_URL
//   const [restData, setRestData] = useState('')

//   const search_url = base_url + 'view_bookings'

//   useEffect(() => {
//     getAllRest();
//   }, [])

  

//   const getAllRest = () => {
//     axios({
//       method: 'POST',
//       url: search_url,
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({"user_email": user_email})
//     })
//       .then((response) => {
//         const allRestList = response.data;
//         // console.log(allRestList);

//         setRestData(allRestList)
//       })
//       .catch(error => console.error(`Error: $(error)`))
//   }
//   return (
//     Object.values(restData)
//   )
// }


const DesktopElevenPage = () => {
  const navigate = useNavigate();

  const [total_num_rest, setTotalNumRest] = useState('')

  const base_url = process.env.REACT_APP_BASE_URL
  const [restData, setRestData] = useState('')
  const search_url = base_url + 'view_bookings'

  
  useEffect(() => {
    
    getAllRest();

  }, [])
  
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
      body: JSON.stringify({"user_email": user_email})
    })
      .then((response) => response.json())
      .then(data => {
        console.log('Printing response');
        setRestData(Object.values(data))
        console.log('Bookings data', restData.length);
        console.log(data.length)
        if (restData.length>0){
          setTotalNumRest(restData.length)
          console.log('Total number of Bookings:', restData.length);
        }

        })
      .catch(error => console.error(`Error: $(error)`))
  }
  // let all_rest_list = [];
  
  // const allRestDetails = restData
  // total_num_rest = 0
  // // allRestDetails.length;
  // all_rest_list = allRestDetails

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
              <div className="flex flex-col items-start justify-start my-0 w-auto sm:w-full">
                <div
                  className="common-pointer bg-gray-50 border border-gray-200 border-solid flex flex-col gap-3 items-start justify-start p-4 rounded-[16px] shadow-bs w-[552px] sm:w-full"
                  onClick={() => navigate("/desktopfour")}
                >
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-row gap-[18px] items-center justify-start w-[45%]">
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
                            11 Tigers, 64816
                          </Text>
                          <Text
                            className="text-gray-600 text-sm w-auto"
                            size="txtInterRegular14"
                          >
                            New York City
                          </Text>
                        </div>
                        <DesktopSixBadge className="bg-gray-100 flex flex-row gap-0.5 items-center justify-center pl-2 pr-1 py-0.5 rounded-[10px] w-auto" />
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
                          2 Adults
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
                          Saturday, August 26 • 4:00 PM
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start my-0 w-auto sm:w-full">
                <div className="bg-gray-50 border border-gray-200 border-solid flex flex-col gap-3 items-start justify-start p-4 rounded-[16px] shadow-bs w-[552px] sm:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-row gap-[18px] items-center justify-start w-[61%]">
                      <Img
                        className="h-[90px] md:h-auto object-cover rounded-lg w-[90px]"
                        src="images/img_rectangle31_230x230.png"
                        alt="rectangleThirty"
                      />
                      <div className="flex flex-col gap-[22px] items-start justify-start w-[66%]">
                        <div className="flex flex-col gap-1 items-start justify-start w-auto">
                          <Text
                            className="text-base text-gray-900 w-auto"
                            size="txtInterMedium16"
                          >
                            12 Chairs Cafe Soho, 4994
                          </Text>
                          <Text
                            className="text-gray-600 text-sm w-auto"
                            size="txtInterRegular14"
                          >
                            New York City
                          </Text>
                        </div>
                        <DesktopSixBadge className="bg-gray-100 flex flex-row gap-0.5 items-center justify-center pl-2 pr-1 py-0.5 rounded-[10px] w-auto" />
                      </div>
                    </div>
                  </div>
                  <div className="bg-white-A700 flex flex-row sm:gap-10 items-start justify-between p-2 rounded-[10px] shadow-bs w-full">
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
                          2 Adults
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
                          Saturday, August 26 • 4:00 PM
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="bg-red-50 justify-center mb-7 px-2 py-0.5 rounded-[10px] text-red-900 text-xs w-auto"
                      size="txtInterRegular12"
                    >
                      Cancelled
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start my-0 w-auto sm:w-full">
                <div className="bg-gray-50 border border-gray-200 border-solid flex flex-col gap-3 items-start justify-start p-4 rounded-[16px] shadow-bs w-[552px] sm:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <div className="flex flex-row gap-[18px] items-center justify-start w-[64%]">
                      <Img
                        className="h-[90px] md:h-auto object-cover rounded-lg w-[90px]"
                        src="images/img_rectangle31_1.png"
                        alt="rectangleThirty"
                      />
                      <div className="flex flex-col gap-[22px] items-start justify-start w-[68%]">
                        <div className="flex flex-col gap-1 items-start justify-start w-auto">
                          <Text
                            className="text-base text-gray-900 w-auto"
                            size="txtInterMedium16"
                          >
                            15 East at Tocqueville, 37591
                          </Text>
                          <Text
                            className="text-gray-600 text-sm w-auto"
                            size="txtInterRegular14"
                          >
                            New York City
                          </Text>
                        </div>
                        <DesktopSixBadge className="bg-gray-100 flex flex-row gap-0.5 items-center justify-center pl-2 pr-1 py-0.5 rounded-[10px] w-auto" />
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
                          2 Adults
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
                          Saturday, August 26 • 4:00 PM
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopElevenPage;
