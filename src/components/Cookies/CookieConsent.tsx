import { useEffect, useState } from "react";
import { cookie_consent } from "../../hooks/custom_hooks";
import Btn from "../Atoms/Btn";

const CookieConsent = () => {
    const [consent, set_consent] = useState("");

    const handle_consent_click = async (value: string) => {
        await cookie_consent(value);
        localStorage.setItem("consent", value);  
        set_consent(value);
    };

    // On page load check consent
    useEffect(() => {
        const consent_local_storage = localStorage.getItem("consent");

        if (consent_local_storage) {
            set_consent(consent_local_storage);
        }
    }, []);

    // if consent given the cookie_bar wont load
    if (consent) return null;

    return (
        <div className="cookie_bar absolute bottom-0 bg-primary p-3 flex flex-row justify-between">
            <p className="w-2/3">
                This app can be ran without accepting cookies however if you
                wish to save your books and data across sessions you need to
                accept cookies!
            </p>
            <div className="btn_wrapper flex flex-row gap-4">
                <Btn
                    onClick={() => handle_consent_click("decline")}
                    text="Decline"
                    backgroundColor="var(--accent)"
                />
                <Btn
                    onClick={() => handle_consent_click("accept")}
                    text="Accept"
                    backgroundColor="var(--accent)"
                />
            </div>
        </div>
    );
};

export default CookieConsent;
