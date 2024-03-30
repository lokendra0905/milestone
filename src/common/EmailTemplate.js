import React from "react";

export const EmailTemplate = ({ name, desc, email, mobile }) => {
  return (
    <div>
      <div>
        <h1>Welcome, {name}!</h1>
        <h3>Email : {email}!</h3>
        <h3>Phone : {mobile}!</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};
