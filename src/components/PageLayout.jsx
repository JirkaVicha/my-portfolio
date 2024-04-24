import { Outlet } from "react-router-dom"
import Navigation from "./Navigation"
import Header from "./Header"

const PageLayout = () => {
  return <>
    <Navigation />
    <Header />
    <Outlet />
  </>
}

export default PageLayout