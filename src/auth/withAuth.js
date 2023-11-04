import { CookieHandler } from "@/util/cookie";
import Router from "next/router";
import { useEffect } from "react";

const withAuth = (Component) => {
    const Auth = (props) => {
        useEffect(() => {
            const token = CookieHandler.getCookie('Authorization')

            if (!token) Router.push("/login");
        }, []);

        return <Component {...props} />;
    };

    return Auth;
};

export default withAuth;