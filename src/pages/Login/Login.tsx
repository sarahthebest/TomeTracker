import { useState } from "react";
import Login_form from "./Login_form/LoginForm";
import Login_bg from "./Login_bg/Login_bg";
import "./Login.css";
import Btn from "../../components/Atoms/Btn";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string>("");
    const [captchaVal, setCaptchaVal] = useState<string>("");

    const handleLogin = async (email: string, password: string) => {
        try {
            console.log("Attempting to log in with:", { email, password });

            if (email === "test@example.com" && password === "password123") {
                console.log("Login successful");
            } else {
                setError("Invalid email or password");
            }
        } catch (error) {
            console.error("Login failed:", error);
            setError("Something went wrong. Please try again.");
        }
    };

    const handleCaptchaChange = (value: string | null) => {
        setCaptchaVal(value || "");
    };

    return (
        <div className="login_wrapper flex flex-col h-full relative">
            <div className="form_wrapper relative rounded h-fit p-4 m-auto flex flex-col justify-between">
                <Login_form
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    error={error}
                />
                <div className=" mx-auto">
                    <ReCAPTCHA
                        sitekey="6LcqgX0qAAAAANzrxXPO3jlmhck5203YvuxTWH1i"
                        onChange={handleCaptchaChange}
                    />
                </div>
                <Btn
                    onClick={() => handleLogin(email, password)}
                    backgroundColor="var(--accent)"
                    id="login_btn"
                    text="Login"
                    disabled={!captchaVal}
                />
            </div>
            <Login_bg />
            <Link className="mx-auto mb-3 light hover:text-indigo-600 duration-200" to={"/register"}>Don't have a account? Go to register :3</Link>
        </div>
    );
};

export default Login;
