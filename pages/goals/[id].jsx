import React, { useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { goalsStore } from "mobx/goalsStore"
import { useRouter } from "next/router"
import { toJS } from "mobx"
import GoBack from "components/GoBack"
import Title from "components/Title"

const index = observer(() => {
  const [inputValue, setInputValue] = useState("")
  const [inputTValue, setInputTValue] = useState("")
  const [lastMission, setLastMission] = useState(null)
  const router = useRouter()
  console.log("id page => " + router.query.id)
  const goalId = router.query.id
  console.log("id page => " + goalId)

  const { goals, addMission, setChooseMission } = goalsStore
  const goal = goals.find((g) => g.id === goalId)
  console.log(toJS(goal))

  useEffect(() => {
    const last = [...goal.missions]
      .sort((m1, m2) => new Date(m2.date) - new Date(m1.date))
      .pop()
    setLastMission(last)
  }, [])

  const getDiffInDays = (d1, d2) => {
    return (new Date(d1) - new Date(d2)) / (1000 * 60 * 60 * 24)
  }

  const addTask = () => {
    if (getDiffInDays(new Date(), lastMission.date) >= 1) return
    if (!inputTValue) return
    if (inputValue.trim()) {
      addMission(goalId, inputValue.trim(), inputTValue, new Date())
      setInputValue("")
      setInputTValue("")
    }
  }

  return (
    <div className="p-5 flex items-center bg-r max-w-xs mx-auto">
      <GoBack />
      <div>
        <Title className="pt-5">Missions</Title>

        <div className="mb-5 ">
          <input
            disabled={getDiffInDays(new Date(), lastMission?.date) > 1}
            // disabled={true}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="p-2 w-full border rounded"
            placeholder="Enter mission..."
          />
          <input
            disabled={getDiffInDays(new Date(), lastMission?.date) > 1}
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
                      width: `${
                        (mission.amount / parseInt(mission.targetAmount)) * 100
                      }%`,
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
                      {(
                        (mission.amount / parseInt(mission.targetAmount)) *
                        100
                      ).toFixed(0)}
                      %
                    </div>
                  </div>
                </li>
              ))}
        </ul>
      </div>
    </div>
  )
})

export default index
