/* eslint-disable @next/next/no-img-element */
import { Background } from "@/common/Background";
import { Heading } from "@/common/Heading";
import React from "react";
import styled from "styled-components";

export const About = () => {
  return (
    <DIV>
      <section className="about">
        <Background name="About Us" title="About Us - Who We Are?" cover={"/assets/about.jpg"} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading
              title="Our Agency Story"
              subtitle="Check out our company story and work process"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip.
            </p>
            <button className="btn2">More About Us</button>
          </div>
          <div className="right row">
            <img src="/assets/immio.jpg" alt="" />
          </div>
        </div>
      </section>
    </DIV>
  );
};

const DIV = styled.div`
  .about {
    margin-bottom: 80px;
  }
  .about .heading {
    text-align: left;
    width: 100%;
    margin-bottom: 30px;
  }
  .about p {
    font-size: 15px;
    padding-right: 30px;
    margin-bottom: 20px;
    line-height: 30px;
  }
  @media screen and (max-width: 768px) {
    .about .container {
      flex-direction: column;
    }
    .about p {
      padding: 0;
    }
    .about .container img {
      margin-top: 50px;
    }
  }
`;
