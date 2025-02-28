import { Flex } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { getErrorMessage } from "../../utils/globalUtils";
import axios from "axios";
import RegisterForm from "../../components/UserHandler/RegisterForm";
import Btn from "../../components/Atoms/Btn";
import Background from "../../components/Atoms/Background";
import { useState } from "react";

const RegisterPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleRegister = async () => {
        try {
            const newUserData = { username, password, email };
            await axios.post(
                "http://localhost:5000/api/auth/register", 
                newUserData
            );
            setSuccess("Registration success!");
            setTimeout(() => {
                setSuccess("");
            }, 3000);
            setTimeout(() => {
                navigate("/login");
            }, 2000);
            
            setEmail("");
            setUsername("");
            setPassword("");
        } catch (err) {
            setError(getErrorMessage(err));
        }
    };

    return (
        <Flex className="register_wrapper min-h-screen" justify="center" vertical>
            <div className="form_wrapper relative rounded h-fit p-4 m-auto flex flex-col justify-between">
                <RegisterForm 
                    email={email} 
                    setEmail={setEmail} 
                    username={username} 
                    setUsername={setUsername} 
                    password={password} 
                    setPassword={setPassword} 
                />
                {error && <div className="error text-red-400 mx-auto text-center py-4">{error}</div>}
                {success && <div className="success text-green-400 text-center w-fit mx-auto py-4">{success}</div>}
                <Btn
                    onClick={handleRegister}
                    backgroundColor="var(--secondary)"
                    text="Register"
                />
            </div>
            <Link className="mx-auto mb-3 light z-10 hover:text-rose-400 duration-200" to={"/login"}>
                Already have an account? Go to Login :3
            </Link>
            <Background />
        </Flex>
    );
};

export default RegisterPage;
