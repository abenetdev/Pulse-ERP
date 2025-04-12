import { createContext } from "react";

export const DoctorsContext = createContext();


const DoctorsContextProvider = (props) => {
    const value = {};

    return <DoctorsContext value={value}>
           {props.children}
         </DoctorsContext>
};

export default DoctorsContextProvider;