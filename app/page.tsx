"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

// const ParallaxText = ({
//   children,
//   baseVelocity = 100,
// }: {
//   children: React.ReactNode;
//   baseVelocity?: number;
// }) => {
//   const [rotate, setRotate] = useState(0);
//   const baseX = useMotionValue(0);
//   const { scrollY } = useScroll();
//   const scrollVelocity = useVelocity(scrollY);
//   const smoothVelocity = useSpring(scrollVelocity, {
//     damping: 50,
//     stiffness: 400,
//   });
//   const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
//     clamp: false,
//   });

//   const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

//   useAnimationFrame((t, delta) => {
//     let moveBy = baseVelocity * (delta / 1000);
//     moveBy += moveBy * velocityFactor.get();
//     baseX.set(baseX.get() + moveBy);

//     setRotate(rotate + 0.1);
//   });

//   return (
//     <div className="parallax">
//       <motion.div className="scroller" style={{ x }}>
//         <motion.span
//           style={{ rotate: rotate }}
//           className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
//         >
//           {children}
//         </motion.span>
//       </motion.div>
//     </div>
//   );
// };

const FloatingCard = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: [-1, 1, -1, 1, 0] }}
      whileTap={{ scale: 0.95 }}
    >
      <Card className="dark:bg-white/10 bg-black/10 backdrop-blur-lg border-0 shadow-xl">
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-black/80 dark:text-white/80">{content}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <main>
        <section className="min-h-screen flex flex-col justify-center items-center relative">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-6xl md:text-8xl font-extrabold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
          >
            Welcome to the Future
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl md:text-2xl text-center mb-12 text-black/80 dark:text-white/80 max-w-2xl"
          >
            Experience web development like never before. Dive into a world
            where creativity meets technology.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Link href={"/service"}>
              <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition duration-300">
                Get Started
              </Button>
            </Link>
          </motion.div>
        </section>

        <section className="py-12 lg:py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Our Stellar Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FloatingCard
                title="Quantum Web Design"
                content="Push the boundaries of design with our cutting-edge approach that blends aesthetics with functionality."
              />
              <FloatingCard
                title="AI-Powered Development"
                content="Harness the power of artificial intelligence to create smart, adaptive web applications."
              />
              <FloatingCard
                title="Blockchain Integration"
                content="Seamlessly integrate blockchain technology into your web projects for enhanced security and transparency."
              />
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-12 text-black/80 dark:text-white/80 max-w-2xl mx-auto">
              Join us in shaping the future of web development. Let&apos;s
              create something extraordinary together.
            </p>
            <Link href={"/contact"}>
              <Button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition duration-300">
                Contact Us
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
