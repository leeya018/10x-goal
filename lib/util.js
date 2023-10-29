export const colors = [
  "#FF5733",
  "#33FF57",
  "#5733FF",
  "#FF33A6",
  "#33A6FF",
  "#A633FF",
  "#FFA633",
  "#A6FF33",
  "#33FFA6",
  "#FF573A",
  "#FFA6A6",
  "#A6FFA6",
  "#A6A6FF",
  "#FFA6FF",
  "#FFFFA6",
  "#A6FFFF",
  "#FFA6A6",
  "#A6FFA6",
  "#A6A6FF",
  "#FFA6FF",
]
export const getRandomNumber = (n) => {
  return Math.floor(Math.random() * n)
}
export const getDiffInDays = (d1, d2) => {
  return (new Date(d1) - new Date(d2)) / (1000 * 60 * 60 * 24)
}
