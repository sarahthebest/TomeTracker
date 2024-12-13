import { FC } from "react";
import { Form, Input, Typography } from "antd";
import { useAuthStore } from "../../stores/authStore"; 

const { Text } = Typography;

const RegisterForm: FC = () => {
    const { email, setEmail, password, setPassword, username, setUsername, error } =
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
            {error && <Text type="danger">{error}</Text>}
        </Form>
    );
};

export default RegisterForm;
