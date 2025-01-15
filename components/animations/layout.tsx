"use client";
import React from "react";
import { motion } from "framer-motion";
import Navbar from "../custom/navbar";
import Footer from "../custom/footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      className="flex flex-col min-h-[100dvh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <motion.main
        className="flex-1"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {children}
      </motion.main>
      <Footer />
    </motion.div>
  );
};

export default Layout;
