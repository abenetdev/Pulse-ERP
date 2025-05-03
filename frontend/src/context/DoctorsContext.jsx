import { createContext, useEffect, useState } from "react";
import axios from "axios"
export const AppContext = createContext();


export default function AppContextProvider(props){
    const [doctors, setDoctors] = useState([]);
    //const [aToken, setAToken] = useState(localStorage.getItem("aToken")? localStorage.getItem("aToken") : "");
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const fetchDoctorsFromTheDatabase = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/users/all-doctors');
            if (response.status === 200) {
                setDoctors(response.data.data);
            } else {
                console.log("Error fetching doctors:", response.statusText);
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchDoctorsFromTheDatabase();
    }, []);
    const currency = "$"
    const value = {
        doctors,
        currency
    }

    return <AppContext.Provider value={value}>
             {props.children}
          </AppContext.Provider>
}