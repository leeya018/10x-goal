import React from "react";
import Button from ".";

export default function ModalButton({
  children,
  onClick = () => {},
  className = "",
}) {
  return (
    <Button
      className={`border-2 border-white w-full py-3 
       text-center flex justify-center items-center rounded-md 
       bg-gradient-to-r ${className}`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
