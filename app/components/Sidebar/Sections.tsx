import React from "react";
import Section from "./Section";
import { sideBarSection } from "@/app/models/sidebar";

const Sections = () => {
  return (
    <>
      {sideBarSection.map((item, index) => (
        <Section key={index} item={item} />
      ))}
    </>
  );
};

export default Sections;
