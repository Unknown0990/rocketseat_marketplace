import { useState } from "react";

export const useRegisterViewModel = () => {
    const [userData, setUserData] = useState({
        username: "devEdu",
        birthday: "10-30-26"
    })

    return {
        userData, 
        setUserData
    }; 
}