import React from "react";
import Link from "next/link";

const Header = () => {
  // Header for each page
  return (
    <header className="bg-black ">
      <div className="max-w-screen-lg px-5 mx-auto xl:px-0">
        {/* Nav for the top of each page */}
        {/* >> Each Section  */}
        <nav className="grid grid-cols-2 py-4 space-between text-sm sm:text-base">
          {/* Divided into two section */}
          <section className="text-white">
            <Link href="/">Alan Reid</Link>
          </section>
          <section className="flex justify-end sm:gap-10 gap-3 text-center text-white ">
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
          </section>
        </nav>
      </div>
    </header>
  );
};

export default Header;
