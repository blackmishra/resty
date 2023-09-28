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

import { CloseSVG } from "../../assets/images";
// import Select from "react-select/dist/declarations/src/Select";

const DesktopPage = () => {
  const [searchvalue, setSearchvalue] = React.useState("");
  // console.log(searchvalue)
  const [optionList, setOptionList] = useState([] | null);

  const fetchData = () => {
    axios
      .get('https://resybot-22sv.onrender.com/')
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
    // console.log(data);
    // console.log(select)
    // let rest_obj = JSON.stringify(data.label).concat(",", JSON.stringify(data.value))
    // console.log(rest_obj)

    // formRef.current.setFieldsValue({
    //   rest_name: rest_obj
    // })


  }


  const DropdownIndicator = props => {
    return (
      components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
          {/* <FontAwesomeIcon icon={props.selectProps.menuIsOpen ? "caret-up" : "caret-down"}/> */}
          <Img
            className="cursor-pointer h-6 mr-2 my-auto"
            src="images/img_search.svg"
            alt="search"
          />
          {/* <CloseSVG
            className="cursor-pointer h-6 my-auto"
            onClick={() => setSearchvalue("")}
            fillColor="#616675"
            style={{
              visibility: props.selectProps.menuIsOpen? "visible" : "hidden",
            }}
            height={24}
            width={24}
            viewBox="0 0 24 24"
          /> */}
        </components.DropdownIndicator>
      )
    );
  };

  const customStyles = {
    control: (base) => ({
      ...base,
      flexDirection: "row-reverse"
    })
  };
  const [searchr, setSearchr] = useState([]);
  const desktopSixteenColumnrectanglethirtyonePropList = RestData()
  let total_num_rest = searchr.length;
  console.log(typeof (RestData()))
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
                {searchr.map(
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
                {/* <RestaurantGridList className="flex flex-1 flex-col gap-2 items-start justify-start w-full" searchr={searchr} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

function RestData() {
  const [restData, setRestData] = useState('')
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
        // console.log(allRestList);

        setRestData(allRestList)
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
