import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import arm from "./arm/translation.json";
import eng from "./eng/translation.json"

i18next.use(initReactI18next).init({
    resources: {
        arm: {
            translation: arm
        },
        eng: {
            translation: eng
        }
    },
    lng: localStorage.getItem("language") || "arm",
    interpolation: {
        escapeValue: false
    }
})

export default i18next;