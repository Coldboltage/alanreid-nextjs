import React from "react";
import SectionTitle from "./SectionTitle";
import InfoCardCopy from "./InfoCardCopy";

interface BooksInterface {
  title: String,
  subtitle: String
}

const Books = ({title, subtitle}: BooksInterface) => {
  return (
    <section className="bg-[#191B1F] py-8 pb-14 sm:py-14">
      <div className="max-w-screen-lg px-10 mx-auto text-white sm:p-10">
        <SectionTitle
          title={title}
          subTitle={subtitle}
        />
        {/*  */}
        <div className="flex flex-col grid-cols-2 gap-20 sm:px-10 md:px-5 md:grid">
          {/* Person One */}
          <InfoCardCopy
            image={"/assets/road-to-react-2.webp"}
            name={"Road to React"}
            title={"2021 Edition with React Hooks"}
            description={
              "The Road to React: Your journey to master React.js in JavaScript - is a comprehensive and pragmatic yet concise React feat. Hooks book."
            }
            socials={{homepage: "https://www.amazon.co.uk/Road-learn-React-pragmatic-React-js-ebook/dp/B077HJFCQX"}}
            width={969} 
            height={1280}
          />
          <InfoCardCopy
            image={"/assets/eloquent-javascript.jpg"}
            name={"Eloquent Javascript"}
            title={"A Modern Introduction to Programming"}
            description={
              "JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon."
            }
            socials={{homepage: "https://www.amazon.co.uk/Eloquent-Javascript-3rd-Introduction-Programming/dp/1593279507"}}
            width={969} 
            height={1280}
          />
        </div>
      </div>
    </section>
  );
};

export default Books;
