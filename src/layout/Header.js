/* eslint-disable @next/next/no-img-element */
import { NAVLINK } from "@/constants";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

export const Header = () => {
  return (
    <HEAD>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src="/assets/logo.png" alt=""  />
          </div>
          <div className="nav">
            <ul className="flex">
              {NAVLINK.map((list, index) => (
                <li key={index}>
                  <Link href={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="button flex">
            <button className="btn1">
              <i className="fa fa-sign-out"></i> Sign In
            </button>
          </div>
        </div>
      </header>
    </HEAD>
  );
};

const HEAD = styled.div`
  background-color: #fff;
  height: 15vh;
  box-shadow: 0 5px 30px rgb(0 22 84 / 10%);
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 99999;

  header img {
    width: 170px;
  }
  header a {
    margin-left: 30px;
    transition: 0.5s;
    font-weight: 500;
  }
  header a:hover {
    color: #27ae60;
  }
  header span {
    width: auto;
    padding: 0px 6px;
    background: #27ae60;
    border-radius: 50px;
    color: #ffffff;
    margin-right: 4px;
    font-weight: 400;
  }
  header h4 {
    font-weight: 500;
    margin-right: 20px;
  }
  header .toggle {
    display: none;
  }
  @media screen and (max-width: 768px) {
    header {
      padding: 0;
    }
    header img {
      margin-top: 30px;
    }
    header .button {
      display: none;
    }
    header .nav .flex {
      display: none;
    }
    header .toggle {
      display: block;
      margin-top: 20px;
    }
    header .small {
      position: absolute;
      top: 10vh;
      left: 0;
      width: 100%;
      background-color: #27ae60;
      padding: 20px;
    }
    header li a {
      display: inline-block;
      margin-bottom: 20px;
      color: #fff;
    }
  }
`;
