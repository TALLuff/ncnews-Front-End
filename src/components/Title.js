import React from "react";
import { Link } from "@reach/router";
import ncnewsTitle from "../images/ncnewsTitle.png";

function Title() {
  return (
    <div>
      <Link to="/">
        <img src={ncnewsTitle} alt="ncnewsTitle" id="ncnewsTitle" />
        {/* <span className="red">N</span>C-NEWS */}
      </Link>
    </div>
  );
}

export default Title;
