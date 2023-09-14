import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";
import DesktopSixBadge from "components/DesktopSixBadge";
import DesktopSixteenHeader from "components/DesktopSixteenHeader";

const DesktopFourPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-copperplate gap-[54px] items-center justify-start mx-auto pb-72 w-full">
        <DesktopSixteenHeader className="bg-white-A700 border-b border-blue_gray-100_01 border-solid flex flex-col gap-2.5 h-[74px] md:h-auto items-center justify-center max-w-[1440px] p-2.5 w-full" />
        <div className="flex flex-col font-inter gap-[55px] items-start justify-start max-w-[1032px] mx-auto md:px-5 w-full">
          <Button
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
          </Button>
          <div className="flex md:flex-col flex-row gap-14 items-start justify-start max-w-[1032px] w-full">
            <div className="flex sm:flex-1 flex-col gap-8 items-start justify-start w-auto sm:w-full">
              <div className="flex flex-row gap-8 items-start justify-between w-full">
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
              <div className="flex flex-col gap-6 items-start justify-start w-[520px] sm:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[303px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                    src="images/img_rectangle31.png"
                    alt="rectangleThirtyOne"
                  />
                </div>
                <div className="flex sm:flex-col flex-row gap-4 items-start justify-between w-full">
                  <Img
                    className="sm:flex-1 h-[67px] md:h-auto object-cover rounded-lg w-[92px] sm:w-full"
                    src="images/img_rectangle31.png"
                    alt="rectangleThirtyOne_One"
                  />
                  <Img
                    className="sm:flex-1 h-[67px] md:h-auto object-cover rounded-lg w-[92px] sm:w-full"
                    src="images/img_rectangle31.png"
                    alt="rectangleThirtyTwo"
                  />
                  <Img
                    className="sm:flex-1 h-[67px] md:h-auto object-cover rounded-lg w-[92px] sm:w-full"
                    src="images/img_rectangle31.png"
                    alt="rectangleThirtyThree"
                  />
                  <Img
                    className="sm:flex-1 h-[67px] md:h-auto object-cover rounded-lg w-[92px] sm:w-full"
                    src="images/img_rectangle31.png"
                    alt="rectangleThirtyFour"
                  />
                  <Img
                    className="sm:flex-1 h-[67px] md:h-auto object-cover rounded-lg w-[92px] sm:w-full"
                    src="images/img_rectangle31.png"
                    alt="rectangleThirtyFive"
                  />
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
                          color="gray_100_01"
                          size="xs"
                          variant="fill"
                        >
                          Approved
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
                          348512
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
                          454671
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
                          Friday, August 15
                        </Text>
                      </div>
                    </div>
                    <Button
                      className="common-pointer !text-red-700 border border-blue_gray-100_01 border-solid cursor-pointer font-medium text-base text-center w-full"
                      onClick={() => navigate("/desktopeight")}
                      shape="round"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    >
                      Cancel Reservation
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopFourPage;
