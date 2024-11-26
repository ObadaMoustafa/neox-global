import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const FadeTextByLetter = forwardRef(
  ({ text, className, delay, inView, once, duration = 0.5 }, ref) => {
    //write code here
    const letters = Array.from(text);

    const variants = {
      init: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: duration / letters.length,
          delayChildren: delay,
        },
      },

      exit: { opacity: 0, x: -250, scale: 0, y: 100 },
    };

    return (
      <motion.div
        ref={ref}
        variants={variants}
        initial="init"
        animate={inView ? false : 'show'}
        exit="exit"
        className={className}
        whileInView={inView ? 'show' : false}
        viewport={{ once: once ? true : false }}
      >
        {letters.map((letter, index) => (
          <motion.span key={index} variants={variants}>
            {letter}
          </motion.span>
        ))}
      </motion.div>
    );
  }
);

FadeTextByLetter.displayName = 'Animated Text';
FadeTextByLetter.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
  inView: PropTypes.bool,
  duration: PropTypes.number,
};
export default FadeTextByLetter;
