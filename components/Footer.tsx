import React from "react";
import Link from "next/link";

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
            <Link href="/about">About</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/cv">CV</Link>
            <Link href="/projects">Projects</Link>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/coldboltage"
            >
              GitHub
            </a>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
