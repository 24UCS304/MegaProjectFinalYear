import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Signup.css";

function Signup() {
  const navigate = useNavigate();

  return (
    <div className="signup-container">
      <div className="signup-header">
        <div className="logo">🎓</div>
        <h1>AI Timetable Generator</h1>
        <p>NEP 2020 Compliant System</p>
      </div>

      <div className="signup-card">
        <h2>Create Account</h2>
        <p className="subtitle">
          Sign up to start generating timetables
        </p>

        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <select>
          <option>Admin</option>
          <option>Teacher</option>
        </select>

        <button className="signup-btn">Sign Up</button>

        {/* 🔥 Back to Login */}
        <p className="login-text">
          Already have an account?{" "}
          <span onClick={() => navigate("/")}>Login</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;