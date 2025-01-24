import { useState } from "react";
import Btn from "../../components/Atoms/Btn";
import ReCAPTCHA from "react-google-recaptcha";
import { Link, useNavigate } from "react-router-dom";
import { Flex } from "antd";
import Background from "../../components/Atoms/Background";
import LoginForm from "../../components/UserHandler/LoginForm";
import "./Login.css";
import axios from "axios";
import { getErrorMessage } from "../../utils/globalUtils";
import { useAuth } from "../../components/Auth/AuthProvider";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");
    const [captchaVal, setCaptchaVal] = useState<string>("");
    const navigate = useNavigate()
    const { checkAuthStatus } = useAuth();

    const handleLogin = async (email: string, password: string) => {
        try {
            const userLoginCredentials = { email, password};
            const response = await axios.post("http://localhost:5000/api/auth/login", userLoginCredentials, { withCredentials: true });
            const { accessToken } = response.data; 
            if (accessToken) {
                localStorage.setItem("accessToken", accessToken);
            }
            localStorage.setItem("accessToken", accessToken);
            setSuccess("Login successful, redirecting to start page!");
            await checkAuthStatus(); 
            setTimeout(() => {
                navigate("/");
            }, 2000);
        } catch (error) {
            setError(getErrorMessage(error)); 
        }
    };
    const handleCaptchaChange = (value: string | null) => {
        setCaptchaVal(value || "");
    };

    return (
        <Flex className="login_wrapper min-h-screen" justify="center" vertical>
            <div className="form_wrapper relative rounded h-fit p-4 m-auto flex flex-col justify-between z-10">
                <LoginForm
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    error={error}
                    success={success}
                />
                <div className="mx-auto my-4">
                    <ReCAPTCHA
                        sitekey="6LcqgX0qAAAAANzrxXPO3jlmhck5203YvuxTWH1i"
                        onChange={handleCaptchaChange}
                    />
                </div>
                {error && <div className="text-red-400 mx-auto text-center py-4"> {error} </div>}
                {success && <div className="text-green-400 mx-auto text-center py-4"> {success} </div>}
                <Btn
                    onClick={() => handleLogin(email, password)}
                    backgroundColor="var(--secondary)"
                    text="Login"
                    disabled={!captchaVal}
                />
            </div>
            <Link
                className="mx-auto mb-3 light z-10 hover:text-rose-400 duration-200"
                to={"/register"}
            >
                Don't have a account? Go to register :3
            </Link>
            <Background/>
        </Flex>
    );
};

export default Login;