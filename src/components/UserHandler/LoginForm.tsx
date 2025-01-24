import { FC, useState } from "react";
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
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordVisibility = () => {
        if (showPassword === true) {
            setShowPassword(false);
        } else {
            setShowPassword(true);
        }
    };
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
                <Input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />
            </Form.Item>
            <Form.Item
                className="mt-0"
                name="ShowPassword"
                valuePropName="checked"
            >
                <input
                    className="showPassword me-2 outline-none rounded"
                    type="checkbox"
                    aria-label="Show password"
                    name="showPassword"
                    id="showPassword"
                    onClick={handlePasswordVisibility}
                />
                <label className="text-text" htmlFor="showPassword">Show Password</label>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
