import "./Register.css";

import { useState } from "react";
import { Link } from "react-router-dom";

import Input from "../../../components/common/Input";
import Button from "../../../components/common/Button";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      name,
      email,
      phone,
      password,
      confirmPassword,
      acceptTerms,
    });
  };

  return (
    <section className="register-page">
      <div className="register-card">

        <h1>Velocis</h1>

        <h2>Create Your Account</h2>

        <p>Join thousands of happy customers.</p>

        <form onSubmit={handleSubmit}>

          <Input
            label="Full Name"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            label="Phone Number"
            type="tel"
            placeholder="+92 300 1234567"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <Input
            label="Password"
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Input
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <div className="terms">
            <label>
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
              />
              I agree to the Terms & Conditions
            </label>
          </div>

          <div className="register-btn">
            <Button>Create Account</Button>
          </div>

        </form>

        <p className="login-link">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </div>
    </section>
  );
};

export default Register;