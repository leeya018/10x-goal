import React, { useEffect, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { goalsStore } from "mobx/goalsStore"
import { toJS } from "mobx"
import GoBack from "components/GoBack"
import Title from "components/Title"

const Trace = observer(() => {
  const {
    goals,
    chosenMissionId,
    chosenGoalId,
    increaseMissionAmount,
    decreaseMissionAmount,
  } = goalsStore

  const buttonRef = useRef(null)
  const [isClickedPlus, setIsClickedPlus] = useState(false)
  const [isClickedMinus, setIsClickedMinus] = useState(false)

  const goal = goals.find((g) => g.id === chosenGoalId)
  console.log(toJS(goal))
  const mission = goal && goal.missions.find((m) => m.id === chosenMissionId)
  console.log(toJS(mission))

  return (
    <div className="h-[100vh] w-screen bg-secondary flex flex-col items-center px-2">
      <GoBack />
      <Title>Trace</Title>

      <div className="mt-2">{mission?.name}</div>
      <div
        className={`${
          parseInt(mission?.amount) >= parseInt(mission?.targetAmount) &&
          "text-green"
        }   mt-10`}
      >
        {mission?.amount}/{mission?.targetAmount}
      </div>
      <button
        ref={buttonRef}
        onMouseDown={() => setIsClickedPlus(true)}
        onMouseUp={() => setIsClickedPlus(false)}
        onClick={() => increaseMissionAmount(chosenGoalId, chosenMissionId)}
        className={`${
          isClickedPlus && "bg-green"
        } mt-20 ring-blueL ring-2 w-40 h-40 cursor-pointer rounded-full text-5xl `}
      >
        +
      </button>
      <button
        onClick={() => decreaseMissionAmount(chosenGoalId, chosenMissionId)}
        onMouseDown={() => setIsClickedMinus(true)}
        onMouseUp={() => setIsClickedMinus(false)}
        className={`${
          isClickedMinus && "bg-red"
        } flex justify-center items-center mt-10 ring-blueL 
        ring-2 w-10 h-10 cursor-pointer rounded-full text-5xl p-0 m-0 text-center text-vertical`}
      >
        -
      </button>
    </div>
  )
})

export default Trace
