import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Img, Text } from "components";

const DesktopSixteenColumnrectanglethirtyone = (props) => {
  const navigate = useNavigate(); 

  const handleChange = (value) => {
    console.log(`You clicked on ${props.rest_id}`)
    // console.log(rest_details)
    const venue_id = props.rest_id
    let path = `/desktopsix`; 
    // fetchData();
    navigate(path, {replace:true, state:{venue_id}});
  }

  return (
    <>
      <div onClick={handleChange}>
        <div className="relative w-[230px]">
          <Img
            className="h-[230px] m-auto object-cover rounded-lg w-[230px]"
            alt="rectangleThirtyOne"
            src={props?.image}
          />
          <div className="absolute bg-gray-100 flex flex-row gap-0.5 items-center justify-center left-[3%] pl-2 pr-1 py-0.5 rounded-[10px] top-[3%] w-auto">
            <Text
              className="text-blue_gray-900 text-center text-xs w-auto"
              size="txtInterMedium12Bluegray900"
            >
              {props?.rating}
            </Text>
            <div className="flex flex-col h-4 items-center justify-start w-4">
              <Img
                className="h-4 rounded-bl-[1px] rounded-br-[1px] w-4"
                src="images/img_icon.svg"
                alt="icon"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-start justify-start w-full">
          <Text
            className="text-base text-gray-900 w-full"
            size="txtInterMedium16"
          >
            {props?.name}
          </Text>
          <Text
            className="text-gray-600 text-sm w-full"
            size="txtInterRegular14"
          >
            New York City
            {/* {props?.region} */}
          </Text>
        </div>
      </div>
    </>
  );
};

DesktopSixteenColumnrectanglethirtyone.defaultProps = {
  restaurantimage: "images/img_rectangle31.png",
  rating: "4.7",
  restaurantname: "12 Chairs Cafe Soho, 4994",
  restaurantlocation: "New York City",
};

export default DesktopSixteenColumnrectanglethirtyone;
