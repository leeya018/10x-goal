import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import { goalsStore } from "mobx/goalsStore"
import Router from "next/router"

const index = observer(() => {
  const [inputValue, setInputValue] = useState("")
  const goalId = Router.query.id
  console.log("id page => " + goalId)

  const goal = goals.find((g) => g.id === goalId)
  const missions = goal.missions
  console.log(missions, goal)

  const { goals, addMission } = goalsStore
  const addTask = () => {
    if (inputValue.trim()) {
      addMission(goalId, inputValue.trim())
      setInputValue("")
    }
  }

  return (
    <div className="p-5 bg-r max-w-xs mx-auto">
      <div>goal:{goal.name}</div>
      <div className="flex justify-center text-xl mb-2">Missions</div>
      <div className="mb-5 ">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="p-2 w-4/5 border rounded"
          placeholder="Enter task..."
        />
        <button
          onClick={addTask}
          className="p-2 ml-2 bg-blue-500 text-black rounded"
        >
          Add
        </button>
      </div>
      <ul className="list-decimal pl-5">
        {missions.map((task, index) => (
          <li key={index} className="mb-2 bg-gray-200 p-2 rounded">
            {task}
          </li>
        ))}
      </ul>
    </div>
  )
})

export default index
