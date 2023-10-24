import React from "react"

export default function Title({ children, className = "" }) {
  return (
    <div
      className={`flex justify-center underline text-4xl pb-4  mb-2 ${className} `}
    >
      {children}
    </div>
  )
}
