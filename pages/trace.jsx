import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import { goalsStore } from "mobx/goalsStore"
import { toJS } from "mobx"

const Trace = observer(() => {
  const {
    goals,
    chosenMissionId,
    chosenGoalId,
    increaseMissionAmount,
    decreaseMissionAmount,
  } = goalsStore

  const goal = goals.find((g) => g.id === chosenGoalId)
  console.log(toJS(goal))
  const mission = goal && goal.missions.find((m) => m.id === chosenMissionId)
  console.log(toJS(mission))
  return (
    <div className="h-[100vh] w-screen bg-secondary flex flex-col items-center px-2">
      <div className="mt-2">Trace</div>
      <div className="mt-2">{mission?.name}</div>
      <div className="mt-10">
        {mission?.amount}/{mission?.targetAmount}
      </div>
      <button
        onClick={() => increaseMissionAmount(chosenGoalId, chosenMissionId)}
        className="mt-20 ring-blueL ring-2 w-40 h-40 cursor-pointer rounded-full text-5xl"
      >
        +
      </button>
      <button
        onClick={() => decreaseMissionAmount(chosenGoalId, chosenMissionId)}
        className="flex justify-center items-center mt-10 ring-blueL ring-2 w-10 h-10 cursor-pointer rounded-full text-5xl"
      >
        -
      </button>
    </div>
  )
})

export default Trace
