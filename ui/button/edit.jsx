import React from "react"
import Button from "."

import { AiOutlineEdit } from "react-icons/ai"
export default function EditButton({ onClick = () => {}, className = "" }) {
  return (
    <AiOutlineEdit
      className={`w-10 h-10  cursor-pointer border-2 ${className}`}
      onClick={onClick}
    />
  )
}
