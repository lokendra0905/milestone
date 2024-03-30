import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Toaster } from "react-hot-toast";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Toaster position="bottom-center" />
      <Header />
      {children}
      <Footer />
    </div>
  );
};
