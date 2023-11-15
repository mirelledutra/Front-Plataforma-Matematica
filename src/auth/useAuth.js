'use client'
import { CookieHandler } from "@/util/cookie";

const useAuth = () => {
  const user = CookieHandler.getCookie("User");
  
  return JSON.parse(user);
};

export default useAuth;
