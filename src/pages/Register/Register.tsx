import { Flex } from "antd";
import { useState } from "react";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import Btn from "../../components/Atoms/Btn";
import Background from "../../components/Atoms/Background";
import { Link } from "react-router-dom";

const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState<string>("");

    const handleRegister = async (email: string, password: string) => {
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

    return (
        <Flex className="register_wrapper h-full" justify="center" vertical>
            <div className="form_wrapper relative rounded h-fit p-4 m-auto flex flex-col justify-between">
            <RegisterForm
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    username={username}
                    setUsername={setUsername}
                    error={error}            />
                <Btn
                    onClick={() => handleRegister(email, password)}
                    backgroundColor="var(--secondary)"
                    text="Register"
                />
            </div>
            <Link
                className="mx-auto mb-3 light z-10 hover:text-rose-400 duration-200"
                to={"/login"}
            >
                Already have a account? Go to Login :3
            </Link>
            <Background/>
        </Flex>
    );
};

export default RegisterPage;
