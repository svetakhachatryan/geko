import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import hy from "./locales/hy/translation.json";
import en from "./locales/en/translation.json"


i18next.use(initReactI18next).init({
    resources:{
        hy:{
             translation: hy
        },
        en:{
            translation: en
        },
    },
    lng:localStorage.getItem("language") || "hy",
    fallbackLng: "en",
    interpolation:{
        escapeValue: false
    }
})

export default i18next