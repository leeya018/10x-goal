import { useEffect, useState } from "react"
import { useRef } from "react"
import { MODAL_NAMES, modalStore } from "mobx/modalStore"
import { observer } from "mobx-react-lite"
import useLocalStorage from "hooks/useLocalStorage"

import CloseButton from "ui/button/close"

import Title from "components/Title"
import { toJS } from "mobx"

const GoalModal = observer(({ goalName, remove, update }) => {
  const { modalName, closeModal } = modalStore

  const [name, setName] = useState("")
  console.log(name)
  useEffect(() => {
    setName(goalName)
  }, [goalName])

  const inputRef = useRef()

  const onRemove = () => {
    remove()

    modalStore.closeModal()
  }
  const onUpdate = async () => {
    update(name)

    modalStore.closeModal()
  }

  return (
    <>
      <div
        className={`absolute h-screen top-0 left-0
     right-0 bottom-0 bg-slate-400 
     flex justify-center items-center z-10 bg-white bg-opacity-50 ${
       modalName === MODAL_NAMES.GOAL_UPDATE ? "visible" : "invisible"
     }`}
      >
        <div
          className="relative border-2 border-black
         flex flex-col p-4 justify-between text-black 
           h-80 px-4 py-2 rounded-md bg-blue"
        >
          {/* <div> */}
          <Title className="mb-4">Edit Goal</Title>
          <CloseButton onClick={() => closeModal()} />
          <div className="flex flex-col items-center bg-blue">
            <input
              ref={inputRef}
              placeholder="update name"
              className=""
              value={name}
              onChange={(e) => setName(e.target.value)}
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

export default GoalModal
