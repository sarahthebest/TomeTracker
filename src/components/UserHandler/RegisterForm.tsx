import { FC, useState } from "react";
import { Form, Input } from "antd";

const RegisterForm: FC = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


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
