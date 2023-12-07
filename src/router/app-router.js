import { Route, Routes } from "react-router"
import { routes } from "./router"

function AppRouter() {
  return (
    <Routes>
      {routes.map((route, i) => {
        return <Route key={i} path={route.path} element={route.elem}/>
      })}
    </Routes>
  )
}

export default AppRouter