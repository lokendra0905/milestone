/* eslint-disable @next/next/no-img-element */
import { FOOTER } from "@/constants";
import React from "react";
import styled from "styled-components";

export const Footer = () => {
  return (
    <FOOT>
      <section className="footerContact">
        <div className="container">
          <div className="send flex">
            <div className="text">
              <h1>Do You Have Questions ?</h1>
              <p>We&apos;ll help you to grow your career and growth.</p>
            </div>
            <button className="btn5">Contact Us Today</button>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="box">
            <div className="logo">
              <img src="/assets/logo-light.png" alt="" />
              <h2>Do You Need Help With Anything?</h2>
              <p>
                Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every
                month
              </p>

              <div className="input flex">
                <input type="text" placeholder="Email Address" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          {FOOTER.map((val, index) => (
            <div key={index} className="box">
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items, index) => (
                  <li key={index}> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className="legal">
        <span>© 2024 RentUP. Designd By Lokendra.</span>
      </div>
    </FOOT>
  );
};

const FOOT = styled.div`
  .footerContact {
    background-color: #27ae60;
    padding: 40px 0;
    color: #fff;
  }
  .footerContact h1 {
    font-size: 40px;
  }
  footer {
    background-color: #1d2636;
    padding: 50px 0;
    color: #fff;
  }
  footer .container {
    display: grid;
    grid-template-columns: 6fr 2fr 2fr 1fr;
    grid-gap: 20px;
  }
  footer img {
    width: 150px;
  }
  footer h2 {
    font-weight: 500;
  }
  footer p {
    color: grey;
    margin: 20px 0;
  }
  footer input {
    background-color: #fff;
    padding: 17px;
    width: 100%;
    border-radius: 5px;
  }
  footer h3 {
    font-weight: 500;
    margin-bottom: 30px;
  }
  footer ul {
    display: block;
  }
  footer ul li {
    display: block;
    color: grey;
    margin-bottom: 20px;
  }
  .legal {
    text-align: center;
    padding: 20px;
    background: #1d2636;
    color: rgba(255, 255, 255, 0.5);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  @media screen and (max-width: 800px) {
    footer .container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
