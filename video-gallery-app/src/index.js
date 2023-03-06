import React from "react"
import App from "./App"
import "./assets/css/style.css"
import { store } from "./app/store"
import { Provider } from "react-redux"
import { createRoot } from "react-dom/client"

const container = document.getElementById("root")
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
