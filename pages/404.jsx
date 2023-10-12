import React from "react"
import { useRouter } from "next/router"
import { goalsStore } from "mobx/goalsStore"

export default function notFound() {

  return (
    <div className="h-[100vh] w-screen  flex flex-col justify-center items-center  gap-2">
      <h1>Page not found</h1>
    </div>
  )
}
