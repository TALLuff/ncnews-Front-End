import React from "react";
import { Link } from "@reach/router";

function Title({ loggedInName, userPicture, logOutUser }) {
  return (
    <div id="loggedIn">
      <img src={userPicture} alt="avatar_url" id="userAvatar" />
      <span id="loggedInText">
        {" "}
        Welcome back
        <br /> {loggedInName}{" "}
      </span>
      <div>
        <button onClick={() => logOutUser()} className="restyle redLeft">
          Log Out
        </button>
        <Link to="/userArticles">
          <button className="restyle">My Articles</button>
        </Link>
      </div>
    </div>
  );
}

export default Title;
