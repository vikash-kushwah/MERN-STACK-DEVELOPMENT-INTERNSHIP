import './App.css'  //we can directly import other files like css 
import Header from "./Components/Header/Header"  //but the jsx file are imported like this
import Section from "./Section"
import Footer from "./Components/Footer/Footer"

function App() {

  return (
    <>
      <h1>Welcome to my first <i>REACT</i> project</h1>
      <Header />
      <Section />
      <Footer />
    </>
  )
}

export default App;
