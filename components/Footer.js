import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-black text-white p-3">
      <footer className="text-center sm:flex justify-between max-w-screen-lg  px-10 mx-auto">
        <div>
          <p className="text-xs">
            &copy; Alan Reid Portfolio {new Date().getFullYear()}
          </p>
        </div>
        <div>
          <ul className="text-center sm:flex space-x-3 justify-between text-xs">
            <li>Home</li>
            <li>Blog</li>
            <li>Projects</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
