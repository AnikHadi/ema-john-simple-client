import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <p>
        &copy; {new Date().getFullYear()} Author :{" "}
        <strong>
          <a
            target="_blank"
            href="https://github.com/HadiAnik"
            rel="noreferrer"
          >
            MD Hadi
          </a>
        </strong>
      </p>
    </div>
  );
};

export default Footer;
