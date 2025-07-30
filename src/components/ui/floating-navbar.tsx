"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import Image from "next/image";
import logo from "../../../public/logo.svg"


export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(true);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-sidebar-border dark:border-white/[0.2] rounded-md dark:bg-black bg-white shadow-md z-[5000] pr-2 pl-2 py-3 justify-between items-center space-x-10",
          className
        )}
      >
       <div className="flex flex-row justify-center items-center">
        <Image src={logo} alt="logo" width={48}/>
        <span>AnalyticalHigh</span>
       </div>
       <div>
                {navItems.map((navItem, idx) => (
          <Button key={`link=${idx}`} variant={"ghost"} size="sm" asChild>
            <a href={navItem.link}>
              {/* If you have icons, they go here */}
              <span>{navItem.name}</span>
            </a>
          </Button>
        ))}
       </div>

        <Button variant={"default"} size="sm">
                    <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px h-px" />
        </Button>
      </motion.div>
    </AnimatePresence>
  );
};
