import { useEffect, useState } from "react"
import { useRef } from "react"
import { MODAL_NAMES, modalStore } from "mobx/modalStore"
import { observer } from "mobx-react-lite"
import useLocalStorage from "hooks/useLocalStorage"

import CloseButton from "ui/button/close"

import Title from "components/Title"
import { toJS } from "mobx"
import { appStore } from "mobx/appStore"

const MissionModal = observer(({ remove, update }) => {
  const { modalName, closeModal } = modalStore
  const { chosenMissionId, chosenGoalId, goals, setChooseMission } = appStore

  const [currMission, setCurrMission] = useState({ name: "", targetAmount: "" })

  const inputRef = useRef()
  useEffect(() => {
    if (!chosenMissionId || !chosenGoalId) return
    const goal = goals.find((g) => g.id === chosenGoalId)
    const mission = goal.missions.find((m) => m.id === chosenMissionId)
    console.log(chosenMissionId, chosenGoalId)
    console.log(mission)
    setCurrMission({ name: mission.name, targetAmount: mission.targetAmount })
  }, [chosenMissionId, chosenGoalId])

  const onRemove = () => {
    remove(chosenGoalId, chosenMissionId)

    modalStore.closeModal()
  }
  const onUpdate = () => {
    update(
      chosenGoalId,
      chosenMissionId,
      currMission.name,
      currMission.targetAmount
    )

    modalStore.closeModal()
  }
  const updateCurrMission = ({ name, value }) => {
    console.log(name, value)
    setCurrMission((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <>
      <div
        className={`absolute h-screen top-0 left-0
     right-0 bottom-0 bg-slate-400 
     flex justify-center items-center z-10 bg-white bg-opacity-50 ${
       modalName === MODAL_NAMES.MISSION_UPDATE ? "visible" : "invisible"
     }`}
      >
        <div
          className="relative border-2 border-black
         flex flex-col p-4 justify-between text-black 
           h-80 px-4 py-2 rounded-md bg-blue"
        >
          {/* <div> */}
          <Title className="mb-4">Edit Mission</Title>
          <CloseButton onClick={() => closeModal()} />
          <div className="flex flex-col items-center bg-blue gap-2">
            <input
              ref={inputRef}
              type="text"
              name="name"
              placeholder="update name"
              className="border-2"
              value={currMission.name}
              onChange={(e) => updateCurrMission(e.target)}
            />
            <input
              type="number"
              ref={inputRef}
              name="targetAmount"
              placeholder="update targetAmount"
              className="border-2"
              value={currMission.targetAmount}
              onChange={(e) => updateCurrMission(e.target)}
            />
          </div>

          <div className="flex justify-center gap-2 ">
            <button
              className="from-gray_modal_but2 to-blue_modal_but1 border-2 rounded-md  "
              onClick={onUpdate}
            >
              Update
            </button>
            <button
              className="from-pink_login_but1 to-pink_login_but2  border-2 rounded-md"
              onClick={onRemove}
            >
              Remove
            </button>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  )
})

export default MissionModal
