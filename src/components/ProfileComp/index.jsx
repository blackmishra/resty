import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from 'react'
import { Button, Img, Text } from "components";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Cookies from 'js-cookie';
import logo from 'assets/images/giphy.gif'


import {
    Collapse,
    Container,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
 
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from "reactstrap";

const Profile = (props) => {
    const navigate = useNavigate();
    const { user, isAuthenticated, isLoading, loginWithRedirect,logout } = useAuth0();
    const [user_email, setUserEmail] = useState('')

    if (isAuthenticated){
        // user_email = user.email
        Cookies.set('user_email', user.email, { path: '/' });
      }
    if (isLoading) {
        // return <div>Loading ...</div>;
        if (isLoading) {
          <img src={logo} />
          // return <div>Loading ...</div>;
        }
    }
    const logoutWithRedirect = () =>
    logout({
        logoutParams: {
          returnTo: window.location.origin,
        }
    });

    return (
        <Nav className="d-none d-md-block" navbar>
        {!isAuthenticated && (
            <NavItem>
              <Button
                id="qsLoginBtn"
                color="primary"
                className="btn-margin"
                onClick={() => loginWithRedirect()}
              >
                Log in
              </Button>
            </NavItem>
          )}
        
        {isAuthenticated && (
            //   <div>
            //     <img src={user.picture} alt={user.name} />
            //     <h2>{user.name}</h2>
            //     <p>{user.email}</p>
            //   </div>
            <div className="flex flex-col items-center justify-start w-[20%]">
                <Button
                    onClick={() => navigate("/desktopthree")}
                    className="cursor-pointer flex items-center justify-center min-w-[81px] rounded-[15px]"
                    leftIcon={
                        <Img
                            className="h-4 mr-2"
                            src={user.picture} alt={user.name}
                        />
                    }
                    color="gray_200"
                    size="xs"
                    variant="outline"
                >

                    <Text
                        className="font-inter font-medium text-left text-xs"
                        size="txtInterMedium16"
                        style={{ textTransform: 'capitalize' }}
                    >
                        {user.name}
                    </Text>
                </Button>
            </div>
        )}
        </Nav>

    );


};

export default Profile;