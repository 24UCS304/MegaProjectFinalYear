import React, { useState } from "react";
import { useNavigate } from "react-router-dom";   // ✅ ADD THIS
import "../styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();   // ✅ ADD THIS

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <div className="logo">🎓</div>
        <h1>AI Timetable Generator</h1>
      </div>

      <div className="login-card">
        <h2>Welcome Back</h2>
        <p className="subtitle">Login to your admin account</p>

        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input
            type="email"
            placeholder="admin@college.edu"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="••••••••"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login-btn">
            → Login
          </button>
        </form>

        {/* ✅ FIXED NAVIGATION */}
        <p className="signup-text">
          Don't have an account?{" "}
          <span onClick={() => navigate("/signup")}>Sign up</span>
        </p>
      </div>

      <p className="demo-text">
        Demo credentials: admin@demo.com / admin123
      </p>
    </div>
  );
}

export default Login;