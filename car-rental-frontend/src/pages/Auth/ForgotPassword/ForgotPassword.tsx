import "./ForgotPassword.css";

import { useState } from "react";
import { Link } from "react-router-dom";

import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";

const ForgotPassword = () => {

    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();

        console.log(email);

    };

    return (

        <section className="forgot-page">

            <div className="forgot-card">

                <h1>Velocis</h1>

                <h2>Forgot Password?</h2>

                <p>

                    Enter your registered email address.
                    We'll send you a password reset link.

                </p>

                <form onSubmit={handleSubmit}>

                    <Input

                        label="Email Address"

                        type="email"

                        placeholder="Enter your email"

                        value={email}

                        onChange={(e)=>setEmail(e.target.value)}

                    />

                    <div className="forgot-btn">

                        <Button>

                            Send Reset Link

                        </Button>

                    </div>

                </form>

                <p className="back-login">

                    Remember your password?

                    <Link to="/login">

                        Login

                    </Link>

                </p>

            </div>

        </section>

    );

};

export default ForgotPassword;