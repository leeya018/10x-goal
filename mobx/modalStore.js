import { makeAutoObservable } from "mobx"
export const MODAL_NAMES = {
  GOAL_UPDATE: "GOAL_UPDATE",
  MISSION_UPDATE: "MISSION_UPDATE",
}
class Modal {
  modalName = ""

  constructor() {
    makeAutoObservable(this)
    this.closeModal = this.closeModal.bind(this)
    this.openModal = this.openModal.bind(this)
  }

  closeModal = () => {
    this.modalName = ""
  }
  openModal = (name) => {
    this.modalName = name
  }
}

export const modalStore = new Modal()
