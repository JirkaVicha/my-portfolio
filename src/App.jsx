import { Box } from "@chakra-ui/react"
import bg from '../src/assets/asfalt-light.png'
import About from "./components/About"
import Experience from "./components/Experience"
import PageLayout from "./components/PageLayout"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

const App = () => {
  return (
      <Box backgroundImage={bg}>
        <PageLayout />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </Box>
  )
}

export default App