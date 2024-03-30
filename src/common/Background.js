/* eslint-disable @next/next/no-img-element */
import React from "react";

export const Background = ({ name, title, cover }) => {
  return (
    <>
      <div className="back">
        <div className="container">
          <span>{name}</span>
          <h1>{title}</h1>
        </div>
        <img src={cover} alt="" />
      </div>
    </>
  );
};
