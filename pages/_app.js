import { autorun } from "mobx"
import "../styles/globals.css"
import { appStore } from "mobx/appStore"

export default function App({ Component, pageProps }) {
  autorun(() => {
    appStore.saveState()
  })
  return <Component {...pageProps} />
}
