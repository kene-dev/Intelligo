import React, { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

const AnimatedText = ({ text, title, text1 }) => {
  const [open, setOpen] = useState(false);
  useState(() => {
    setOpen(true);
    console.log("Animated Text is now open");
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.p
          initial={{ x: 20, opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="h-full flex flex-col gap-4 items-center justify-center w-full "
        >
          <h1
            style={{ whiteSpace: "pre-line" }}
            className="text-xl text-left font-bold font-pt w-[500px]"
          >
            {title}
          </h1>
          <p
            style={{ whiteSpace: "pre-line" }}
            className="text-xl text-left font-bold font-pt w-[500px]"
          >
            {text}
          </p>
          <p className="text-xl text-left font-bold font-pt w-[500px]">
            {text1}
          </p>
        </motion.p>
      )}
    </AnimatePresence>
  );
};

export default AnimatedText;
