import SupportAccordion from "./SupportAccordion";

function Hero() {
  return (
    <div
      className="container-fluid"
      style={{
        maxWidth: "1300px",
        marginTop: "50px",
      }}
    >
      <div className="row">

        {/* Left Side */}
        <div className="col-lg-8">

          <div className="d-flex justify-content-between align-items-center mb-4">

            <h1
              style={{
                fontSize: "42px",
                fontWeight: "400",
                color: "#424242",
                margin: 0,
              }}
            >
              Support Portal
            </h1>

            <a
              href="/"
              style={{
                color: "#387ed1",
                textDecoration: "none",
                fontSize: "15px",
              }}
            >
              Track Tickets
            </a>

          </div>

          <input
            type="text"
            className="form-control"
            placeholder="Eg: How do I open my account, How do I activate F&O..."
            style={{
              height: "65px",
              border: "none",
              boxShadow: "0 1px 12px rgba(0,0,0,.08)",
              marginBottom: "50px",
              fontSize: "16px",
            }}
          />

          <SupportAccordion />

        </div>

        {/* Right Side */}
        <div
          className="col-lg-4"
          style={{
            paddingLeft: "80px",
          }}
        >
          <h3
            style={{
              fontWeight: "400",
              color: "#424242",
              marginBottom: "25px",
            }}
          >
            Quick links
          </h3>

          <ol
            style={{
              color: "#387ed1",
              lineHeight: "2.4",
              fontSize: "16px",
            }}
          >
            <li>Track account opening</li>
            <li>Track segment activation</li>
            <li>Intraday margins</li>
            <li>Kite user manual</li>
            <li>Learn how to create a ticket</li>
          </ol>
        </div>

      </div>
    </div>
  );
}

export default Hero;