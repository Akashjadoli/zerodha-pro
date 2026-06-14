import { useState } from "react";
import supportData from "./SupportData";

function SupportAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <>
      {supportData.map((item, index) => (
        <div
          key={index}
          style={{
            marginBottom: "35px",
            paddingBottom: "20px",
            borderBottom: "1px solid #f0f0f0",
          }}
        >
          <div
            className="d-flex justify-content-between align-items-center"
            onClick={() => setOpen(open === index ? null : index)}
            style={{
              cursor: "pointer",
              padding: "10px 0",
            }}
          >
            <h4
              style={{
                fontSize: "28px",
                fontWeight: "400",
                color: "#424242",
                margin: 0,
              }}
            >
              {item.title}
            </h4>

            <span
              style={{
                color: "#387ed1",
                fontSize: "24px",
                fontWeight: "300",
              }}
            >
              {open === index ? "−" : "+"}
            </span>
          </div>

          {open === index && (
            <div
              className="row"
              style={{
                marginTop: "25px",
              }}
            >
              {item.links.map((link, i) => (
                <div
                  key={i}
                  className="col-md-6 mb-3"
                >
                  <a
                    href="/"
                    style={{
                      color: "#387ed1",
                      textDecoration: "none",
                      fontSize: "16px",
                    }}
                    onMouseEnter={(e) =>
                      (e.target.style.textDecoration = "underline")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.textDecoration = "none")
                    }
                  >
                    {link}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default SupportAccordion;