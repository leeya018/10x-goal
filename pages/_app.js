import { autorun } from "mobx"
import "../styles/globals.css"
import { goalsStore } from "mobx/goalsStore"

export default function App({ Component, pageProps }) {
  autorun(() => {
    goalsStore.saveState()
  })
  return <Component {...pageProps} />
}
