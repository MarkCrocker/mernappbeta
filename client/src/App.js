import "./App.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <h1>Talk To Me App</h1>
      <Footer />
    </div>
  );
}

export default App;
