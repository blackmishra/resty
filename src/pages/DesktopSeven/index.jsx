import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import DesktopSixteenHeader from "components/DesktopSixteenHeader";
import DesktopTwelveColumn from "components/DesktopTwelveColumn";
import LoginButton from "components/LoginComp";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'universal-cookie';



const DesktopSevenPage = () => {
  const navigate = useNavigate();
  const base_url = "http://127.0.0.1:8000/"
  const cookies = new Cookies();


  const makeRequest = (req, res) => {
    fetch(base_url + "booking_request", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        rest_name: Cookies.get('rest_name'),
        rest_id: Cookies.get('res_id'),
        reservation_date: Cookies.get('reservation_date'),
        time_slot: Cookies.get('time_slot'),
        guests_size: Cookies.get('guests_size')

      })

    })
      .then((response) => {
        console.log(response.status)
        if (response.ok) {
          toast.success("Reservation request added!")
          let path = `/desktopseven`;
          setTimeout(() => {
            navigate(path, { replace: true, state: {} });
          }, 3000);
        }
        else {
          toast.error("Bad Request. Please try again.")
        }

      })
  }
  const { user, isAuthenticated, isLoading, loginWithRedirect,logout } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }
    const logoutWithRedirect = () =>
    logout({
        logoutParams: {
          returnTo: window.location.origin,
        }
    });

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-copperplate items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-end justify-start w-full">
          <DesktopSixteenHeader className="border-b border-blue_gray-100_01 border-solid flex flex-col gap-2.5 h-[74px] md:h-auto items-center justify-center max-w-auto p-2.5 w-full" />
          <div className="flex md:flex-col flex-row font-inter md:gap-10 items-start justify-between max-w-[1236px] mx-auto md:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[105px] items-start justify-start md:mt-0 mt-[54px]">
             
              {!isAuthenticated && (
              <div className="flex flex-col gap-[42px] items-start justify-start w-auto">
                  <Text
                    className="leading-[32.00px] max-w-[296px] md:max-w-full text-3xl sm:text-[26px] md:text-[28px] text-gray-900 tracking-[-0.75px]"
                    size="txtInterExtraBold30"
                  >
                    Log in and compete your booking
                  </Text>
                  
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-col gap-4 items-start justify-start w-[343px]">
                      
                      
                      <Button
                        className="cursor-pointer font-medium text-base text-center w-full"
                        shape="round"
                        color="red_400"
                        size="sm"
                        variant="fill"
                        onClick={() => loginWithRedirect()}
                      >
                        Login
                      </Button>
                      
                      <Button
                        className="common-pointer !text-gray-900 cursor-pointer font-medium text-base text-center w-full"
                        onClick={() => navigate("/desktopten")}
                        shape="round"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        Don’t have an account? Sign Up
                      </Button>

                    </div>
                  </div>
                </div>
                
              </div>
              )}
              {isAuthenticated && (
              <div className="flex flex-col gap-[42px] items-start justify-start w-auto">
                  <Text
                    className="leading-[32.00px] max-w-[296px] md:max-w-full text-3xl sm:text-[26px] md:text-[28px] text-gray-900 tracking-[-0.75px]"
                    size="txtInterExtraBold30"
                  >
                    Already Logged in! 
                    
                  </Text>
                  Click below to compete your booking
                  <Button
                        className="cursor-pointer font-medium text-base text-center w-full"
                        shape="round"
                        color="red_400"
                        size="sm"
                        variant="fill"
                        onClick={makeRequest}
                      >
                        Continue
                      </Button>
              </div>
              )}
            </div>
            <Img
              className="h-[946px] md:h-auto object-cover"
              src="images/img_frame75_946x720.png"
              alt="frameSeventyFive"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopSevenPage;
