import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { useNavigate } from "react-router-dom";

import { Button, Img, SelectBox, Text } from "components";
import DesktopSixBadge from "components/DesktopSixBadge";
import DesktopSixteenHeader from "components/DesktopSixteenHeader";
import LogoutButton from "components/Logout";

const thisMonthOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const DesktopThreePage = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      <div className="bg-gray-50 flex flex-col gap-[54px] justify-start mx-auto pb-40 w-full">
        <div className="flex flex-col font-copperplate items-center w-full">
          <DesktopSixteenHeader className="bg-white-A700 border-b border-blue_gray-100_01 border-solid flex flex-col gap-2.5 h-[74px] md:h-auto items-center justify-center max-w-auto p-2.5 w-full" />
        </div>
        {/* <Button
          className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[66px] md:ml-[0] ml-[204px]"
          onClick={() => navigate("/desktopseven")}
          leftIcon={
            <Img
              className="h-4 mt-px mb-0.5 mr-3"
              src="images/img_chevron_left.svg"
              alt="Chevron left"
            />
          }
        >
          <div className="font-inter text-base text-gray-900 text-left">
            Back
          </div>
        </Button> */}
        <div className="flex flex-col font-inter items-center md:px-10 sm:px-5 px-[444px] w-full">
          
          <div className="flex flex-col gap-8 items-start justify-start w-auto sm:w-full">
            <div className="flex flex-col gap-11 items-start justify-start w-auto sm:w-full">
              <div
                className="common-pointer flex flex-row gap-4 items-center justify-start w-[41%] md:w-full">
                  
                <div className="bg-white-A700 flex flex-col h-16 items-center justify-start rounded-[50%] shadow-bs w-16">
                  <Img
                      className="rounded-[50%] shadow-bs w-16"
                      src={user.picture} alt={user.name}
                    />
                  
                </div>
                <div className="flex flex-col gap-1.5 items-start justify-start w-[65%]">
                  <div className="flex flex-row gap-1 items-center justify-center w-auto">
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtInterMedium16"
                      style={{ textTransform: 'capitalize' }}
                    >
                      {user.name}
                    </Text>
                    <Img
                      className="h-5 w-5"
                      src="images/img_arrowright.svg"
                      alt="arrowright"
                    />
                  </div>
                  <Text
                    className="text-gray-600 text-sm"
                    size="txtInterRegular14"
                  >
                    {user.email}
                  </Text>
                  <LogoutButton />
                </div>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start w-auto sm:w-full">
                <Text
                  className="text-gray-600 text-sm w-auto"
                  size="txtInterMedium14Gray600"
                >
                  Last Reservations
                </Text>
                <div className="flex flex-col gap-3 items-end justify-start w-auto sm:w-full">
                  <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                    <div className="bg-gray-50 border border-gray-200 border-solid flex flex-col gap-3 items-start justify-start p-4 rounded-[16px] shadow-bs w-[552px] sm:w-full">
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
                  <Button
                    className="common-pointer border border-blue_gray-100_01 border-solid cursor-pointer font-medium text-base text-center w-full"
                    onClick={() => navigate("/desktop")}
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    View All Reservations
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start w-[552px] sm:w-full">
              <div className="flex flex-row gap-4 items-start justify-between w-full">
                <Text
                  className="text-gray-600 text-sm w-auto"
                  size="txtInterMedium14Gray600"
                >
                  History
                </Text>
                <SelectBox
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
                />
              </div>
              <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col items-center justify-start p-4 rounded-[16px] shadow-bs1 w-[552px] sm:w-full">
                <div className="flex flex-col items-start justify-start w-[524px] sm:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="sm:gap-5 gap-[7px] grid sm:grid-cols-1 grid-cols-11 justify-center min-h-[auto] w-full">
                      <div className="flex flex-1 flex-col items-center justify-start px-2 w-full">
                        <Text
                          className="text-center text-gray-600 text-xs"
                          size="txtInterSemiBold12"
                        >
                          01
                        </Text>
                        <div className="bg-white-A700 border-4 border-gray-200 border-solid h-[21px] mt-1 rounded-[11px] w-[22px]"></div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start px-2 w-full">
                        <Text
                          className="h-[15px] text-center text-gray-600 text-xs"
                          size="txtInterSemiBold12"
                        >
                          02
                        </Text>
                        <div className="bg-white-A700 border-4 border-gray-200 border-solid h-[21px] mt-1 rounded-[11px] w-[22px]"></div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start px-2 w-full">
                        <Text
                          className="text-center text-gray-600 text-xs"
                          size="txtInterSemiBold12"
                        >
                          03
                        </Text>
                        <div className="bg-white-A700 border-4 border-gray-200 border-solid h-[21px] mt-1 rounded-[11px] w-[22px]"></div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start px-2 w-full">
                        <Text
                          className="text-center text-gray-600 text-xs"
                          size="txtInterSemiBold12"
                        >
                          04
                        </Text>
                        <div className="bg-white-A700 border-4 border-solid border-teal-400 h-[21px] mt-1 rounded-[11px] w-[22px]"></div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start px-2 w-full">
                        <Text
                          className="h-[15px] text-center text-gray-600 text-xs"
                          size="txtInterSemiBold12"
                        >
                          05
                        </Text>
                        <div className="bg-white-A700 border-4 border-gray-200 border-solid h-[21px] mt-1 rounded-[11px] w-[22px]"></div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start px-2 w-full">
                        <Text
                          className="text-center text-gray-600 text-xs"
                          size="txtInterSemiBold12"
                        >
                          06
                        </Text>
                        <div className="bg-white-A700 border-4 border-gray-200 border-solid h-[21px] mt-1 rounded-[11px] w-[22px]"></div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start px-2 w-full">
                        <Text
                          className="h-[15px] text-center text-gray-600 text-xs"
                          size="txtInterSemiBold12"
                        >
                          07
                        </Text>
                        <div className="bg-white-A700 border-4 border-gray-200 border-solid h-[21px] mt-1 rounded-[11px] w-[22px]"></div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start px-2 w-full">
                        <Text
                          className="text-center text-gray-600 text-xs"
                          size="txtInterSemiBold12"
                        >
                          08
                        </Text>
                        <div className="bg-white-A700 border-4 border-gray-200 border-solid h-[21px] mt-1 rounded-[11px] w-[22px]"></div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start px-2 w-full">
                        <Text
                          className="text-center text-gray-600 text-xs"
                          size="txtInterSemiBold12"
                        >
                          09
                        </Text>
                        <div className="bg-white-A700 border-4 border-gray-200 border-solid h-[21px] mt-1 rounded-[11px] w-[22px]"></div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start px-2 w-full">
                        <Text
                          className="text-center text-gray-600 text-xs"
                          size="txtInterSemiBold12"
                        >
                          10
                        </Text>
                        <div className="bg-white-A700 border-4 border-gray-200 border-solid h-[21px] mt-1 rounded-[11px] w-[22px]"></div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start px-2 w-full">
                        <Text
                          className="text-center text-gray-600 text-xs"
                          size="txtInterSemiBold12"
                        >
                          11
                        </Text>
                        <div className="bg-white-A700 border-4 border-gray-200 border-solid h-[21px] mt-1 rounded-[11px] w-[22px]"></div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start px-2 w-full">
                        <Text
                          className="text-center text-gray-600 text-xs"
                          size="txtInterSemiBold12"
                        >
                          12
                        </Text>
                        <div className="bg-white-A700 border-4 border-gray-200 border-solid h-[21px] mt-1 rounded-[11px] w-[22px]"></div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start px-2 w-full">
                        <Text
                          className="text-center text-gray-600 text-xs"
                          size="txtInterSemiBold12"
                        >
                          13
                        </Text>
                        <div className="bg-white-A700 border-4 border-solid border-teal-400 h-[21px] mt-1 rounded-[11px] w-[22px]"></div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start px-2 w-full">
                        <Text
                          className="text-center text-gray-600 text-xs"
                          size="txtInterSemiBold12"
                        >
                          14
                        </Text>
                        <div className="bg-white-A700 border-4 border-gray-200 border-solid h-[21px] mt-1 rounded-[11px] w-[22px]"></div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start px-2 w-full">
                        <Text
                          className="text-center text-gray-600 text-xs"
                          size="txtInterSemiBold12"
                        >
                          15
                        </Text>
                        <div className="bg-white-A700 border-4 border-gray-200 border-solid h-[21px] mt-1 rounded-[11px] w-[22px]"></div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start px-2 w-full">
                        <Text
                          className="text-center text-gray-600 text-xs"
                          size="txtInterSemiBold12"
                        >
                          16
                        </Text>
                        <div className="bg-white-A700 border-4 border-gray-200 border-solid h-[21px] mt-1 rounded-[11px] w-[22px]"></div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start px-2 w-full">
                        <Text
                          className="text-center text-gray-600 text-xs"
                          size="txtInterSemiBold12"
                        >
                          17
                        </Text>
                        <div className="bg-white-A700 border-4 border-solid border-teal-400 h-[21px] mt-1 rounded-[11px] w-[22px]"></div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start px-2 w-full">
                        <Text
                          className="text-center text-gray-600 text-xs"
                          size="txtInterSemiBold12"
                        >
                          18
                        </Text>
                        <div className="bg-white-A700 border-4 border-gray-200 border-solid h-[21px] mt-1 rounded-[11px] w-[22px]"></div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start px-2 w-full">
                        <Text
                          className="text-center text-gray-600 text-xs"
                          size="txtInterSemiBold12"
                        >
                          19
                        </Text>
                        <div className="bg-white-A700 border-4 border-gray-200 border-solid h-[21px] mt-1 rounded-[11px] w-[22px]"></div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start px-2 w-full">
                        <Text
                          className="h-[15px] text-center text-gray-600 text-xs"
                          size="txtInterSemiBold12"
                        >
                          20
                        </Text>
                        <div className="bg-white-A700 border-4 border-gray-200 border-solid h-[21px] mt-1 rounded-[11px] w-[22px]"></div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start px-2 w-full">
                        <Text
                          className="text-center text-gray-600 text-xs"
                          size="txtInterSemiBold12"
                        >
                          21
                        </Text>
                        <div className="bg-white-A700 border-4 border-gray-200 border-solid h-[21px] mt-1 rounded-[11px] w-[22px]"></div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start px-2 w-full">
                        <Text
                          className="h-[15px] text-center text-gray-600 text-xs"
                          size="txtInterSemiBold12"
                        >
                          22
                        </Text>
                        <div className="bg-white-A700 border-4 border-solid border-teal-400 h-[21px] mt-1 rounded-[11px] w-[22px]"></div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start px-2 w-full">
                        <Text
                          className="h-[15px] text-center text-gray-600 text-xs"
                          size="txtInterSemiBold12"
                        >
                          23
                        </Text>
                        <div className="bg-white-A700 border-4 border-gray-200 border-solid h-[21px] mt-1 rounded-[11px] w-[22px]"></div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start px-2 w-full">
                        <Text
                          className="h-[15px] text-center text-gray-600 text-xs"
                          size="txtInterSemiBold12"
                        >
                          24
                        </Text>
                        <div className="bg-white-A700 border-4 border-solid border-teal-400 h-[21px] mt-1 rounded-[11px] w-[22px]"></div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start px-2 w-full">
                        <Text
                          className="h-[15px] text-center text-gray-600 text-xs"
                          size="txtInterSemiBold12"
                        >
                          25
                        </Text>
                        <div className="bg-white-A700 border-4 border-gray-200 border-solid h-[21px] mt-1 rounded-[11px] w-[22px]"></div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start px-2 w-full">
                        <Text
                          className="h-[15px] text-center text-gray-600 text-xs"
                          size="txtInterSemiBold12"
                        >
                          26
                        </Text>
                        <div className="bg-white-A700 border-4 border-solid border-teal-400 h-[21px] mt-1 rounded-[11px] w-[22px]"></div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start px-2 w-full">
                        <Text
                          className="text-center text-gray-600 text-xs"
                          size="txtInterSemiBold12"
                        >
                          27
                        </Text>
                        <div className="bg-white-A700 border-4 border-gray-200 border-solid h-[21px] mt-1 rounded-[11px] w-[22px]"></div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start px-2 w-full">
                        <Text
                          className="h-[15px] text-center text-gray-600 text-xs"
                          size="txtInterSemiBold12"
                        >
                          28
                        </Text>
                        <div className="bg-white-A700 border-4 border-gray-200 border-solid h-[21px] mt-1 rounded-[11px] w-[22px]"></div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start px-2 w-full">
                        <Text
                          className="h-[15px] text-center text-gray-600 text-xs"
                          size="txtInterSemiBold12"
                        >
                          29
                        </Text>
                        <div className="bg-white-A700 border-4 border-gray-200 border-solid h-[21px] mt-1 rounded-[11px] w-[22px]"></div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start px-2 w-full">
                        <Text
                          className="text-center text-gray-600 text-xs"
                          size="txtInterSemiBold12"
                        >
                          30
                        </Text>
                        <div className="bg-white-A700 border-4 border-gray-200 border-solid h-[21px] mt-1 rounded-[11px] w-[22px]"></div>
                      </div>
                      <div className="flex flex-1 flex-col items-center justify-start px-2 w-full">
                        <Text
                          className="text-center text-gray-600 text-xs"
                          size="txtInterSemiBold12"
                        >
                          31
                        </Text>
                        <div className="bg-white-A700 border-4 border-gray-200 border-solid h-[21px] mt-1 rounded-[11px] w-[22px]"></div>
                      </div>
                    </div>
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

export default DesktopThreePage;
