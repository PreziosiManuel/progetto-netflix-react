import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NetflixNavbar from "./components/NetflixNavbar";
import NetflixFooter from "./components/NetflixFooter";
import NetflixHero from "./components/NetflixHero";

function App() {
  return (
    <div className="App">
      <NetflixNavbar />
      <NetflixHero />
      <NetflixFooter />
    </div>
  );
}

export default App;
