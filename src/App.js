import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NetflixNavbar from "./components/NetflixNavbar";
import NetflixFooter from "./components/NetflixFooter";
import NetflixHero from "./components/NetflixHero";
import NetflixHeroHeader from "./components/NetflixHeroHeader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TvShow from "./components/TVShows";
import MovieDetails from "./components/MovieDetails";
import SingleMovie from "./components/SingleMovie";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NetflixNavbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NetflixHeroHeader />
                <NetflixHero title={"Harry Potter"} />
                <NetflixHero title={"Ice Age"} />
                <NetflixHero title={"The Walking Dead"} />
                <NetflixHero title={"Lord Of Rings"} />
              </>
            }
          />
          <Route
            path="/1"
            element={
              <>
                <TvShow />
              </>
            }
          />
          <Route
            path="/2"
            element={
              <>
                <div className="d-flex justify-content-center ">
                  <MovieDetails />
                </div>
                <NetflixHero title={"Harry Potter"} />
              </>
            }
          />
        </Routes>
        <NetflixFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
