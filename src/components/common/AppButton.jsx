import React from 'react';
import { ArrowRight, LogIn } from "lucide-react";

export const PrimaryBtn = ({
  className = "",
  onClick,
  disabled = false,
  type = "button",
  text,
  arrowRight,
  icon = null
}) => {
  return (
    <button
      className={`btn button-class primary-btn ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {text}
      {arrowRight === true ? <ArrowRight size={18} /> : icon}
    </button>
  )
}


export const SecondaryBtn = ({ 
  className = "",
  onClick,
  disabled = false,
  type = "button",
  text,
  arrowRight,
  icon = null }) => {
  return (
    <button
      className={`btn button-class secondary-btn ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {text}
      {arrowRight === true ? <ArrowRight size={18} /> : icon}
    </button>
  )
}

