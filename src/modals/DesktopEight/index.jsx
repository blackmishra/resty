import React from "react";
import { default as ModalProvider } from "react-modal";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const DesktopEightModal = (props) => {
  const navigate = useNavigate();

  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[24%]"
      overlayClassName="bg-gray-900_cc fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col gap-5 items-center justify-start pb-4 pt-5 px-4 md:px-5 rounded-lg w-[343px]">
          <div className="flex flex-col gap-4 items-center justify-start w-full">
            <Button
              className="flex h-12 items-center justify-center w-12"
              shape="circle"
              color="deep_orange_50"
              size="sm"
              variant="fill"
            >
              <Img className="h-6" src="images/img_warning.svg" alt="warning" />
            </Button>
            <div className="flex flex-col gap-2 items-center justify-start w-full">
              <Text
                className="text-center text-gray-900 text-lg w-full"
                size="txtInterMedium18Gray900"
              >
                Cancel Reservation
              </Text>
              <Text
                className="leading-[20.00px] max-w-[311px] md:max-w-full text-center text-gray-600 text-sm"
                size="txtInterRegular14"
              >
                Are you sure you want to cancel your reservation?
              </Text>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-start justify-start w-full">
            <Button
              className="common-pointer cursor-pointer font-medium rounded-md text-base text-center w-full"
              onClick={() => navigate("/desktoptwo")}
              shape="round"
              color="red_700"
              size="sm"
              variant="fill"
            >
              Yes, I Am Sure
            </Button>
            <Button
              className="common-pointer border border-blue_gray-100_01 border-solid cursor-pointer font-medium rounded-md text-base text-center w-full"
              onClick={() => navigate("/desktopfour")}
              shape="round"
              color="white_A700"
              size="sm"
              variant="fill"
            >
              No, Don’t
            </Button>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default DesktopEightModal;
