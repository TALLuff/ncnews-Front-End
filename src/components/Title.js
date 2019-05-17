import React from "react";
import { Link } from "@reach/router";
import ncnewsTitle from "../images/ncnewsTitle.png";

function Title() {
  return (
    <div>
      <Link to="/">
        <img src={ncnewsTitle} alt="ncnewsTitle" id="ncnewsTitle" />
      </Link>
    </div>
  );
}

export default Title;
