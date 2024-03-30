/* eslint-disable @next/next/no-img-element */
import { Heading } from "@/common/Heading";
import { PROPERTYDATA } from "@/constants";
import React from "react";
import styled from "styled-components";

export const Properties = () => {
  return (
    <DIV>
      <section className="recent padding">
        <div className="container">
          <Heading
            title="Recent Property Listed"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />
          <PropertyCard />
        </div>
      </section>
    </DIV>
  );
};

export const PropertyCard = () => {
  return (
    <>
      <div className="content grid3 mtop">
        {PROPERTYDATA.map((val, index) => {
          const { cover, category, location, name, price, type } = val;
          return (
            <div className="box shadow" key={index}>
              <div className="img">
                <img src={cover} alt="" />
              </div>
              <div className="text">
                <div className="category flex">
                  <span
                    style={{
                      background: category === "For Sale" ? "#25b5791a" : "#ff98001a",
                      color: category === "For Sale" ? "#25b579" : "#ff9800",
                    }}
                  >
                    {category}
                  </span>
                  <i className="fa fa-heart"></i>
                </div>
                <h4>{name}</h4>
                <p>
                  <i className="fa fa-location-dot"></i> {location}
                </p>
              </div>
              <div className="button flex">
                <div>
                  <button className="btn2">{price}</button> <label htmlFor="">/sqft</label>
                </div>
                <span>{type}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const DIV = styled.div`
  .recent .text {
    padding: 30px;
  }
  .recent .category span {
    padding: 4px 15px;
    border-radius: 2px;
    font-weight: 600;
    font-size: 13px;
    display: inline-block;
  }
  .recent .category i {
    font-size: 20px;
    color: #bec7d8;
  }
  .recent p {
    color: #72809d;
  }
  .recent .button {
    border-top: 1px solid #e4e8f3;
    padding: 10px 30px;
  }
`;
