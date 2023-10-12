import uuid4 from "uuid4"
import { makeAutoObservable } from "mobx"

class Goals {
  goals = []

  constructor() {
    makeAutoObservable(this)
    this.loadState()

    this.addGoal = this.addGoal.bind(this)
    this.addMission = this.addMission.bind(this)
  }

  addGoal(name) {
    var id = uuid4()

    this.goals.push({
      id,
      name,
      missions: [],
    })
  }
  addMission(goalId, missionName) {
    this.goals.map((g) => {
      if (g.id === goalId) {
        var missionId = uuid4()
        g.missions.push({
          id: missionId,
          name: missionName,
        })
      }
    })
  }

  loadState() {
    if (typeof window !== "undefined" && window.localStorage) {
      const goalsStr = window.localStorage.getItem("goals")
      if (goalsStr !== null && goalsStr !== undefined) {
        this.goals = JSON.parse(goalsStr)

        console.log("loadState => " + this.goals)
      }
    }
  }

  saveState() {
    console.log("saveState")
    if (typeof window !== "undefined" && window.localStorage) {
      console.log("saveState => " + this.goals)
      window.localStorage.setItem("goals", JSON.stringify(this.goals))
    }
  }
}
export const goalsStore = new Goals()
