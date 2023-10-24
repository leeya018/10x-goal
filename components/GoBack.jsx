import React from "react"
import { useRouter } from "next/router"
import { BiArrowBack } from "react-icons/bi"

export default function GoBack() {
  const router = useRouter()

  return (
    <BiArrowBack
      size={32}
      color="black"
      className="absolute left-8 top-10 cursor-pointer"
      onClick={() => router.back()}
    />
  )
}
