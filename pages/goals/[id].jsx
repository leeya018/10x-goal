import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import { goalsStore } from "mobx/goalsStore"
import { useRouter } from "next/router"
import { toJS } from "mobx"

const index = observer(() => {
  const [inputValue, setInputValue] = useState("")
  const [inputTValue, setInputTValue] = useState("")
  const router = useRouter()
  console.log("id page => " + router.query.id)
  const goalId = router.query.id
  console.log("id page => " + goalId)

  const { goals, addMission, setChooseMission } = goalsStore
  const goal = goals.find((g) => g.id === goalId)
  console.log(toJS(goal))
  // console.log(goal.missions, goal)

  const addTask = () => {
    if (inputValue.trim()) {
      addMission(goalId, inputValue.trim(), inputTValue)
      setInputValue("")
      setInputTValue("")
    }
  }

  return (
    <div className="p-5 bg-r max-w-xs mx-auto">
      {/* <div>goal:{goal.name}</div> */}
      <div className="flex justify-center  mb-2">Missions</div>
      <div className="mb-5 ">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="p-2 w-4/5 border rounded"
          placeholder="Enter mission..."
        />
        <input
          type="number"
          value={inputTValue}
          onChange={(e) => setInputTValue(e.target.value)}
          className="p-2 w-4/5 border rounded"
          placeholder="Enter amount..."
        />
        <button
          onClick={addTask}
          className="p-2 ml-2 bg-blue-500 text-black rounded"
        >
          Add
        </button>
      </div>
      <ul className="list-decimal pl-5">
        {goal &&
          goal.missions &&
          goal.missions.map((mission, index) => (
            <li
              key={index}
              onClick={() => {
                setChooseMission(goal.id, mission.id)
                router.push(`/trace`)
              }}
              className="mb-2 bg-gray-200 p-2 rounded"
            >
              {mission.name}
            </li>
          ))}
      </ul>
    </div>
  )
})

export default index
