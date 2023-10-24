import React, { useEffect, useState } from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"
import { Pie } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)

export function Chart({ total, done }) {
  const [left, setLeft] = useState(total - done)

  useEffect(() => {
    if (done > total) {
      setLeft(0)
    } else {
      setLeft(total - done)
    }
  }, [done])

  const data = {
    labels: ["Left", "Done"],
    datasets: [
      {
        label: "# of Votes",
        data: [left, done],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(75, 192, 192, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(75, 192, 192, 1)"],
        borderWidth: 1,
      },
    ],
  }
  return <Pie data={data} />
}
