import React from "react";
import { useState, useEffect } from 'react'
import axios from 'axios'
import Select, { components } from "react-select"
import { SearchBar } from "components/SearchBar";
import { SearchResultsList } from "components/SearchResultsList";

import { Button, Img, Input, Text } from "components";
import { RestaurantGridList } from "components/RestaurantGridList";


import DesktopSixteenColumnrectanglethirtyone from "components/DesktopSixteenColumnrectanglethirtyone";
import DesktopSixteenHeader from "components/DesktopSixteenHeader";


// import Select from "react-select/dist/declarations/src/Select";
function RestData() {
  const [restData, setRestData] = useState('')

  const base_url = process.env.REACT_APP_BASE_URL
  const search_url = base_url + 'search'

  useEffect(() => {
    getAllRest();
  }, [])

  const getAllRest = () => {
    axios({
      method: 'GET',
      url: search_url,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => {
        const allRestList = response.data;
        // console.log(allRestList);

        setRestData(allRestList)
      })
      .catch(error => console.error(`Error: $(error)`))
  }
  return (
    Object.values(restData)
  )
}


const Desktop = () => {
  const [searchvalue, setSearchvalue] = useState([] | null);
  const [optionList, setOptionList] = useState([] | null);
  const base_url = process.env.REACT_APP_BASE_URL
  const search_url = base_url + 'search'
  
  const fetchData = () => {
    axios
      .get(base_url)
      .then((response) => {
        const { data } = response;
        if (response.status === 200) {
          //check the api call is success by stats code 200,201 ...etc
          // console.log(response.data.data)
          // console.log(typeof (response.data.data))
          setOptionList(response.data.data)
        } else {
          //error handle section 
        }
      })
      .catch((error) => console.log(error));
  };

  var arr = [];
  for (var i = 0; i < optionList.length; i++) {
    arr.push({ value: optionList[i].rest_id, label: optionList[i].rest_name });
  }
  useEffect(() => {
    fetchData();
  }, [])
  // console.log(arr);

  const handleSelect = (data) => {
    setSearchvalue(data)

  }

  const customStyles = {
    control: (base) => ({
      ...base,
      flexDirection: "row-reverse"
    })
  };
  const [searchr, setSearchr] = useState([]);
  let total_num_rest = 0;
  let all_rest_list = [];
  const allRestDetails = RestData()
  if (searchr.length>0){
    total_num_rest = searchr.length;
    all_rest_list = searchr
  }
  else {
    total_num_rest = allRestDetails.length;
    all_rest_list = allRestDetails
  }
  // console.log(typeof (allRestDetails))
  // console.log(typeof (RestData()))
  // console.log(total_num_rest);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-copperplate gap-[59px] items-center justify-start mx-auto pb-[18px] w-full">
        <DesktopSixteenHeader className="border-b border-blue_gray-100_01 border-solid flex flex-col gap-2.5 h-[74px] md:h-auto max-w-auto items-center justify-center p-2.5 w-full" />
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
            {/* <Select
              name="search"
              placeholder="Pick your Restaurant|"
              options={arr}
              value={searchvalue}
              onChange={handleSelect}
              // onChange={opt => console.log(opt.label, opt.value)}
              isSearchable={true}
              className="!placeholder:text-blue_gray-600 !text-blue_gray-600 p-0 text-base text-left w-full"
              wrapClassName="border border-blue_gray-300 border-solid flex w-full"
              styles={customStyles}
              shape="round"
              color="white_A700"
              size="sm"
              variant="fill"
              components={{ DropdownIndicator, IndicatorSeparator: () => null }}
            ></Select> */}
            <SearchBar setSearchr={setSearchr} />
            <SearchResultsList searchr={searchr} />
          </div>
          <div className="flex flex-col gap-6 items-start justify-start max-w-[1032px] w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-gray-600 text-sm"
                size="txtInterMedium14Gray600"
              >
                {total_num_rest} Restaurants Found
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="md:gap-5 gap-[37px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                {all_rest_list.map(
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



export default Desktop;
