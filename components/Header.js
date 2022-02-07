import React from 'react';

const Header = () => {
  // Header for each page
  return <header>
    {/* Nav for the top of each page */}
    {/* >> Each Section  */}
    <nav className="grid grid-cols-2 p-4 space-between bg-black">
      {/* Divided into two section */}
      <section className="text-white">
        Alan Reid
      </section>
      <section className="grid grid-cols-2 text-white text-center">
        <div>Blog</div>
        <div>Projects</div>
      </section>
    </nav>
  </header>;
};

export default Header;
