import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const UserAuthContext = createContext();


export default function UserAuthContextProvider(props) {
    const [token, setToken] = useState(localStorage.getItem("aToken") ? localStorage.getItem("aToken") : false);
    const [user, setUser] = useState([]);
    const naviagete = useNavigate();
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const UserAuthentication = async () => {
        try {
            const response = await axios.post(backendUrl + '/api/user/login');
            if (response.data.success) {
                setToken(response.data.token);
                localStorage.setItem("aToken", response.data.token);
                setUser(response.data.user);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const value = {
        token,
        setToken,
        user,
        setUser,
    };
    
    useEffect(() => {
        UserAuthentication()
        naviagete('/')
    }, []);
return(
    <UserAuthContext.Provider value={value}>
        {props.children}
    </UserAuthContext.Provider>
)
}
