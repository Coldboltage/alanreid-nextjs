import React from "react";

const Header = () => {
  // Header for each page
  return (
    <header className="bg-black">
      <div className="container mx-auto">
        {/* Nav for the top of each page */}
        {/* >> Each Section  */}
        <nav className="grid grid-cols-2 p-4 space-between">
          {/* Divided into two section */}
          <section className="text-white">Alan Reid</section>
          <section className="grid grid-cols-2 text-center text-white">
            <div>Blog</div>
            <div>Projects</div>
          </section>
        </nav>
      </div>
    </header>
  );
};

export default Header;
