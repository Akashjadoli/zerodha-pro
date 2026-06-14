import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 mb-5 border-top">
        <h1 className="text-center">People</h1>
      </div>
      <div
        className="row p-3  text-muted"
        style={{ lineHeight: "1.7", fontSize: "1.1em" }}
      >
        <div className="col-5 p-3 text-center mb-5">
          <img
            src="media/images/akashPro.png"
            style={{ borderRadius: "100%", width: "50%" }}
          /> 
          <h4 className="mt-3">Akash</h4>
          <h6 className="mt-3">Full Stack Devloper</h6>
        </div>
        <div className="col-6 p-2 mb-5" style={{fontSize: "0.9em", lineHeight: "1.8"}}>
          <p>
            Akash is a final-year BCA student and full-stack web developer based in Noida. He loves building real-world web applications from scratch using the MERN stack.
          </p>
          <p>
            With hands-on experience in React, Node.js, Express and MongoDB, he has developed multiple projects independently.
          </p>
          <p>Currently seeking a web development internship to grow and contribute to impactful products.</p>
          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Homepage{" "}
            </a>
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
