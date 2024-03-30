/* eslint-disable @next/next/no-img-element */
import { Heading } from "@/common/Heading";
import { FEATURED } from "@/constants";
import React from "react";
import styled from "styled-components";

export const Featured = () => {
  return (
    <DIV>
      <section className="featured background">
        <div className="container">
          <Heading title="Featured Property Types" subtitle="Find All Type of Property." />
          <FeaturedCard />
        </div>
      </section>
    </DIV>
  );
};

export const FeaturedCard = () => {
  return (
    <>
      <div className="content grid5 mtop">
        {FEATURED.map((items, index) => (
          <div className="box" key={index}>
            <img src={items.cover} alt="" />
            <h4>{items.name}</h4>
            <label>{items.total}</label>
          </div>
        ))}
      </div>
    </>
  );
};

const DIV = styled.div`
  .featured .box {
    box-shadow: 0 0 20px 0 rgb(112 121 138 / 18%);
    border-radius: 6px;
    text-align: center;
    padding: 30px;
    cursor: pointer;
  }
  .featured img {
    width: 65px;
    height: 65px;
    margin: auto;
  }
`;
