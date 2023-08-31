import { useContext } from "react";
import { LocaleContext } from "../contexts/localeContext";

export default function useLang() {
  const { lang, english, Indonesia } = useContext(LocaleContext);

  return {
    lang,
    english,
    Indonesia
  };
}
