import React, { useState } from "react"
import { observer } from "mobx-react-lite"
import { goalsStore } from "mobx/goalsStore"
import { useRouter } from "next/dist/client/router"

const index = observer(() => {
  const [inputValue, setInputValue] = useState("")
  const router = useRouter()

  const { goals, addGoal } = goalsStore

  const addTask = () => {
    if (inputValue.trim()) {
      addGoal(inputValue.trim())
      setInputValue("")
    }
  }

  return (
    <div className="p-5 bg-r max-w-xs mx-auto">
      <div className="flex justify-center text-xl mb-2">Goals</div>
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
        {goals.map((goal, index) => (
          <li
            key={index}
            onClick={() => router.push(`/goals/${goal.id}`)}
            className="mb-2 bg-gray-200 p-2 rounded"
          >
            {goal.name}
          </li>
        ))}
      </ul>
    </div>
  )
})

export default index
