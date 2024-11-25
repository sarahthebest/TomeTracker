import { FC } from "react";
import { Form, Input, Typography } from "antd";

const { Text } = Typography;

interface LoginFormProps {
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    error: string;
}

const LoginForm: FC<LoginFormProps> = ({
    email,
    setEmail,
    password,
    setPassword,
    error,
}) => {
    return (
        <Form layout="vertical" className="login-form w-full flex flex-col">
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

export default LoginForm;
