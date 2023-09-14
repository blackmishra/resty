import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, List, SelectBox, Text } from "components";
import DesktopSixteenHeader from "components/DesktopSixteenHeader";

const thisMonthOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const EmptyStatesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col gap-[54px] justify-start mx-auto pb-52 w-full">
        <div className="flex flex-col font-copperplate items-center w-full">
          <DesktopSixteenHeader className="bg-white-A700 border-b border-blue_gray-100_01 border-solid flex flex-col gap-2.5 h-[74px] md:h-auto items-center justify-center max-w-[1440px] p-2.5 w-full" />
        </div>
        <Button
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
        </Button>
        <div className="flex flex-col font-inter items-center md:px-10 sm:px-5 px-[444px] w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-col items-start justify-start w-auto">
              <div
                className="common-pointer flex flex-row gap-4 items-center justify-between w-full"
                onClick={() => navigate("/desktopfifteen")}
              >
                <div className="bg-white-A700 flex flex-col h-16 items-center justify-start rounded-[50%] shadow-bs w-16">
                  <div className="bg-gray-900 flex flex-col h-16 items-center justify-end pl-5 pt-5 rounded-[50%] w-16">
                    <Text
                      className="text-center text-lg text-white-A700"
                      size="txtInterMedium18"
                    >
                      EA
                    </Text>
                    <div className="bg-gray-50 flex flex-col h-5 items-center justify-start rounded-[50%] w-5">
                      <Img
                        className="h-5 rounded-[50%] w-5"
                        src="images/img_pluscircle.svg"
                        alt="pluscircle"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 items-start justify-start w-[65%]">
                  <div className="flex flex-row gap-1 items-center justify-center w-auto">
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtInterMedium16"
                    >
                      Enes Aktaş
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
                    enes@deserve.studio
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start mt-11 w-[552px] sm:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-[552px] sm:w-full">
                <Text
                  className="text-gray-600 text-sm w-auto"
                  size="txtInterMedium14Gray600"
                >
                  Last Reservations
                </Text>
                <div className="bg-gray-50 border border-gray-200 border-solid flex flex-col items-center justify-start p-2 rounded-[16px] shadow-bs w-full">
                  <div className="flex flex-col gap-2 items-center justify-start w-full">
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-[99%] md:w-full">
                      <div className="flex flex-col gap-1 items-start justify-start w-auto">
                        <Text
                          className="text-base text-gray-900 w-auto"
                          size="txtInterMedium16"
                        >
                          No Reservation found
                        </Text>
                        <Text
                          className="text-gray-600 text-sm w-auto"
                          size="txtInterRegular14"
                        >
                          Create reservation today
                        </Text>
                      </div>
                      <Button
                        className="flex h-16 items-center justify-center w-16"
                        shape="round"
                        color="blue_gray_100_01"
                        size="md"
                        variant="outline"
                      >
                        <Img
                          className="h-8"
                          src="images/img_calendar_blue_gray_700.svg"
                          alt="calendar"
                        />
                      </Button>
                    </div>
                    <div className="bg-white-A700 flex flex-col items-center justify-start p-2 rounded-[10px] shadow-bs w-full">
                      <div className="flex flex-col items-center justify-start pb-1 w-[99%] md:w-full">
                        <List
                          className="flex flex-col gap-3 items-center w-full"
                          orientation="vertical"
                        >
                          <div className="flex flex-1 sm:flex-col flex-row gap-[19px] items-start justify-between my-0 w-full">
                            <div className="flex flex-col items-center justify-start w-4">
                              <Img
                                className="h-4 w-4"
                                src="images/img_users_blue_gray_100_01.svg"
                                alt="users"
                              />
                            </div>
                            <div className="bg-gradient1  h-[13px] sm:mt-0 mt-0.5 rounded-md w-[94%]"></div>
                          </div>
                          <div className="flex flex-1 sm:flex-col flex-row gap-[19px] items-start justify-between my-0 w-full">
                            <div className="flex flex-col items-center justify-start w-4">
                              <Img
                                className="h-4 w-4"
                                src="images/img_calendar_blue_gray_100_01.svg"
                                alt="calendar"
                              />
                            </div>
                            <div className="bg-gradient1  h-[13px] sm:mt-0 mt-0.5 rounded-md w-[94%]"></div>
                          </div>
                        </List>
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  className="common-pointer cursor-pointer font-medium text-base text-center w-full"
                  onClick={() => navigate("/desktopfive")}
                  shape="round"
                  color="red_400"
                  size="sm"
                  variant="fill"
                >
                  Create Reservation
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start justify-start mt-8 w-[552px] sm:w-full">
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

export default EmptyStatesPage;
