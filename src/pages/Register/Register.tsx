import { Flex } from "antd";
import { useState } from "react";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import Btn from "../../components/Atoms/Btn";
import Background from "../../components/Atoms/Background";

const Register_Page = () => {
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
        <Flex vertical>
            <div className="form_wrapper relative rounded h-fit p-4 m-auto flex flex-col justify-between">
            <RegisterForm
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    username={username}
                    setUsername={setUsername}
                    error={""}            />
                <Btn
                    onClick={() => handleRegister(email, password)}
                    backgroundColor="var(--primary)"
                    text="Register"
                />
            </div>
            <Background />
        </Flex>
    );
};

export default Register_Page;
