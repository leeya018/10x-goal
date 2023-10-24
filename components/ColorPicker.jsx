import React, { useState } from "react"
import { SketchPicker } from "react-color"

function ColorPicker({ setColor, color, closePalate }) {
  const handleColorChange = (colorEvent) => {
    setColor(colorEvent.hex)
  }

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray_dark bg-opacity-50 z-10">
      <div className="relative flex flex-col justify-center w-full h-full items-center z-20">
        <SketchPicker color={color} onChangeComplete={handleColorChange} />

        <button
          onClick={closePalate}
          className={` p-2 border-2  bg-blue-500 text-black rounded bg-white w-[60%]`}
        >
          set color
        </button>
      </div>
    </div>
  )
}

export default ColorPicker
