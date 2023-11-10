import React from "react";
import"../styles/Navbar.css";

export default function Nav() {
  return (
    <>
      <nav className="my-nav">
        <div className="nav-logo">
          <a
            href="https://usefreebird.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
             <img
              src='assests/image.png'
              height="50"
              width="50"
              alt="Image"
            /> 
          </a>
        </div>
        
      </nav>
    </>
  );
}
