import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { appStore } from "mobx/appStore"
import { useRouter } from "next/router"
import { toJS } from "mobx"
import GoBack from "components/GoBack"
import Title from "components/Title"
import { getDiffInDays } from "lib/util"

const index = observer(() => {
  const [inputValue, setInputValue] = useState("")
  const [inputTValue, setInputTValue] = useState("")
  const [lastMission, setLastMission] = useState(null)
  const [goal, setGoal] = useState(null)
  // const [render, setRender] = useState(false)
  const router = useRouter()

  const { id } = router.query
  console.log("id page => " + id)

  const { goals, addMission, setChooseMission } = appStore

  useEffect(() => {
    if (!id) return
    console.log(goals)
    console.log("id query => " + id)

    console.log(toJS(goals))
    // const goal = goals[0]
    const goal = goals.find((g) => g.id == id)
    setGoal(goal)

    console.log("toJS(goal)")
    console.log(goal)
    // console.log(toJS(goal))
    const last = [...goal.missions]
      .sort((m1, m2) => new Date(m2.date) - new Date(m1.date))
      .pop()
    setLastMission(last)
  }, [id, goals])

  const addTask = () => {
    if (!inputTValue) return
    if (inputValue.trim()) {
      addMission(id, inputValue.trim(), inputTValue, new Date())
      setInputValue("")
      setInputTValue("")
    }
  }
  const canAddGoal = () => {
    if (!goal) return false
    return (
      [...goal.missions].filter(
        (mission) => getDiffInDays(new Date(), mission?.date) < 1
      ).length > 2
    )
  }

  return (
    <div className="p-5 flex items-center bg-r max-w-xs mx-auto">
      <GoBack />
      <div>
        <Title className="pt-5">Missions</Title>

        <div className="mb-5 ">
          <input
            disabled={canAddGoal()}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="p-2 w-full border rounded"
            placeholder="Enter mission..."
          />
          <input
            disabled={canAddGoal()}
            type="number"
            value={inputTValue}
            onChange={(e) => setInputTValue(e.target.value)}
            className="p-2 border rounded w-full"
            placeholder="Enter amount..."
          />
          <button
            onClick={addTask}
            className="p-2 border-2 w-full bg-blue-500 text-black rounded"
          >
            Add
          </button>
        </div>
        <ul className="h-[24rem] flex flex-col overflow-y-scroll  ">
          {goal &&
            goal.missions &&
            [...goal.missions]
              .sort((m1, m2) => new Date(m2.date) - new Date(m1.date))
              .map((mission, index) => (
                <Mission
                  key={index}
                  goal={goal}
                  setChooseMission={setChooseMission}
                  mission={mission}
                />
              ))}
        </ul>
      </div>
    </div>
  )
})

const Mission = observer(({ mission, setChooseMission, goal }) => {
  const { goals, addGoal, removeMission } = appStore

  const router = useRouter()
  const remove = (e) => {
    e.stopPropagation()
    removeMission(goal.id, mission.id)
  }
  return (
    <li
      key={index}
      onClick={() => {
        if (getDiffInDays(new Date(), mission.date) > 1) {
          return
        }
        setChooseMission(goal.id, mission.id)
        router.push(`/trace`)
      }}
      className="relative mb-2 bg-gray-200 rounded border-2 "
    >
      <div
        className="absolute left-0 bg-green bg-opacity-40 h-full"
        style={{
          width: `${(mission.amount / parseInt(mission.targetAmount)) * 100}%`,
        }}
      ></div>
      <div
        className={`${
          getDiffInDays(new Date(), mission.date) > 1 &&
          "bg-opacity-30 bg-gray_dark"
        } flex justify-between items-center px-2 h-14`}
      >
        <div>{mission.name}</div>
        <div>
          {((mission.amount / parseInt(mission.targetAmount)) * 100).toFixed(0)}
          %
        </div>
      </div>
      <button onClick={(e) => remove(e)}>remove </button>
    </li>
  )
})

export default index
