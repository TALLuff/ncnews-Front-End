import React from "react";
import { Link } from "@reach/router";

function Title({ loggedInName, userPicture, logOutUser }) {
  return (
    <div id="loggedIn">
      {/* <span id="loggedInText">
        {" "}
        Welcome back
        <br /> {loggedInName}{" "}
      </span> */}
      <div>
        <span className="restyleNo">{loggedInName}</span>
        <button onClick={() => logOutUser()} className="restyle">
          Log Out
        </button>
        <Link to="/userArticles">
          <button className="restyle">My Articles</button>
        </Link>
      </div>
      <img src={userPicture} alt="avatar_url" id="userAvatar" />
    </div>
  );
}

export default Title;
