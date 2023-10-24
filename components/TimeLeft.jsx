import React, { useEffect, useState } from "react"

function secToTime(duration) {
  let seconds = Math.floor(duration % 60)
  let minutes = Math.floor((duration / 60) % 60)
  let hours = Math.floor((duration / (60 * 60)) % 24)
  // console.log({ seconds, minutes, hours })
  hours = hours < 10 ? "0" + hours : hours
  minutes = minutes < 10 ? "0" + minutes : minutes
  seconds = seconds < 10 ? "0" + seconds : seconds

  return hours + ":" + minutes + ":" + seconds
}

function differenceFromTomorrow(inputDate) {
  // Parse the input date
  let date = new Date(inputDate)

  // Add one day
  date.setDate(date.getDate() + 1)

  // Get the current date
  const currentDate = new Date()

  // Calculate the difference in milliseconds
  const difference = date - currentDate

  return difference
}

function TimeLeft({ createdDate }) {
  const [seconds, setSeconds] = useState(0)
  // console.log(msTime)
  if (!createdDate) return null
  useEffect(() => {
    const msDiff = differenceFromTomorrow(createdDate)
    setSeconds(msDiff / 1000)
    const intervalId = setInterval(() => {
      setSeconds((prevCount) => prevCount - 1)
    }, 1000)

    // Clear the interval when the component is unmounted
    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className={`${seconds < 3600 && "text-red"}`}>
      {secToTime(seconds)}
    </div>
  )
}

export default TimeLeft
