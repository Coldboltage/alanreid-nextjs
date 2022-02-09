import React from "react";
import Link from "next/link";

const Header = () => {
  // Header for each page
  return (
    <header className="bg-black ">
      <div className="max-w-screen-lg px-10 mx-auto xl:px-0">
        {/* Nav for the top of each page */}
        {/* >> Each Section  */}
        <nav className="grid grid-cols-2 py-4 space-between">
          {/* Divided into two section */}
          <section className="text-white">
            <Link href="/">Alan Reid</Link>
          </section>
          <section className="flex justify-end gap-5 text-center text-white sm:gap-10">
            <div>
              <Link href="/about">About</Link>
            </div>
            <div>Projects</div>
          </section>
        </nav>
      </div>
    </header>
  );
};

export default Header;
