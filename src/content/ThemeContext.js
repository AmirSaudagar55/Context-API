import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(
    {
        mode : "light",
        darkTheme : ()=>{},
        lightTheme : ()=>{}
    }
);
export default ThemeContext;

export const ThemeContextProvider = ThemeContext.Provider;

export const useThemeContext = ()=>
{
    return useContext(ThemeContext);
}
