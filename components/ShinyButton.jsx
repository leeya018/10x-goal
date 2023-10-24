import React from "react"

function ShinyButton({
  children,
  onClick = () => {},
  onMouseUp = () => {},
  onMouseDown = () => {},
  ref,
  className = "",
}) {
  return (
    <button
      ref={ref}
      onClick={onClick}
      onMouseUp={onMouseUp}
      onMouseDown={onMouseDown}
      className={`${className} flex justify-center items-center  text-white rounded`}
    >
      {children}
    </button>
  )
}

export default ShinyButton
