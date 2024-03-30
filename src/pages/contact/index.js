import { Background } from "@/common/Background";
import React from "react";
import styled from "styled-components";

export const Contact = () => {
  return (
    <DIV>
      <section className="contact mb">
        <Background
          name="Contact Us"
          title="Get Helps & Friendly Support"
          cover={"/assets/about.jpg"}
        />
        <div className="container">
          <form className="shadow">
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Email" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea cols="30" rows="10"></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </DIV>
  );
};

const DIV = styled.div`
  .contact form div {
    display: flex;
  }
  .contact textarea {
    border: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
    border-radius: 5px;
    margin-bottom: 20px;
    color: #000;
    padding: 5px;
  }
  .contact input {
    margin-bottom: 20px;
    margin-right: 10px;
    width: 100%;
    color: black;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 5px;
  }
  .contact form {
    padding: 30px;
    margin-top: 100px;
  }
  @media screen and (max-width: 768px) {
    .contact h4 {
      width: 100%;
      margin-bottom: 30px;
    }
    .contact form div {
      flex-direction: column;
    }
    .contact input {
      width: 100%;
    }
  }
`;
