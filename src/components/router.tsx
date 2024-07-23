import { useState } from "react"
import Home from "../screens/home"

export default function Router() {
  const routes = {
    "home": <Home />
  }
  const [route, setRoute] = useState<JSX.Element>(<Home />);
  return (
    <div>
      {route}
    </div>
  )
}