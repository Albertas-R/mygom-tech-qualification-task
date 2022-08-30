import React from "react";

// https://react-icons.github.io/react-icons
// fa - Font Awesome
import { FaChevronDown, FaChevronUp, FaCheck, FaLinkedin } from "react-icons/fa";

export function ChevronDownIconFa() {
  const style = {
    // fontSize: "2rem",
    color: "green",
  };

  return <FaChevronDown style={style} />;
}

export function ChevronUpIconFa() {
  const style = {
    // fontSize: "2rem",
    color: "red",
  };

  return <FaChevronUp style={style} />;
}

export function CheckIconFa() {
  const style = {
    fontSize: "1.6rem",
    color: "cornflowerblue",
  };

  return <FaCheck style={style} />;
}

export function LinkedinIconFa() {
  const style = {
    fontSize: "2.4rem",
    color: "#0072b1",
  };

  return <FaLinkedin style={style} />;
}
