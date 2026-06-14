import React, { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allOrders").then((res) => {
      setOrders(res.data);
    });
  }, []);

  const getInitials = (name) => name?.slice(0, 2).toUpperCase() || "??";

  const avatarColor = (name) => {
    const map = {
      WIPRO: { bg: "#E6F1FB", color: "#0C447C" },
      KPITTECH: { bg: "#EAF3DE", color: "#27500A" },
      TCS: { bg: "#EEEDFE", color: "#3C3489" },
    };
    return map[name] || { bg: "#F1EFE8", color: "#444441" };
  };

  const totalInvested = orders.reduce(
    (sum, o) => sum + o.qty * o.price, 0
  );

  return (
    <div className="orders-wrapper">

      {/* Summary Cards */}
      <div className="orders-summary">
        <div className="summary-card">
          <span className="s-label">Total orders</span>
          <span className="s-val">{orders.length}</span>
        </div>
        <div className="summary-card">
          <span className="s-label">Total invested</span>
          <span className="s-val">₹{totalInvested.toLocaleString("en-IN")}</span>
        </div>
        <div className="summary-card">
          <span className="s-label">Status</span>
          <span className="s-val green">All BUY</span>
        </div>
      </div>

      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
        </div>
      ) : (
        <div className="orders-card">

          {/* Header */}
          <div className="orders-head">
            <span>Stock</span>
            <span>Qty</span>
            <span>Price</span>
            <span>Total</span>
            <span>Mode</span>
          </div>

          {/* Rows */}
          {orders.map((order, i) => {
            const av = avatarColor(order.name);
            return (
              <div className="order-row" key={i}>
                <div className="stock-info">
                  <div
                    className="stock-avatar"
                    style={{ background: av.bg, color: av.color }}
                  >
                    {getInitials(order.name)}
                  </div>
                  <div>
                    <div className="stock-name">{order.name}</div>
                    <div className="stock-sub">NSE</div>
                  </div>
                </div>
                <div className="cell">{order.qty}</div>
                <div className="cell">₹{order.price}</div>
                <div className="cell">₹{(order.qty * order.price).toLocaleString("en-IN")}</div>
                <div className="cell">
                  <span className={`badge ${order.mode === "BUY" ? "badge-buy" : "badge-sell"}`}>
                    {order.mode}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Orders;