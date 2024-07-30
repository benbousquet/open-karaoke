import { useState } from "react"
import Home from "@/screens/home"
import Edit from "@/screens/edit";

export default function Router() {
  const routes = {
    "home": <Home />,
    "edit": <Edit />,
  }
  const [route, setRoute] = useState<JSX.Element>(<Home />);
  return (
    <div>
      {route}
    </div>
  )
}