import { FC } from "react";
import { Form, Input } from "antd";
import { useAuthStore } from "../../stores/authStore"; 

const RegisterForm: FC = () => {
    const { email, setEmail, password, setPassword, username, setUsername } =
        useAuthStore();

    return (
        <Form
            layout="vertical"
            className="register-form"
            style={{ width: "100%", display: "flex", flexDirection: "column" }}
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
        </Form>
    );
};

export default RegisterForm;
