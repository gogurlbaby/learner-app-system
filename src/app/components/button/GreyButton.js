import React from "react";

function GreyButton({
  type = "button",
  onClick,
  Text,
  Icon,
  iconPosition = "right",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-[#E6E6E6] py-[0.75rem] px-[1rem] text-base font-sans font-semibold text-[#404040] flex justify-center items-center gap-[0.75rem]"
    >
      {iconPosition === "left" && Icon && Icon}
      {Text}
      {iconPosition === "right" && Icon && Icon}
    </button>
  );
}

export default GreyButton;
