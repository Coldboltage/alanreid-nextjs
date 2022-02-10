import React from 'react';

const SectionTitle = ({title, subTitle}) => {
  return <div className="py-10 text-center sm:p-10">
    <h2 className="text-2xl">{title}</h2>
    {subTitle && <p className="p-4 italic text-slate-400">{subTitle}</p>}
  </div>;
};

export default SectionTitle;
