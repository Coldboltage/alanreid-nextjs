import React from 'react';

const SectionTitle = ({title, subTitle}) => {
  return <div className="p-10 text-center">
    <h2 className="text-2xl">{title}</h2>
    <p className="p-4 italic text-slate-400">{subTitle}</p>
  </div>;
};

export default SectionTitle;
