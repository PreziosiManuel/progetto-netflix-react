import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NetflixNavbar from "./components/NetflixNavbar";
import NetflixFooter from "./components/NetflixFooter";
import NetflixHero from "./components/NetflixHero";
import NetflixHeroHeader from "./components/NetflixHeroHeader";

function App() {
  return (
    <div className="App">
      <NetflixNavbar />
      <NetflixHeroHeader />
      <NetflixHero title={"Harry Potter"} />
      <NetflixHero title={"Ice Age"} />
      <NetflixHero title={"The Walking Dead"} />
      <NetflixHero title={"Lord Of Rings"} />
      <NetflixFooter />
    </div>
  );
}

export default App;
