import { FC } from "react";
import { Form, Input } from "antd";

interface RegisterFormProps {
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const RegisterForm: FC<RegisterFormProps> = ({ email, setEmail, username, setUsername, password, setPassword }) => {
    return (
        <Form layout="vertical" className="register-form" style={{ width: "100%", display: "flex", flexDirection: "column" }}>
            <Form.Item label="Username" required>
                <Input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                />
            </Form.Item>
            <Form.Item label="Email" required>
                <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                />
            </Form.Item>
            <Form.Item label="Password" required>
                <Input.Password
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />
            </Form.Item>
        </Form>
    );
};

export default RegisterForm;
