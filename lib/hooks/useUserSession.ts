import { useEmailCloaker } from "helpers";
import { useEffect, useState } from "react";

export default function useUserSession() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      const userData = {
        name: sessionStorage.getItem("user"),
        uid: sessionStorage.getItem("uid"),
        email: useEmailCloaker(sessionStorage.getItem("email")),
        emailIsVerified: Boolean(sessionStorage.getItem("emailIsVerified")),
      };
      setIsLoggedIn(true);
      setUserData(userData);
    }
  }, []);

  return { isLoggedIn, setIsLoggedIn, userData };
}
