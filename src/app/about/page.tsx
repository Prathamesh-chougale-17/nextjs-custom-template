"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import AboutPageAnimation from "@/components/svg/aboutsvg";

const AboutPage: React.FC = () => {
  const svgVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: 0.3,
      },
    },
  };

  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full items-center justify-center md:flex hidden">
        <AboutPageAnimation />
      </div>
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container px-2 lg:max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-12 text-left text-white"
          >
            About Us
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-white">
                  Our Expertise
                </h2>
                <p className="text-lg mb-4 text-white/80">
                  We are a team of passionate developers and designers dedicated
                  to creating innovative solutions. Our expertise spans across
                  various technologies and industries, allowing us to tackle
                  complex challenges with creativity and precision.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-white">
                  Our Mission
                </h2>
                <p className="text-lg mb-4 text-white/80">
                  With years of experience in web development, we specialize in
                  building responsive, performant, and visually stunning
                  applications using cutting-edge technologies like Next.js,
                  React, and SVG animations.
                </p>
                <p className="text-lg text-white/80">
                  Our mission is to empower businesses and individuals by
                  delivering high-quality software solutions that drive growth
                  and success in the digital landscape.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
