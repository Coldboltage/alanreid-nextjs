import React from "react";

interface SectionTitleInterface {
  title: String,
  subTitle?: String,
  stop? : Boolean
}

const SectionTitle = ({ title, subTitle, stop }: SectionTitleInterface) => {
  if (stop) return <div></div>

  return (
    <div className="py-10 text-center sm:p-10">
      {title && <h2 className="text-2xl">{title}</h2>}
      {subTitle && <p className="p-4 italic text-slate-400">{subTitle}</p>}
    </div>
  );
};

export default SectionTitle;
