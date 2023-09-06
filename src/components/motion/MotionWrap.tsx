'use client';
import { LayoutProps } from '@/types/interface';
import { motion } from 'framer-motion';

export default function MotionWrap({children}: LayoutProps) {
    return (
        <motion.div
            initial={{opacity: 0, y: -100}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -100}}
        >{children}</motion.div>
    )
}