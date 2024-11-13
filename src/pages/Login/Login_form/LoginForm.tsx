import { FC } from "react";

interface login_form_props {
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    password: string;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    error: string;
}

const Login_form: FC<login_form_props> = ({
    email,
    setEmail,
    password,
    setPassword,
    error,
}) => {
    return (
        <form className="login-form h-fit w-full flex flex-col">
            <div className="form-group flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your email"
                    className="input bg-white rounded"
                />
            </div>
            <div className="form-group flex flex-col">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter your password"
                    className="input bg-white rounded"
                />
            </div>
            {error && <p className="error-message">{error}</p>}
        </form>
    );
};

export default Login_form;
