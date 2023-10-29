import React from "react";

export default function Button({
  children,
  className,
  onClick = () => {},
  ref = null,
}) {
  return (
    <div onClick={onClick} ref={ref} className={"cursor-pointer " + className}>
      {children}
    </div>
  );
}
