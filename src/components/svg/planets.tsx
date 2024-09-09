"use client";
import React, { useState, useEffect, useCallback } from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";

const CosmicHomePage = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();
  const yMotion = useMotionValue(0);
  const xMotion = useMotionValue(0);
  const rotateX = useTransform(yMotion, [-300, 300], [15, -15]);
  const rotateY = useTransform(xMotion, [-300, 300], [-15, 15]);

  const handleMouseMove = useCallback(
    (event: { currentTarget?: any; clientX?: any; clientY?: any }) => {
      const { clientX, clientY } = event;
      const rect = event.currentTarget.getBoundingClientRect();
      const x = clientX - rect.left - rect.width / 2;
      const y = clientY - rect.top - rect.height / 2;
      setCursorPosition({ x, y });
      xMotion.set(x);
      yMotion.set(y);
    },
    [xMotion, yMotion]
  );

  useEffect(() => {
    controls.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    });
  }, [controls]);

  const starVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        yoyo: Infinity,
        repeatDelay: Math.random() * 2,
      },
    },
  };

  const planetVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.5,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
  };

  return (
    <div
      className="w-full h-screen bg-black overflow-hidden relative"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="w-full h-full"
        style={{ rotateX, rotateY, perspective: 1000 }}
      >
        <svg
          viewBox="0 0 1000 1000"
          className="w-full h-full absolute top-0 left-0"
        >
          <defs>
            <radialGradient id="cosmos" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3B0764" stopOpacity="1" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Cosmic background */}
          <motion.rect
            width="100%"
            height="100%"
            fill="url(#cosmos)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          />

          {/* Stars */}
          {[...Array(200)].map((_, i) => (
            <motion.circle
              key={i}
              cx={Math.random() * 1000}
              cy={Math.random() * 1000}
              r={Math.random() * 2 + 0.5}
              fill="#FFFFFF"
              variants={starVariants}
              initial="hidden"
              animate="visible"
              style={{ filter: "url(#glow)" }}
            />
          ))}

          {/* Central planet */}
          <motion.g
            variants={planetVariants}
            initial="hidden"
            animate="visible"
          >
            <circle cx="500" cy="500" r="150" fill="#60A5FA" />
            <ellipse
              cx="500"
              cy="500"
              rx="150"
              ry="30"
              fill="#1E3A8A"
              opacity="0.3"
            />
            <path
              d="M350 500 Q 500 400, 650 500 Q 500 600, 350 500"
              fill="#2563EB"
              opacity="0.5"
            />
          </motion.g>

          {/* Orbiting moons */}
          <motion.g
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <circle cx="800" cy="500" r="30" fill="#F472B6" />
            <circle cx="500" cy="200" r="20" fill="#34D399" />
            <circle cx="300" cy="700" r="25" fill="#FBBF24" />
          </motion.g>

          {/* Interactive comet */}
          <motion.path
            d={`M${cursorPosition.x},${cursorPosition.y} q-50,10 -100,0`}
            stroke="#F9FAFB"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ filter: "url(#glow)" }}
          />
        </svg>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <motion.h1
            className="text-6xl font-bold mb-4"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Welcome to the Cosmos
          </motion.h1>
          <motion.p
            className="text-xl mb-8"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Explore the infinite possibilities of web development
          </motion.p>
          <motion.button
            className="px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default CosmicHomePage;
