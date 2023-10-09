import { createContext, useReducer } from "react";
// @ts-ignore
const ThemeContexttt = createContext();

const initialData = {
  MyTheme:
    localStorage.getItem("Theme") === null
      ? "Light"
      : localStorage.getItem("Theme") === "Light"
      ? "Light"
      : "Dark",
};
const reducer = (firstState, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...firstState, MyTheme: action.newValue };
    default:
      return firstState;
  }
};

export function ThemeProvider({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);
  const ChangeTheme = (newName) => {
    localStorage.setItem("Theme", newName);
    // @ts-ignore
    dispatch({ type: "CHANGE_THEME", newValue: newName });
  };
  return (
    <ThemeContexttt.Provider value={{ ...firstState, ChangeTheme }}>
      {children}
    </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;
