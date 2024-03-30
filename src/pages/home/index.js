import React from "react";
import { Hero } from "./Hero";

import { Featured } from "./Featured";
import { Properties } from "./Properties";

import { Awards } from "./Awards";

export const HomePage = () => {
  return (
    <div>
      <Hero />
      <Featured />
      <Properties />
      <Awards />
    </div>
  );
};
