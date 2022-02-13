import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="p-3 text-white bg-black">
      <footer className="justify-between max-w-screen-lg px-10 mx-auto text-center sm:flex">
        <div>
          <p className="text-xs">
            &copy; Alan Reid Portfolio {new Date().getFullYear()}
          </p>
        </div>
        <div>
          <ul className="flex-row justify-between text-xs text-center sm:flex sm:space-x-3">
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
