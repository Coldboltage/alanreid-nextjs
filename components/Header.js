import React from 'react';

const Header = () => {
  // Header for each page
  return <header>
    {/* Nav for the top of each page */}
    {/* >> Each Section  */}
    <nav>
      {/* Divided into two section */}
      <section>
        Alan Reid
      </section>
      <section className="grid grid-cols-3">
        <div>Blog</div>
        <div>Projects</div>
        <div>Journey</div>
      </section>
    </nav>
  </header>;
};

export default Header;
