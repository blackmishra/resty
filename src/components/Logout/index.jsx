import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Cookies from 'js-cookie';

const LogoutButton = () => {
  const { logout } = useAuth0();
  const logout_fun = () => {
    Cookies.remove('rest_name')
    Cookies.remove('rest_id')
    Cookies.remove('reservation_date')
    Cookies.remove('time_slot')
    Cookies.remove('guests_size')
    logout({ logoutParams: { returnTo: window.location.origin + '/desktop' } })
  }

  return (
    <button onClick={logout_fun}>
      Log Out
    </button>
  );
};

export default LogoutButton;