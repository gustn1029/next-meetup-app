"use client";

import { LayoutProps } from "@/types/interface";
import { motion } from "framer-motion";
import classes from './MotionMeetupList.module.css';

export function MotionMeetupList({ children }: LayoutProps) {
  const list = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.ul variants={list} initial="hidden" animate="visible" className={classes.meetupList}>
      {children}
    </motion.ul>
  );
}

export function MotionMeetupListItem({ children }: LayoutProps) {
  const item = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return <motion.li variants={item}>{children}</motion.li>;
}
