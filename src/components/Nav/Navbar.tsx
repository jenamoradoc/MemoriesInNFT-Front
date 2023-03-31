import Nav from "./Components/Nav";
import Menu from "./Components/Menu";
import useMediaQuery from "../../hooks/UseMediaQuery";

function Navbar() {
  let smallScreens = useMediaQuery("(min-width: 700px)")
  return (
    <nav>
      {smallScreens ? <Nav/> : <Menu/>}
    </nav>
  )
}

export default Navbar
