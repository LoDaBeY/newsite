import './Theme.css'
import { createContext, useReducer } from "react";
const ThemeContexttt = createContext();

const initialData = { MyTheme: "Dark" };
const reducer = (firstState, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...firstState, MyTheme: action.newValue };
    default:
      return firstState;
  }}

export function ThemeProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);
  const ChangeTheme = (newTheme) => {
    dispatch({ type: "CHANGE_THEME", newValue: newTheme });
  };

  return (
     <ThemeContexttt.Provider value={{ ...firstState, ChangeTheme}}>
      {children}
     </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;