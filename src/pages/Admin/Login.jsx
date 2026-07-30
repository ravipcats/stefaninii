import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../../utils/auth";
import { ArrowLeft } from "lucide-react";

import "./Login.css";

export default function Login() {

    const navigate = useNavigate();

    const [username, setUsername] = useState("");

    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const handleLogin = (e) => {

        e.preventDefault();

        if (login(username, password)) {

            navigate("/admin/dashboard");

        } else {

            setError("Invalid username or password.");

        }

    };

    return (





        <div className="login-page">
            <button
                className="back-btn"
                onClick={() => navigate(-1)}
            >
                <ArrowLeft size={10} />
                Back
            </button>

            <form

                className="login-card"

                onSubmit={handleLogin}

            >

                <h1 >Admin Login</h1>

                <p>

                    Careers Management System

                </p>

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {

                    error &&

                    <div className="login-error">

                        {error}

                    </div>

                }

                <button>

                    Login

                </button>

            </form>

        </div>

    );

}