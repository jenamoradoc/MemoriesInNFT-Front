import Nav from "./Components/Nav";
import Menu from "./Components/Menu";
import useMediaQuery from "../../hooks/UseMediaQuery";
import {motion} from "framer-motion"

function Navbar() {
  let smallScreens = useMediaQuery("(min-width: 700px)")
  return (
    <motion.nav 
      initial={{ y: -300 }}
      animate={{ y: 0 }}
      transition={{ duration: 1.5 }}
      className="">
      {smallScreens ? <Nav/> : <Menu/>}
    </motion.nav>
  )
}

export default Navbar
