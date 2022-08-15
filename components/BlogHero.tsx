import React from "react";
import Link from "next/link"

interface blogHeroInterface  {
  categories: string[],
  name: String
}

const BlogHero = ({ categories, name }: blogHeroInterface) => {
  return (
    <section className="bg-black md:px-20">
      <div className="flex flex-col max-w-screen-lg px-10 py-10 mx-auto text-center text-white sm:py-16 justify-items-center">
        <div className="pb-5">
          <div className="flex flex-col gap-3 sm:gap-0">
            {/* Title */}
            <h2 className="pb-4 sm:py-4 font-medium text-3xl sm:text-5xl underline underline-offset-2 decoration-[#26a8ed]">
              {name}
            </h2>
            {/* Sub Title */}
           {name === "Blog" && <p className="text-xl text-slate-100">
              {`My developer life and the story of how I'm improving and many other things`}
            </p>}
          </div>
        </div>
        {/* Category */}
        <div className="flex flex-col justify-center gap-2 text-sm sm:gap-5 sm:flex-row">
          {" "}
          {categories && categories.map((item) => (
            <Link key={item} href={`/category/${item.toLowerCase()}`}>
              <a className="font-bold uppercase text-[#26a8ed]">{item}</a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
