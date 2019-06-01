import React from "react";
import ncnewsTitle from "../images/ncnewsFooter.png";

function Footer() {
  return (
    <div id="footer">
      <img src={ncnewsTitle} alt="logo" id="logo" />
      <br />
      Made by TALLuff for a Northcoders project.
    </div>
  );
}

export default Footer;
