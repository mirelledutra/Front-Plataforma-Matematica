'use client'
import { CookieHandler } from "@/util/cookie";

const useAuth = () => {
  const user = CookieHandler.getCookie("User");
  debugger;
  return JSON.parse(user);
};

export default useAuth;
