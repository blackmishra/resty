import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Img, Text } from "components";
import DesktopSixBadge from "components/DesktopSixBadge";

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

const ListBookings = (props) => {
    const navigate = useNavigate();
    const DATE_OPTIONS = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' };
    var booking_date = new Date(props?.date)
    booking_date = booking_date.toLocaleDateString('en-US', DATE_OPTIONS)
    var booking_time = props?.from_time
    booking_time = tConvert(props?.from_time)

    const handleChange = (value) => {
        console.log(`You clicked on ${props.rest_id}`)
        const venue_id = props.rest_id
        let path = `/desktopsix`;
        navigate(path, { replace: true, state: { venue_id } });
    }

    return (
        <>
            <div className="flex flex-col items-start justify-start my-0 w-auto sm:w-full" onClick={handleChange}>
                <div className="bg-gray-50 border border-gray-200 border-solid flex flex-col gap-3 items-start justify-start p-4 rounded-[16px] shadow-bs w-[552px] sm:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-row gap-[18px] items-center justify-start ">
                            <Img
                                className="h-[90px] md:h-auto object-cover rounded-lg w-[200px]"
                                // src="images/img_rectangle31_230x230.png"
                                src={props?.base_img_url}
                                alt="rectangleThirty"
                            />
                            <div className="flex flex-col gap-[22px] items-start justify-start">
                                <div className="flex flex-col gap-1 items-start justify-start w-auto">
                                    <Text
                                        className="text-base text-gray-900 w-auto"
                                        size="txtInterMedium16"
                                    >
                                        {/* 12 Chairs Cafe Soho */}
                                        {props?.rest_name}
                                    </Text>
                                    <Text
                                        className="text-gray-600 text-sm w-auto"
                                        size="txtInterRegular14"
                                    >
                                        New York City
                                    </Text>
                                </div>
                                <DesktopSixBadge props={props} className="bg-gray-100 flex flex-row gap-0.5 items-center justify-center pl-2 pr-1 py-0.5 rounded-[10px] w-auto" />
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
                                    Booking ID: {props?.booking_id}
                                </Text>
                            </div>
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
                                    {props?.number_of_guests} Adults
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
                        <Text
                            className="bg-red-50 justify-center mb-7 px-2 py-0.5 rounded-[10px] text-red-900 text-xs w-auto"
                            size="txtInterRegular12"
                        >
                            {props?.booking_status}
                        </Text>
                    </div>
                </div>
            </div>
        </>
    )
};

ListBookings.defaultProps = {
    restaurantimage: "images/img_rectangle31.png",
    rating: "4.7",
    restaurantname: "12 Chairs Cafe Soho, 4994",
    restaurantlocation: "New York City",
};

export default ListBookings;

