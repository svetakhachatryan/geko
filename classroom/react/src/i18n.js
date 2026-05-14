import i18next from "i18next";
import { initReactI18next, Translation } from "react-i18next";
import { LanguageDetector } from "i18next-browser-languagedetector";
import arm from "./locales/arm/translation.json"
import eng from "./locales/eng/translation.json"
import rus from "./locales/rus/translation.json"

i18next.use(initReactI18next).init({
    resources: {
        arm: {
            Translation: arm
        },
        eng: {
            Translation: eng
        },
        rus: {
            Translation: rus
        }
    },
    lng: localStorage.getItem("languge") || "arm",
    interpolation: {
        escapeValue: false
    }
})