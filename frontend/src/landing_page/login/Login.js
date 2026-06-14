import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://zerodha-pro.onrender.com2/api/auth/login", {
                email,
                password
            });
            localStorage.setItem("token", res.data.token);
            window.location.href = "https://zerodha-pro-abyg.vercel.app";

        } catch (err) {
            alert("Invalid email or password!");
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
                    🔺 Zerodha
                </h1>
                <h2 style={{ fontSize: "24px", marginBottom: "8px", color: "#333" }}>Welcome back</h2>
                <p style={{ color: "#888", marginBottom: "32px" }}>
                    Don't have an account? <a href="/signup" style={{ color: "#ff6600" }}>Sign up</a>
                </p>

                <form onSubmit={handleLogin}>
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
                        Login →
                    </button>
                </form>
            </div>

            {/* Right Side - Quote */}
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
                    <div style={{ fontSize: "40px", marginBottom: "16px" }}>❝</div>
                    <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#444", marginBottom: "24px" }}>
                        The stock market is a device for transferring money from the impatient to the patient.
                    </p>
                    <p style={{ color: "#ff6600", fontWeight: "bold" }}>— Warren Buffett</p>
                    <p style={{ color: "#999", fontSize: "13px", marginTop: "4px" }}>Legendary Investor</p>
                </div>
            </div>
        </div>
    );
}

export default Login;