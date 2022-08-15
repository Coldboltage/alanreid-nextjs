import React from "react";
import SectionTitle from "./SectionTitle";

const CallToAction = ({noTitle}: {noTitle?: boolean})  => {
  return (
    <section className="bg-[#3C3E41] ">
      <div className={`max-w-screen-lg px-10 mx-auto text-white ${noTitle ? "p-10" : "pb-10"}`}>
        <div>
          {noTitle ? <></> : <SectionTitle title={`Follow my updates per month`}/>}
          <p className="pb-10 text-center">{`Once per month, I'll post an update on this website which I'll talk about what exactly I've done for the month, how I've improved and how you can do that yourself.`}</p>
        </div>
        <div>
          <form className="flex flex-col justify-center gap-2 sm:flex-row">
            <input  type="email" placeholder="Your Email" className="py-2 text-center text-black sm:w-96" />
            <input type="submit" value="Get updates" className="p-2 bg-sky-400" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
