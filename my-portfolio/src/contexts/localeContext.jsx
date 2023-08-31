import { useState } from "react";
import { createContext } from "react";
import locale from "../locale/locale";

export const LocaleContext = createContext();

export default function LocaleContextProvider({ children }) {
  const [lang, setLang] = useState(locale.en);

  function english(callback) {
    callback();
    setLang(locale.en);
  }
  function Indonesia(callback) {
    callback();
    setLang(locale.id);
  }
  return (
    <LocaleContext.Provider
      value={{
        lang,
        english,
        Indonesia,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}
