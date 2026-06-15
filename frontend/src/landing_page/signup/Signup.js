import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const navigate = useNavigate();

    const handleSignup = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post(
            "https://zerodha-pro.onrender.com/api/auth/signup",
            {
                name,
                email,
                password
            }
        );
        localStorage.setItem("token", res.data.token);
        window.location.href = "https://zerodha-pro-abyg.vercel.app";
    } catch (err) {
        alert("Email already exists!");
    }
};

    return (
        <div style={{
            display: "flex",
            height: "100vh",
            backgroundColor: "#ffffff",
            color: "#333",
            fontFamily: "'Segoe UI', sans-serif"
        }}>
            {/* Left Side - Form */}
            <div style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "60px",
            }}>
                <h1 style={{ color: "#ff6600", fontSize: "28px", marginBottom: "8px" }}>
                    🔺 TradeSphere
                </h1>
                <h2 style={{ fontSize: "24px", marginBottom: "8px", color: "#333" }}>Create your account</h2>
                <p style={{ color: "#888", marginBottom: "32px" }}>
                    Already have an account? <a href="/login" style={{ color: "#ff6600" }}>Login</a>
                </p>

                <form onSubmit={handleSignup}>
                    <div style={{ marginBottom: "20px" }}>
                        <label style={{ display: "block", marginBottom: "8px", color: "#555" }}>Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={{
                                width: "100%",
                                padding: "12px 16px",
                                backgroundColor: "#f5f5f5",
                                border: "1px solid #ddd",
                                borderRadius: "8px",
                                color: "#333",
                                fontSize: "14px",
                                outline: "none",
                                boxSizing: "border-box"
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: "20px" }}>
                        <label style={{ display: "block", marginBottom: "8px", color: "#555" }}>Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                width: "100%",
                                padding: "12px 16px",
                                backgroundColor: "#f5f5f5",
                                border: "1px solid #ddd",
                                borderRadius: "8px",
                                color: "#333",
                                fontSize: "14px",
                                outline: "none",
                                boxSizing: "border-box"
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: "28px" }}>
                        <label style={{ display: "block", marginBottom: "8px", color: "#555" }}>Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                width: "100%",
                                padding: "12px 16px",
                                backgroundColor: "#f5f5f5",
                                border: "1px solid #ddd",
                                borderRadius: "8px",
                                color: "#333",
                                fontSize: "14px",
                                outline: "none",
                                boxSizing: "border-box"
                            }}
                        />
                    </div>

                    <button type="submit" style={{
                        width: "100%",
                        padding: "14px",
                        backgroundColor: "#ff6600",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        fontSize: "16px",
                        fontWeight: "bold",
                        cursor: "pointer"
                    }}>
                        Create Account →
                    </button>
                </form>
            </div>

            {/* Right Side */}
            <div style={{
                flex: 1,
                backgroundColor: "#f8f8f8",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "60px",
                borderLeft: "1px solid #eee"
            }}>
                <div style={{ maxWidth: "400px", textAlign: "center" }}>

                    {/* Stats */}
                    <div style={{ display: "flex", gap: "32px", justifyContent: "center", marginBottom: "48px" }}>
                        <div>
                            <p style={{ fontSize: "28px", fontWeight: "bold", color: "#ff6600" }}>1.5Cr+</p>
                            <p style={{ color: "#999", fontSize: "13px" }}>Active Traders</p>
                        </div>
                        <div style={{ borderLeft: "1px solid #ddd" }}></div>
                        <div>
                            <p style={{ fontSize: "28px", fontWeight: "bold", color: "#ff6600" }}>₹0</p>
                            <p style={{ color: "#999", fontSize: "13px" }}>Brokerage on Equity</p>
                        </div>
                        <div style={{ borderLeft: "1px solid #ddd" }}></div>
                        <div>
                            <p style={{ fontSize: "28px", fontWeight: "bold", color: "#ff6600" }}>15+</p>
                            <p style={{ color: "#999", fontSize: "13px" }}>Years of Trust</p>
                        </div>
                    </div>

                    <div style={{ borderTop: "1px solid #e0e0e0", marginBottom: "40px" }}></div>

                    {/* Quote */}
                    <div style={{ fontSize: "40px", marginBottom: "16px" }}>📈</div>
                    <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#444", marginBottom: "24px" }}>
                        An investment in knowledge pays the best interest. Start your journey today!
                    </p>
                    <p style={{ color: "#ff6600", fontWeight: "bold" }}>— Benjamin Franklin</p>
                    <p style={{ color: "#999", fontSize: "13px", marginTop: "4px" }}>Founding Father & Investor</p>
                </div>
            </div>
        </div>
    );
}

export default Signup;