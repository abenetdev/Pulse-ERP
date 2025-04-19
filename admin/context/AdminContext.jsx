import axios from "axios";
import { createContext, useState } from "react";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
    const [aToken, setAToken] = useState(localStorage.getItem("aToken")? localStorage.getItem("aToken"):"");
    const [doctors, setDoctors] = useState([]);
    const [doctorDetail, setDoctorDetail] = useState({});
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const fetchDoctors = async () => {
        try {
            const response = await axios.get(backendUrl + 'api/admin/get-doctors',{
                headers: {
                    Authorization: `Bearer ${aToken}`,
                    "Content-Type": "multipart/form-data",
                },
            });
            if(response.data){
                setDoctors(response.data.data);
                //console.log(response.data.data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const fetchDoctorDetail = async (id) => {
        try {
            const response = await axios.get(backendUrl + `api/admin/getDoctorsDetail/${id}`, {
                params: { id },
                headers: {
                    Authorization: `Bearer ${aToken}`,
                },
            });
            if (response.data.success) {
                setDoctorDetail(response.data.data);
                //console.log(response.data.data);
            } else {
                console.error("Failed to fetch doctor information:", response.data.message);
            }
        } catch (error) {
            console.error("Error fetching doctor information:", error);
        }
    }

    const value = {
        aToken, 
        setAToken, 
        backendUrl, 
        fetchDoctors, 
        doctors, 
        setDoctors,
        doctorDetail,
        setDoctorDetail,
        fetchDoctorDetail,
    };
    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    );
};

export default AdminContextProvider;
