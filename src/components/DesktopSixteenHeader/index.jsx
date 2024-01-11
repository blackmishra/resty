import React from "react";
import { Button, Img, Text } from "components";
import { useNavigate, useLocation, Link } from "react-router-dom";
import DropdownComp from "components/DropdownComp";
import Profile from "components/ProfileComp";




const DesktopSixteenHeader = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-[73%] md:w-full">
          <div className="flex flex-row md:gap-10 items-start justify-between max-w-[1032px] w-full">
            <div className="flex flex-col items-start justify-start">
              <Link to="/desktop">
                <Text
                  className="md:text-2xl sm:text-[22px] text-[26px] text-gray-900 tracking-[-0.52px]"
                  size="txtCopperplate26"

                >
                  RESTY
                </Text>
              </Link>
            </div>
            <Profile />

            {/* <div className="flex flex-col items-center justify-start w-[8%]">

              <Button
                onClick={() => navigate("/desktopthree")}
                className="cursor-pointer flex items-center justify-center min-w-[81px] rounded-[15px]"
                leftIcon={
                  <Img
                    className="h-4 mr-2"
                    src="images/img_user_circle.svg"
                    alt="User circle"
                  />
                }
                color="gray_200"
                size="xs"
                variant="outline"
              >
                <div className="font-inter font-medium text-left text-xs">
                  {props?.profiletext}
                </div>
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

DesktopSixteenHeader.defaultProps = { resty: "RESTY", profiletext: "Profile" };

export default DesktopSixteenHeader;
