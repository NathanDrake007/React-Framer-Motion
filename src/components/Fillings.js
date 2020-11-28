import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", delay: 0.5 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const Fillings = ({ addFillings, sandwich }) => {
  let fillings = [
    "Mushrooms",
    "Egg Mayo",
    "Turkey",
    "Bacon",
    "Extra Cheese",
    "Tuna Mayo",
  ];

  return (
    <motion.div
      className="fillings container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h3>Step 2: Choose Fillings</h3>
      <ul>
        {fillings.map((filling) => {
          let spanClass = sandwich.fillings.includes(filling) ? "active" : "";
          return (
            <motion.li
              key={filling}
              onClick={() => addFillings(filling)}
              whileHover={{ scale: 1.3, originX: 0, color: "#f8e112" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className={spanClass}>{filling}</span>
            </motion.li>
          );
        })}
      </ul>
      <Link to="/order">
        <motion.button variants={buttonVariants} whileHover="hover">
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Fillings;
