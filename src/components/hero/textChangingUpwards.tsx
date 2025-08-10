"use client";
import React, { FC, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


interface TextChangingUpwardsProps {
  texts: string[];
}

const TextChangingUpwards: FC<TextChangingUpwardsProps> = ({ texts }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="text-[#71717B] text-sm overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={texts[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="block"
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default TextChangingUpwards;
