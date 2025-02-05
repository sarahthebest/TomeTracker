import { useEffect, useState } from "react";
import Btn from "../../components/Atoms/Btn";
import ReCAPTCHA from "react-google-recaptcha";
import { Link, useNavigate } from "react-router-dom";
import { Flex } from "antd";
import Background from "../../components/Atoms/Background";
import LoginForm from "../../components/UserHandler/LoginForm";
import "./Login.css";
import axios from "axios";
import { getErrorMessage } from "../../utils/globalUtils";
import { useAuthStore } from "../../stores/authStore";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");
    const [captchaVal, setCaptchaVal] = useState<string>("");
    const navigate = useNavigate();
    const { checkAuthStatus } = useAuthStore();

    const handleLogin = async (email: string, password: string) => {
        try {
            const userLoginCredentials = { email, password };
            await axios.post(
                "http://localhost:5000/api/auth/login",
                userLoginCredentials,
                { withCredentials: true }
            );
            setSuccess("Login successful, redirecting to start page!");
            await checkAuthStatus();
            setTimeout(() => {
                setSuccess("");
            }, 3000);
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

    useEffect(() => {
        checkAuthStatus();
    }, [checkAuthStatus]);

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
                    <p className="text-xs my-1 opacity-80">
                        This site is protected by reCAPTCHA and the Google {" "}
                        <a href="https://policies.google.com/privacy">
                        Privacy Policy
                        </a>{" "}
                        and {" "}
                        <a href="https://policies.google.com/terms">
                        Terms of Service {" "}
                        </a>{" "}
                        apply.
                    </p>
                </div>
                {error && (
                    <div className="text-red-400 mx-auto text-center py-4">
                        {error}{" "}
                    </div>
                )}
                {success && (
                    <div className="text-green-400 mx-auto text-center py-4">
                        {success}{" "}
                    </div>
                )}
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
            <Background />
        </Flex>
    );
};

export default Login;
