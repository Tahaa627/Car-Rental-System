import "./Login.css";

import { useState } from "react";
import { Link } from "react-router-dom";

import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";

const Login = () => {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();

        console.log(email);

        console.log(password);

    };

    return (

        <section className="login-page">

            <div className="login-card">

                <h1>Velocis</h1>

                <h2>Welcome Back </h2>

                <p>
                    Sign in to continue your journey.
                </p>

                <form onSubmit={handleSubmit}>

                    <Input

                        label="Email Address"

                        type="email"

                        placeholder="Enter your email"

                        value={email}

                        onChange={(e)=>setEmail(e.target.value)}

                    />

                    <Input

                        label="Password"

                        type="password"

                        placeholder="Enter your password"

                        value={password}

                        onChange={(e)=>setPassword(e.target.value)}

                    />

                    <div className="login-options">

                        <label>

                            <input type="checkbox"/>

                            Remember Me

                        </label>

                        <Link to="/forgot-password">

                            Forgot Password?

                        </Link>

                    </div>

                    <div className="login-btn-wrapper">
                        <Button>
                            Login
                        </Button>
                    </div>

                </form>

                <div className="divider">

                    <span>OR</span>

                </div>

                <button className="google-btn">

                    Continue with Google

                </button>

                <p className="register-link">

                    Don't have an account?

                    <Link to="/register">

                        Register

                    </Link>

                </p>

            </div>

        </section>

    );

};

export default Login;