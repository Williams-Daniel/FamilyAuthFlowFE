import { RouterProvider } from "react-router-dom"
import MainRouter from "./Router/MainRouter"
import {Provider} from "react-redux"
import { store } from "./global/store"
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"


let persistor = persistStore(store)

const App = () => {
  return (
    <div>
      <Provider store={store}>
      <PersistGate persistor={persistor}>
      <RouterProvider router={MainRouter}/>
      </PersistGate>
      </Provider>
    </div>
  )
}

export default App