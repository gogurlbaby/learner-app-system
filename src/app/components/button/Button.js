import React from "react";

function Button({
  type = "button",
  onClick,
  Text,
  Icon,
  iconPosition = "right",
}) {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className="w-full bg-[#01589A] py-[0.75rem] px-[1.5rem] text-white flex justify-center items-center gap-[0.5rem] text-base font-semibold rounded-[5px] border border-solid border-[#01589A] hover:bg-[#014273] hover:border-[#014273]"
      >
        {iconPosition === "left" && Icon && Icon}
        {Text}
        {iconPosition === "right" && Icon && Icon}
      </button>
    </>
  );
}

export default Button;
