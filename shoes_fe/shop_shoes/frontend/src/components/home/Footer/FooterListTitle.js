import React from "react";

const FooterListTitle = ({ title }) => {
  return <h3 className="text-xl font-titleFont font-semibold mb-6 text-primaryText relative pb-2 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-12 after:bg-accentColor">{title}</h3>;
};

export default FooterListTitle;
