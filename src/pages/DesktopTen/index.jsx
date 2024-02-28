import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import { Button, Img, Input, Text } from "components";
import DesktopSixteenHeader from "components/DesktopSixteenHeader";
import DesktopTwelveColumn from "components/DesktopTwelveColumn";
import { ToastContainer, toast } from 'react-toastify';
import Cookies from 'js-cookie';


const DesktopTenPage = () => {
  const navigate = useNavigate();
  const base_url = process.env.REACT_APP_BASE_URL
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();
  const user_email = user.email
  const [resy_email, setResyEmail] = useState("")
  const [resy_pwd, setResyPwd] = useState("")
  const [user_name, setUserName] = useState("")

  const add_user_to_db = (req, res) => {
    console.log('Adding user')
    console.log(resy_email, resy_pwd, user_name, user_email)
    const user_det_params = {
      "resy_email": resy_email,
      "resy_pwd": resy_pwd,
      "user_name": user_name,
      "user_email": user.email,
    }
    fetch(base_url + "add_user", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user_det_params)

    })
    .then(response => {
      if (response.status == 201) {
        toast.success("RESY Account details added!")
        navigate("/desktopseven")
        
      }

    })
  }

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-copperplate items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-end justify-start w-full">
          <DesktopSixteenHeader className="border-b border-blue_gray-100_01 border-solid flex flex-col gap-2.5 h-[74px] md:h-auto items-center justify-center max-w-[1440px] p-2.5 w-full" />
          <div className="flex md:flex-col flex-row font-inter md:gap-10 items-start justify-between max-w-[1236px] mx-auto md:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[103px] items-start justify-start md:mt-0 mt-[54px]">
            <ToastContainer />
              
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
              <div className="flex flex-col gap-[42px] items-start justify-start w-auto">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900 tracking-[-0.75px] w-auto"
                  size="txtInterExtraBold30"
                >
                  Save Resy Account details
                </Text>
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-col gap-4 items-start justify-start w-auto">
                    <div className="flex flex-col gap-4 items-start justify-start w-[343px]">
                    <div className="flex flex-col gap-4 items-start justify-start w-full">
                    <Text
                      className="leading-[32.00px] max-w-[296px] md:max-w-full text-3xl sm:text-[26px] md:text-[28px] text-gray-900 tracking-[-0.75px]"
                      size="txtInterExtraBold30"
                    >

                    </Text>
                    <input placeholder="You name..." value={user_name}
                      onChange={(e) => setUserName(e.target.value)} />
                    <input placeholder="RESY Email..." value={resy_email}
                      onChange={(e) => setResyEmail(e.target.value)} />
                    <input type="password" value={resy_pwd}
                      placeholder="RESY Password..." onChange={(e) => setResyPwd(e.target.value)} />


                    <Button
                      className="common-pointer cursor-pointer font-medium text-base text-center w-full"
                      onClick={add_user_to_db}
                      shape="round"
                      color="red_400"
                      size="sm"
                      variant="fill"
                    >
                      Save Resy Account details
                    </Button>
                  </div>
                      <Button
                        className="cursor-pointer font-medium text-base text-center w-full"
                        shape="round"
                        color="red_400"
                        size="sm"
                        variant="fill"
                        onClick={() => navigate("/desktopnine")}
                      >
                        Sign up
                      </Button>
                      <Button
                        className="common-pointer cursor-pointer font-medium text-base text-center w-full"
                        onClick={() => navigate("/desktopseven")}
                        shape="round"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        Already have an account? Login
                      </Button>
                    </div>
                    <Text
                      className="leading-[20.00px] text-center text-gray-600 text-sm"
                      size="txtInterRegular14"
                    >
                      <span className="text-gray-600 font-inter font-normal">
                        <>
                          By register you agree with our
                          <br />
                        </>
                      </span>
                      <span className="text-gray-900 font-inter font-normal">
                        terms
                      </span>
                      <span className="text-gray-600 font-inter font-normal">
                        {" "}
                      </span>
                      <span className="text-gray-900 font-inter font-normal">
                        and
                      </span>
                      <span className="text-gray-600 font-inter font-normal">
                        {" "}
                      </span>
                      <span className="text-gray-900 font-inter font-normal">
                        conditions
                      </span>
                      <span className="text-gray-600 font-inter font-normal">
                        {" "}
                        and
                      </span>
                      <span className="text-gray-900 font-inter font-normal">
                        {" "}
                        privacy policy
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="h-[946px] md:h-auto object-cover"
              src="images/img_frame75.png"
              alt="frameSeventyFive"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopTenPage;
