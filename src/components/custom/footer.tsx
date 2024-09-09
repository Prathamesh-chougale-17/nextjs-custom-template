"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MountainIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
} from "../icons";
import { LinkPreview } from "../animations/link-preview";

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="bg-muted border-t"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <MountainIcon className="h-6 w-6" />
          <span className="text-sm text-muted-foreground">
            &copy; by{" "}
            <LinkPreview
              url="https://prathameshchougale.me"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
            >
              Prathamesh Chougale
            </LinkPreview>{" "}
            . All rights reserved.
          </span>
        </motion.div>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:underline"
            prefetch={false}
          >
            Privacy
          </Link>
          <Link
            href="#"
            className="text-sm text-muted-foreground hover:underline"
            prefetch={false}
          >
            Terms
          </Link>
          <div className="flex items-center gap-2">
            {[TwitterIcon, FacebookIcon, InstagramIcon].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 15 }}
                whileTap={{ scale: 0.8 }}
              >
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                  prefetch={false}
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">
                    {Icon.name.replace("Icon", "")}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
