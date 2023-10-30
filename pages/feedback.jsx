import React, { useEffect, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { appStore } from "mobx/appStore"
import { toJS } from "mobx"
import GoBack from "components/GoBack"
import Title from "components/Title"
import TimeLeft from "components/TimeLeft"
import { Chart } from "components/Chart"
import ShinyButton from "components/ShinyButton"
import useSound from "hooks/useSound"

const Feedback = observer(() => {
  const {
    goals,
    chosenMissionId,
    chosenGoalId,
    increaseMissionAmount,
    decreaseMissionAmount,
  } = appStore

  const buttonRef = useRef(null)
  const [isClickedPlus, setIsClickedPlus] = useState(false)
  const [isClickedMinus, setIsClickedMinus] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [canPlay, setCanPlay] = useState(true)

  const goal = goals.find((g) => g.id === chosenGoalId)
  console.log(toJS(goal))
  const mission = goal && goal.missions.find((m) => m.id === chosenMissionId)
  console.log(toJS(mission))

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <div className="h-[100vh] w-screen bg-secondary flex flex-col items-center px-5">
      <GoBack />

      <Title className="pt-5">feedback</Title>
      <div className="mt-5 flex flex-col gap-3">
        <div className="mt-2">
          name:<span className="font-bold">{mission?.name}</span>
        </div>

        <div className="mt-2">
          {" "}
          reason for not complete {mission?.whyNotDone}
        </div>
        <div className="mt-2">next time : {mission?.howToImprove}</div>
      </div>
    </div>
  )
})

export default Feedback
