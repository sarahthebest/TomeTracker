import { FC } from "react";
import { Form, Input } from "antd";

interface LoginFormProps {
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    error: string;
    success: string;
}

const LoginForm: FC<LoginFormProps> = ({
    email,
    setEmail,
    password,
    setPassword,
}) => {
    return (
        <Form layout="vertical" className="login-form w-full flex flex-col">
            <Form.Item label="Email" required className="form-label">
                <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                />
            </Form.Item>
            <Form.Item label="Password" required className="form-label mb-2">
                <Input.Password
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
