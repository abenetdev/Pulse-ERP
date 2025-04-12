import { createContext } from "react";

export const AppContext = createContext();


const AppContextProvider = (props) => {
    const value = {};

    return <AppContext value={value}>
           {props.children}
         </AppContext>
};

export default AppContextProvider;