import React from "react"
import Button from "."

import { MdFeedback } from "react-icons/md"
export default function EditButton({ onClick = () => {}, className = "" }) {
  return (
    <MdFeedback
      className={`w-10 h-20  cursor-pointer border-2 ${className}`}
      onClick={onClick}
    />
  )
}
