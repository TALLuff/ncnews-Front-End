import React from "react";

function Title({ loggedInName, userPicture, logOutUser }) {
  return (
    <div id="loggedIn">
      <img src={userPicture} alt="avatar_url" id="userAvatar" /> Welcome back{" "}
      {loggedInName} <button onClick={() => logOutUser()}>Log Out</button>
      <button>My Articles</button>
    </div>
  );
}

export default Title;
