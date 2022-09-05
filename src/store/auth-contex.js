import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogOut: () => { },
    onLogIn: (email, password) => { },
})

export const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedLoggedInUserInformation = localStorage.getItem("isLoggedIn");

        if (localStorage.getItem("isLoggedIn") === "1") {
            setIsLoggedIn(true);
        }
    }, [])



    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    }
    const loginHandler = () => {
        localStorage.setItem("isLoggedIn", "1");
        setIsLoggedIn(true);
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogOut: logoutHandler,
                onLogIn: loginHandler
            }}
        >
            {props.children}
        </AuthContext.Provider >
    );
}

export default AuthContext;