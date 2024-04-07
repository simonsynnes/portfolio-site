import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
/**
 *
 * main component
 */
const App = () => (
  <div className="App">
    <Intro />
    <Portfolio />
    <Contact />
    <Footer />
  </div>
);

export default App;
