import React from "react";

function Header({ loggedIn, LogoutFunction }) {
  return (
    <header className="Header">
      <nav>
        <a href="/">User Profile</a>
        <a href="/Login">Login</a>
        <a href="/logout">Logout</a>
        <a href="/CreateAccount">Create Account</a>
      </nav>
    </header>
  );
}

export default Header;
