import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { useRouter } from "next/dist/client/router"

const index = observer(() => {
  const router = useRouter()

  useEffect(() => {
    router.push("/goals")
  }, [])

  return null
})

export default index
