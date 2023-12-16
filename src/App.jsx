import { useState } from 'react'
import './App.css'
import { ThemeContextProvider } from './content/ThemeContext'
import ToggleSwitch from "./Components/ToggleSwitch"
import Cards from "./Components/Cards"
import { useEffect } from 'react'

function App() {

  const [mode, setMode] = useState("light")

  function darkTheme()
  {
    setMode("dark")
  }

  function lightTheme()
  {
    setMode("light")
  }

  useEffect(()=>{
        document.querySelector('html').classList.remove("light", "dark");
        document.querySelector('html').classList.add(mode);
  },[mode])

  return (
    <>
        <ThemeContextProvider value={{mode, darkTheme, lightTheme}} >
          <h1>React</h1>
          <ToggleSwitch/>
          <Cards/>
        </ThemeContextProvider>
    </>
  )
}

export default App
