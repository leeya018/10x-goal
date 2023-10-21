import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { goalsStore } from "mobx/goalsStore"
import { useRouter } from "next/router"
import { colors, getRandomNumber } from "lib/util"
import NoSsr from "@material-ui/core/NoSsr"

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
      <div className="flex justify-center  mb-2">Goals</div>
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
        {goals &&
          goals.length > 0 &&
          goals.map((goal, index) => <Goal key={index} goal={goal} />)}
      </ul>
    </div>
  )
})

const Goal = observer(({ goal }) => {
  const c1 = colors[getRandomNumber(20)]
  const c2 = colors[getRandomNumber(20)]
  const gradientClass = `mb-2 bg-gray-200 p-2 rounded border-2 rounder-md bg-gradient-to-br from-[${c1}] to-[${c2}]`

  console.log(gradientClass)
  const router = useRouter()

  return (
    <NoSsr>
      <li
        key={index}
        onClick={() => router.push(`/goals/${goal.id}`)}
        style={{
          backgroundImage: `linear-gradient(to bottom right, ${c1}, ${c2})`,
        }}
        className="mb-2 bg-gray-200 p-2 rounded border-2 rounder-md"
      >
        <div>{goal?.name}</div>
      </li>
    </NoSsr>
  )
})

export default index
