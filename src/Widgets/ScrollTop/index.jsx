import { Box } from "@mui/material";
import React from "react";
import { FaArrowUp } from "react-icons/fa";
import "./scrollTop.css";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        backgroundColor: "transparent",
        position: "fixed",
        bottom: "20px",
        right: "20px",
        border: "none",
        cursor: "pointer",
        zIndex: 1,
      }}
    >
      <Box className="scroll-btn">
        <FaArrowUp style={{ fill: "#fff" }} />
      </Box>
    </button>
  );
};

export default ScrollToTopButton;
