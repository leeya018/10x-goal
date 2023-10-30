import { useEffect, useState } from "react"
import { useRef } from "react"
import { MODAL_NAMES, modalStore } from "mobx/modalStore"
import { observer } from "mobx-react-lite"
import useLocalStorage from "hooks/useLocalStorage"

import CloseButton from "ui/button/close"

import Title from "components/Title"
import { toJS } from "mobx"
import { appStore } from "mobx/appStore"

const MissionFeedbackModal = observer(() => {
  const { modalName, closeModal } = modalStore
  const {
    chosenMissionId,
    chosenGoalId,
    addFeedback,
    goals,
    setChooseMission,
  } = appStore

  const [currMission, setCurrMission] = useState({
    whyNotDone: "",
    howToImprove: "",
  })

  const inputRef = useRef()
  useEffect(() => {
    if (!chosenMissionId || !chosenGoalId) return
    const goal = goals.find((g) => g.id === chosenGoalId)
    const mission = goal.missions.find((m) => m.id === chosenMissionId)
    console.log(chosenMissionId, chosenGoalId)
    console.log(mission)
    setCurrMission({ name: mission.name, targetAmount: mission.targetAmount })
  }, [chosenMissionId, chosenGoalId])

  const onUpdate = () => {
    addFeedback(
      chosenGoalId,
      chosenMissionId,
      currMission.whyNotDone,
      currMission.howToImprove
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
       modalName === MODAL_NAMES.FEEDBACK_MISSION_UPDATE
         ? "visible"
         : "invisible"
     }`}
      >
        <div
          className="relative border-2 border-black
         flex flex-col p-4 justify-between text-black 
           h-80 px-4 py-2 rounded-md bg-blue"
        >
          {/* <div> */}
          <Title className="mb-4">Edit Feedback Mission</Title>
          <CloseButton onClick={() => closeModal()} />
          <div className="flex flex-col items-center bg-blue gap-2">
            <input
              ref={inputRef}
              type="text"
              name="whyNotDone"
              placeholder="update whyNotDone"
              className="border-2"
              value={currMission.whyNotDone}
              onChange={(e) => updateCurrMission(e.target)}
            />
            <input
              type="text"
              ref={inputRef}
              name="howToImprove"
              placeholder="update howToImprove"
              className="border-2"
              value={currMission.howToImprove}
              onChange={(e) => updateCurrMission(e.target)}
            />
          </div>

          <div className="flex justify-center gap-2 ">
            <button
              className="from-gray_modal_but2 to-blue_modal_but1 border-2 rounded-md  "
              onClick={onUpdate}
            >
              Add Feedback
            </button>

            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  )
})

export default MissionFeedbackModal
