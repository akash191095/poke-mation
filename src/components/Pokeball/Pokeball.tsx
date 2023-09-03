import { useState } from "react";
import styles from "./Pokeball.module.css";
import { motion } from "framer-motion";

type PokeballProps = {
  topBallColor: string;
  pokeImage: string;
  bgColor: string;
};

function Pokeball(props: PokeballProps) {
  const { topBallColor, pokeImage, bgColor } = props;
  const [isAnimating, setIsAnimating] = useState(false);
  return (
    <div className="ml-8 mb-14 flex">
      <motion.div
        className={styles.container}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.3 },
          filter: `drop-shadow(0px 0px 40px ${bgColor})`,
        }}
        transition={{ bounce: 0 }}
        onHoverStart={() => setIsAnimating(true)}
        onHoverEnd={() => setIsAnimating(false)}
        initial={{ filter: "drop-shadow(0px 0px 0px white)" }}
      >
        <motion.div
          animate={
            isAnimating
              ? {
                  y: -40,
                  transition: { duration: 0.4, bounce: 0 },
                }
              : undefined
          }
          transition={{ bounce: 0 }}
          className={`${styles["top-semi-circle"]}`}
          style={{ backgroundColor: topBallColor }}
        ></motion.div>
        <motion.img
          initial={false}
          src={pokeImage}
          className={styles.pokemon}
          animate={
            isAnimating
              ? {
                  opacity: 1,
                  transition: { duration: 0.2 },
                }
              : { opacity: 0 }
          }
          transition={{ bounce: 0 }}
        ></motion.img>
        <motion.div className={styles["center-circle"]}></motion.div>
        <motion.div
          className={`${styles["bottom-semi-circle"]} ${styles["white-circle"]}`}
        ></motion.div>
      </motion.div>
    </div>
  );
}

export default Pokeball;
