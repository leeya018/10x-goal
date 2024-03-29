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

const Trace = observer(() => {
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
  const { sound, playSound } = useSound("/yeah.mp3")

  const goal = goals.find((g) => g.id === chosenGoalId)
  console.log(toJS(goal))
  const mission = goal && goal.missions.find((m) => m.id === chosenMissionId)
  console.log(toJS(mission))

  useEffect(() => {
    setIsClient(true)
  }, [])
  useEffect(() => {
    console.log(canPlay)
    if (
      parseInt(mission?.amount) >= parseInt(mission?.targetAmount) &&
      canPlay
    ) {
      playSound()
      setCanPlay(false)
      setTimeout(() => {
        setCanPlay(true)
      }, 5000)
    }
  }, [mission?.amount])

  if (!isClient) return null

  return (
    <div className="h-[100vh] w-screen bg-secondary flex flex-col items-center px-2">
      <GoBack />
      {/* <TimeLeft createdDate={"2023-10-24T10:00:29.212Z"} /> */}
      <TimeLeft createdDate={mission?.date} />
      <Title className="pt-5">Trace</Title>
      <div className="mt-2">{mission?.name}</div>
      <div
        className={`${
          parseInt(mission?.amount) >= parseInt(mission?.targetAmount) &&
          "text-green"
        }   mt-10`}
      >
        {mission?.amount}/{mission?.targetAmount}
      </div>
      <div className="w-[30vh]">
        <Chart done={mission.amount} total={parseInt(mission.targetAmount)} />
      </div>

      <div className="flex gap-2 px-2 w-full bottom-2 absolute">
        <ShinyButton
          onClick={() => decreaseMissionAmount(chosenGoalId, chosenMissionId)}
          onMouseDown={() => setIsClickedMinus(true)}
          onMouseUp={() => setIsClickedMinus(false)}
          className=" h-40 w-[40%] shiny-effect ring-2 ring-pink_login_but2 red"
        >
          -
        </ShinyButton>
        <ShinyButton
          ref={buttonRef}
          onMouseDown={() => setIsClickedPlus(true)}
          onMouseUp={() => setIsClickedPlus(false)}
          onClick={() => increaseMissionAmount(chosenGoalId, chosenMissionId)}
          className="p-4 h-40 w-full shiny-effect ring-2 blue"
        >
          +
        </ShinyButton>
      </div>
    </div>
  )
})

export default Trace
