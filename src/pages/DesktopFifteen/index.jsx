import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useState, useEffect } from 'react'

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";
import DesktopSixteenHeader from "components/DesktopSixteenHeader";
import DesktopTwelveColumn from "components/DesktopTwelveColumn";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const DesktopFifteenPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();
  var user_email = 'user@example.com';
  const base_url = process.env.REACT_APP_BASE_URL
  if (isAuthenticated) {
    user_email = user.email
  }

  const makeRequest = (req, res) => {
    // console.log("Printing from Makerequest");

    const user_params = {
      user_name: username,
      user_email: user_email,
      resy_email: email,
      resy_pwd: password,
    }
    // fetchData()
    fetch(base_url + "add_user", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user_params)

    })
      .then(response => {
        console.log(response.status)
        console.log(response.json())
        if (response.status == 201) {
          toast.success("User details added!")
          let path = `/desktopseven`;
          setTimeout(() => {
            navigate(path, { state: {} });
          }, 1500);
        }
        else {
          toast.error("Bad Request. Please try again.")
        }
      })

  }

  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-copperplate items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-end justify-start w-full">
          <DesktopSixteenHeader className="bg-white-A700 border-b border-blue_gray-100_01 border-solid flex flex-col gap-2.5 h-[74px] md:h-auto items-center justify-center max-w-[1440px] p-2.5 w-full" />
          <div className="flex md:flex-col flex-row font-inter md:gap-10 items-start justify-between max-w-[1236px] mx-auto md:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[106px] items-start justify-start md:mt-0 mt-[54px]">
              <div className="flex flex-col items-start justify-start w-auto">
                {/* <div className="flex flex-row gap-3 items-center justify-start w-auto">
                  <Text
                    className="common-pointer text-base text-gray-900 w-auto"
                    size="txtInterRegular16"
                    onClick={() => navigate("/desktopthree")}
                  >
                    Profile
                  </Text>
                  <Img
                    className="h-4 w-4"
                    src="images/img_chevronleft_gray_900.svg"
                    alt="chevronleft"
                  />
                  <Text
                    className="text-base text-gray-900 w-auto"
                    size="txtInterRegular16"
                  >
                    Edit Profile
                  </Text>
                </div> */}

              </div>
              <div className="flex flex-col gap-8 items-start justify-start w-auto">
                <Text
                  className="leading-[32.00px] text-3xl sm:text-[26px] md:text-[28px] text-gray-900 tracking-[-0.75px]"
                  size="txtInterExtraBold30"
                >
                  <>
                    Edit your
                    <br />
                    information
                  </>
                </Text>
                <ToastContainer />
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-col gap-4 items-start justify-start w-[343px]">
                    <Input id="fu_name"
                      className='form-input'
                      type='text'
                      name='username'
                      placeholder='Enter your Name'
                      value={username}
                      onChange={(value) => setUsername(value)} />
                    <Input id="fu_email"
                      className='form-input'
                      type='text'
                      placeholder="RESY Email"
                      name='email'
                      value={email}
                      onChange={(e) => setEmail(e)} />
                    <Input id="fu_pwd"
                      className='form-input'
                      type='password'
                      placeholder="RESY Password"
                      name='password'
                      value={password}
                      onChange={(e) => setPassword(e)} />
                

                    <Button
                      className="cursor-pointer font-medium text-base text-center w-full"
                      shape="round"
                      color="red_400"
                      size="sm"
                      variant="fill"
                      onClick={makeRequest}
                    >
                      Update
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <Img
              className="h-[946px] md:h-auto object-cover"
              src="images/img_frame75_1.png"
              alt="frameSeventyFive"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopFifteenPage;
