import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import TabPage from "./pages/TabPage"
import Home from "./pages/Home"
import Layout from "./components/others/Layout"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="tabs" element={<TabPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
