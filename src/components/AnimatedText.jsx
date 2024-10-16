import { motion } from 'framer-motion';

function AnimatedText({ text, className }) {
  //write code here
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.09 },
    }),
    exit: { opacity: 0, x: -250, scale: 0, y: 100 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={container}>
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
}

export default AnimatedText;
