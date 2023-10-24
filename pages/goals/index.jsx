import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { goalsStore } from "mobx/goalsStore"
import { useRouter } from "next/router"
import { colors, getRandomNumber } from "lib/util"
import NoSsr from "@material-ui/core/NoSsr"
import Title from "components/Title"
import ColorPicker from "components/ColorPicker"

const index = observer(() => {
  const [inputValue, setInputValue] = useState("")
  const [color, setColor] = useState("")
  const [isPalateOpen, setIsPalateOpen] = useState(false)
  const router = useRouter()

  const { goals, addGoal } = goalsStore
  console.log(color)
  const addTask = () => {
    if (!color) return
    if (inputValue.trim()) {
      addGoal(inputValue.trim(), color)
      setInputValue("")
      setColor("")
    }
  }

  return (
    <div className="p-5 bg-r max-w-xs mx-auto">
      <Title>Goals</Title>

      <div className="mb-5 ">
        <h1>Choose a Color</h1>
        {isPalateOpen && (
          <ColorPicker
            color={color}
            setColor={setColor}
            closePalate={() => setIsPalateOpen(false)}
          />
        )}
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="p-2 w-full border rounded"
          placeholder="Enter Goal..."
        />
        <button
          onClick={() => setIsPalateOpen(true)}
          className={` p-2 border-2 w-full bg-blue-500 text-black rounded`}
          style={{ backgroundColor: color }}
        >
          Choose Color
        </button>
        <button
          onClick={addTask}
          className="p-2 border-2 w-full bg-blue-500 text-black rounded"
        >
          Add
        </button>
      </div>
      <ul className="h-[30rem] flex flex-col overflow-y-scroll  ">
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
          // backgroundImage: `linear-gradient(to bottom right, ${c1}, ${c2})`,
          background: goal.color,
        }}
        className="mb-2 bg-gray-200 p-2 rounded border-2 rounder-md"
      >
        <div>{goal?.name}</div>
      </li>
    </NoSsr>
  )
})

export default index
