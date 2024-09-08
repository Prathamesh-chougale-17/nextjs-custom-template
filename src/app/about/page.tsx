"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, MeshWobbleMaterial } from "@react-three/drei";
import { Card, CardContent } from "@/components/ui/card";
import * as THREE from "three";

const AnimatedObject = ({
  geometry,
  position,
  wobbleSpeed = 1,
  wobbleFactor = 0.2,
}: {
  geometry: React.ReactNode;
  position: [number, number, number];
  wobbleSpeed?: number;
  wobbleFactor?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
      if (hovered) {
        meshRef.current.scale.set(1.2, 1.2, 1.2);
      } else {
        meshRef.current.scale.set(1, 1, 1);
      }
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {geometry}
      <MeshWobbleMaterial
        color={new THREE.Color().setHSL(Math.random(), 0.5, 0.5)}
        factor={hovered ? wobbleFactor * 2 : wobbleFactor}
        speed={hovered ? wobbleSpeed * 2 : wobbleSpeed}
      />
    </mesh>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={false} enablePan={false} />
      <Float floatIntensity={2} rotationIntensity={2}>
        <AnimatedObject
          geometry={<torusKnotGeometry args={[0.7, 0.3, 128, 16]} />}
          position={[0, 1, 0]}
        />
        <AnimatedObject
          geometry={<octahedronGeometry args={[0.7]} />}
          position={[1.5, -1, 0]}
          wobbleSpeed={2}
        />
        <AnimatedObject
          geometry={<dodecahedronGeometry args={[0.7]} />}
          position={[-1.5, -1, 0]}
          wobbleFactor={0.4}
        />
      </Float>
    </>
  );
};

const AboutPage: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
          <Scene />
        </Canvas>
      </div>
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container px-4 lg:max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-12 text-left"
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
                <h2 className="text-2xl font-semibold mb-4">Our Expertise</h2>
                <p className="text-lg mb-4">
                  We are a team of passionate developers and designers dedicated
                  to creating innovative solutions. Our expertise spans across
                  various technologies and industries, allowing us to tackle
                  complex challenges with creativity and precision.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 backdrop-blur-lg border-0">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-lg mb-4">
                  With years of experience in web development, we specialize in
                  building responsive, performant, and visually stunning
                  applications using cutting-edge technologies like Next.js,
                  React, and Three.js.
                </p>
                <p className="text-lg">
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
