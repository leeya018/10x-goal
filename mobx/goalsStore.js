import uuid4 from "uuid4"
import { makeAutoObservable } from "mobx"

class Goals {
  goals = []
  chosenGoalId = null
  chosenMissionId = null

  constructor() {
    makeAutoObservable(this)
    this.loadState()

    this.addGoal = this.addGoal.bind(this)
    this.addMission = this.addMission.bind(this)
    this.setChooseMission = this.setChooseMission.bind(this)
    this.increaseMissionAmount = this.increaseMissionAmount.bind(this)
    this.decreaseMissionAmount = this.decreaseMissionAmount.bind(this)
  }
  setChooseMission(goalId, missionId) {
    this.chosenMissionId = missionId
    this.chosenGoalId = goalId
  }

  addGoal(name, color) {
    var id = uuid4()

    this.goals.push({
      id,
      name,
      missions: [],
      color,
    })
  }
  decreaseMissionAmount(goalId, missionId) {
    this.goals.map((g) => {
      if (g.id === goalId) {
        g.missions.map((m) => {
          if (m.id === missionId && m.amount > 0) {
            m.amount -= 1
          }
          return m
        })
      }
    })
  }
  increaseMissionAmount(goalId, missionId) {
    this.goals.map((g) => {
      if (g.id === goalId) {
        g.missions.map((m) => {
          if (m.id === missionId) {
            m.amount += 1
          }
          return m
        })
      }
    })
  }
  addMission(goalId, missionName, targetAmount, date) {
    this.goals.map((g) => {
      if (g.id === goalId) {
        var missionId = uuid4()
        g.missions.push({
          id: missionId,
          name: missionName,
          targetAmount,
          amount: 0,
          date,
        })
      }
    })
  }

  loadState() {
    if (typeof window !== "undefined" && window.localStorage) {
      const goalsStr = window.localStorage.getItem("goals")
      const chosenGoalId = window.localStorage.getItem("chosenGoalId")
      const chosenMissionId = window.localStorage.getItem("chosenMissionId")
      if (goalsStr !== null && goalsStr !== undefined) {
        this.goals = JSON.parse(goalsStr)
        this.chosenGoalId = JSON.parse(chosenGoalId)
        this.chosenMissionId = JSON.parse(chosenMissionId)

        console.log("loadState => " + this.goals)
        console.log("loadState => " + this.chosenGoalId)
        console.log("loadState => " + this.chosenMissionId)
      }
    }
  }

  saveState() {
    console.log("saveState")
    if (typeof window !== "undefined" && window.localStorage) {
      console.log("saveState => " + this.goals)
      window.localStorage.setItem("goals", JSON.stringify(this.goals))
      window.localStorage.setItem(
        "chosenGoalId",
        JSON.stringify(this.chosenGoalId)
      )
      window.localStorage.setItem(
        "chosenMissionId",
        JSON.stringify(this.chosenMissionId)
      )
    }
  }
}
export const goalsStore = new Goals()
