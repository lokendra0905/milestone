import { Background } from "@/common/Background";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import styled from "styled-components";

export const Contact = () => {
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      mobile: "",
      desc: "",
    },
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      reset();
      toast.success("Enquiry Submitted");
      setLoading(false);
    } else {
      toast.error("Something Went Wrong");
      setLoading(false);
    }
  };

  return (
    <DIV>
      <section className="contact mb">
        <Background
          name="Contact Us"
          title="Get Helps & Friendly Support"
          cover={"/assets/about.jpg"}
        />
        <div className="container">
          <form className="shadow" onSubmit={handleSubmit(onSubmit)}>
            <h4>Enquiry Form</h4> <br />
            <div>
              <Controller
                name="name"
                control={control}
                render={({ field }) => <input {...field} type="text" placeholder="Name" required />}
              />
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <input {...field} type="email" placeholder="Email" required />
                )}
              />
            </div>
            <Controller
              name="mobile"
              control={control}
              render={({ field }) => <input {...field} type="tel" placeholder="Mobile" required />}
            />
            <Controller
              name="subject"
              control={control}
              render={({ field }) => (
                <input {...field} type="text" placeholder="Subject" required />
              )}
            />
            <Controller
              name="desc"
              control={control}
              render={({ field }) => <textarea cols="30" rows="10" {...field}></textarea>}
            />
            <button disabled={loading}>
              {loading ? <div className="loader"></div> : "Submit Request"}
            </button>
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
    margin-top: 50px;
  }

  h4 {
    text-align: center;
    font-size: xx-large;
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
