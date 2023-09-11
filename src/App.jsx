import "./App.css";
import FinalComponent from "./FinalComponent";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./Error";
<<<<<<< HEAD
import { Navbar } from "./Navbar";
=======
>>>>>>> 790ffe83ae9dc3e00f276acdfafda6ad9d5cbffc
function App() {
  return (
    <>
      <Navbar title="🌤️ Kuba Weather App" />
      <ErrorBoundary
        fallback={
          <div>
            <FinalComponent />
            <Error />
          </div>
        }
      >
        <FinalComponent />
      </ErrorBoundary>
    </>
  );
}

export default App;
<<<<<<< HEAD
=======

function Navbar({ title = "Navbar" }) {
  return (
    <nav className="Navbar">
      <p>{title}</p>
    </nav>
  );
}
>>>>>>> 790ffe83ae9dc3e00f276acdfafda6ad9d5cbffc
