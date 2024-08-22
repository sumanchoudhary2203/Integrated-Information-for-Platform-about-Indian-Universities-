import React from "react";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  const links = ["About UNIVINDIA", "Courses", "Contact Us"];

  return (
    <div className="footer">
      <hr className=" " />

      <div className="text-center text-white font-semibold mt-6">
        <p>
          {links.map((link, index) => (
            <span key={index}>
              {link}
              {index < links.length - 1 && <span>&nbsp; | &nbsp;</span>}
            </span>
          ))}
        </p>

        <p>
          Copyright 2024 © UNIVINDIA & World Report L.P. Terms &
          Conditions/Privacy Policy/U.S.
        </p>
      </div>

      <div className="flex justify-end items-center text-white mr-44 mt-[-50px] gap-3">
        <XIcon />
        <FacebookIcon />
      </div>
    </div>
  );
};

export default Footer;
