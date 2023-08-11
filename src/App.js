import Floater from "./components/Floater";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

function App() {
  return (
    <div class="cont overflow-y-hidden">
      <Floater />
      <Nav />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
