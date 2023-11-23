import React from "react";
import Cookies from 'universal-cookie';

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import DesktopSixBadge from "components/DesktopSixBadge";
import DesktopSixImage from "components/DesktopSixImage";

import DesktopSixteenHeader from "components/DesktopSixteenHeader";
import DesktopTwelveColumn from "components/DesktopTwelveColumn";
import DesktopTwelveDate from "components/DesktopTwelveDate";
import LoginButton from "components/LoginComp";

const DesktopNinePage = () => {
  const navigate = useNavigate();
  const cookies = new Cookies(null, { path: '/' });

  console.log(cookies.get('rest_name'))
  const rest_data = cookies.get('rest_details_ck')
  console.log(rest_data)

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-copperplate gap-[54px] items-center justify-start mx-auto pb-[308px] w-full">
        <DesktopSixteenHeader className="border-b border-blue_gray-100_01 border-solid flex flex-col gap-2.5 h-[74px] md:h-auto items-center justify-center max-w-[1440px] p-2.5 w-full" />
        <div className="flex flex-col font-inter gap-[55px] items-start justify-start max-w-[1032px] mx-auto md:px-5 w-full">
          <Button
            className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[66px]"
            onClick={() => navigate("/desktoptwelve")}
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
                    {cookies.get('rest_name')}
                  </Text>
                  <Text
                    className="text-gray-600 text-sm w-auto"
                    size="txtInterRegular14"
                  >
                    New York City
                  </Text>
                </div>
                <DesktopSixBadge props={rest_data}
                className="bg-gray-100 flex flex-row gap-0.5 items-center justify-center pl-2 pr-1 py-0.5 rounded-[10px] w-auto" />
              </div>
              <div className="flex flex-col gap-6 items-start justify-start w-[520px] sm:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Img
                    className="h-[303px] md:h-auto object-cover rounded-bl-lg rounded-br-lg w-full"
                    src={rest_data['images_list'][0]}
                    alt="rectangleThirtyOne"
                  />
                </div>
                <div className="flex sm:flex-col flex-row gap-4 items-start justify-between w-full">
                  <DesktopSixImage props={rest_data} />
                </div>
              </div>
            </div>
            <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start w-auto sm:w-full">
              <div className="bg-gray-50 border border-gray-200 border-solid flex flex-col h-[92px] md:h-auto items-start justify-start p-4 rounded-[16px] shadow-bs w-[455px] sm:w-full">
                <div className="flex flex-row gap-[18px] items-center justify-start w-full">
                  <Img
                    className="h-[60px] md:h-auto object-cover rounded-lg w-[60px]"
                    src={rest_data['images_list'][0]}
                    alt="rectangleThirty"
                  />
                  <div className="flex flex-col gap-1 h-12 md:h-auto items-start justify-between w-auto">
                    <Text
                      className="text-base text-gray-900 w-auto"
                      size="txtInterMedium16"
                    >
                      {cookies.get('rest_name')}
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
              <div className="bg-white-A700 border border-gray-200 border-solid flex flex-col gap-6 items-start justify-start p-4 rounded-[16px] shadow-bs1 w-[455px] sm:w-full">
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="leading-[24.00px] max-w-[311px] md:max-w-full text-base text-gray-900"
                    size="txtInterMedium16"
                  >
                    Finish setting up the account by adding your Resy account details.
                  </Text>
                  <div className="flex flex-row gap-2 items-start justify-start w-auto">
                    {/* <Button
                      className="common-pointer cursor-pointer font-medium min-w-[70px] rounded-[15px] text-center text-xs"
                      onClick={() => navigate("/desktoptwelve")}
                      color="gray_200"
                      size="xs"
                      variant="outline"
                    >
                      Sign up
                    </Button>
                    <Button
                      className="cursor-pointer font-medium min-w-[58px] rounded-[15px] text-center text-xs"
                      color="gray_900"
                      size="xs"
                      variant="fill"
                    >
                      Login
                    </Button> */}
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <DesktopTwelveColumn
                    className="flex flex-col gap-1 items-start justify-start w-full"
                    labelOne="Mail"
                  />
                  <div className="flex flex-col items-center justify-start w-full">
                    <DesktopTwelveColumn className="flex flex-col gap-1 items-start justify-start w-[423px] sm:w-full" />
                  </div>
                  <DesktopTwelveDate
                    className="bg-white-A700 flex flex-row gap-2 items-center justify-start w-[311px]"
                    scheduletext="Agree to pay cancellation charges."
                  />
                  <Button
                    className="common-pointer cursor-pointer font-medium text-base text-center w-full"
                    onClick={() => navigate("/desktopfive")}
                    shape="round"
                    color="red_400"
                    size="sm"
                    variant="fill"
                  >
                    Complete Reservation
                  </Button>
                  <LoginButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopNinePage;
