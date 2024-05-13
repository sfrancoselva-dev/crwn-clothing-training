import { createContext, useState, useEffect } from "react";
import { authStateChangedInterface, createFbDocFromAuth } from "../utils/firebase";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
});


export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};


    useEffect(() => {
        const unsubscribe = authStateChangedInterface(async (user) => {
            if(user) {
                await createFbDocFromAuth(user);
            }
           setCurrentUser(user)
        });

        return unsubscribe;
    },[]);

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}