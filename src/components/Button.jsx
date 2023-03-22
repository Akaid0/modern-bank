import React from "react";

const Button = ({ styles }) => {
  return (
<a href="https://www.linkedin.com/in/lucawebdev/" target="_blank" alt="My resume">
    <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary ouline-none ${styles} rounded-[10px] transition duration-100 ease-in-out hover:scale-110 active:text-white`}>
      Get Started
    </button>
</a>
  );
};

export default Button;
