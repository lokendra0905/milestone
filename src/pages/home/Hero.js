import { Heading } from "@/common/Heading";
import React from "react";
import styled from "styled-components";

export const Hero = () => {
  return (
    <HERO>
      <section className="hero">
        <div className="container">
          <Heading
            title="Search Your Next Home "
            subtitle="Find new & featured property located in your local city."
          />

          <form className="flex">
            <div className="box">
              <span>City/Street</span>
              <input type="text" placeholder="Location" />
            </div>
            <div className="box">
              <span>Property Type</span>
              <input type="text" placeholder="Property Type" />
            </div>
            <div className="box">
              <span>Price Range</span>
              <input type="text" placeholder="Price Range" />
            </div>
            <div className="box">
              <h4>Advance Filter</h4>
            </div>
            <button className="btn1">Search</button>
          </form>
        </div>
      </section>
    </HERO>
  );
};

const HERO = styled.div`
  .hero {
    background-image: url("/assets/banner.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 90vh;
    width: 100%;
  }
  .hero .container {
    padding-top: 15%;
  }
  .hero h1 {
    color: #fff;
    font-size: 60px;
  }
  .hero p {
    color: #fff;
    opacity: 0.8;
  }
  form {
    background-color: #fff;
    border-radius: 5px;
    margin-top: 50px;
    padding: 0 20px;
  }
  form input {
    padding: 10px;
    width: 100%;
    border: 1px solid rgba(128, 128, 128, 0.2);
    margin-top: 5px;
    border-radius: 5px;
  }
  form span {
    font-size: 14px;
    color: grey;
  }
  input::placeholder {
    font-size: 17px;
    color: black;
  }
  form .box {
    padding: 15px;
    border-left: 1px solid rgba(128, 128, 128, 0.2);
  }
  form .box:nth-child(1) {
    border-left: none;
  }
  form h4 {
    font-weight: 500;
    white-space: nowrap;
    color: grey;
  }
  @media screen and (max-width: 800px) {
    .hero .container {
      padding-top: 30%;
    }
    form {
      display: flex;
      flex-wrap: wrap;
    }
    form .box {
      border-left: none;
    }
    form input {
      width: 100%;
    }
  }
`;
