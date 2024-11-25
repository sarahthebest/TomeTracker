import { FC } from "react";
import { Form, Input, Typography, Button } from "antd";

const { Text } = Typography;

interface RegisterFormProps {
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    error: string;
}

const RegisterForm: FC<RegisterFormProps> = ({
    email,
    setEmail,
    password,
    setPassword,
    username,
    setUsername,
    error,
}) => {
    return (
        <Form
            layout="vertical"
            className="register-form"
            style={{ width: "100%", display: "flex", flexDirection: "column", gap: "16px" }}
        >
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
            {error && <Text type="danger">{error}</Text>}
        </Form>
    );
};

export default RegisterForm;
