import React from "react";
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="flex justify-between p-2">
      <div>
        <p className="text-xs">&copy; Alan Reid Portfolio {new Date().getFullYear()}</p>
      </div>
      <div>
        <ul className="flex justify-between space-x-2 text-xs">
          <li>Home</li>
          <li>Blog</li>
          <li>Projects</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
