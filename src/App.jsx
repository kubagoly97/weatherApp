import "./App.css";
import FinalComponent from "./FinalComponent";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./Error";
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

function Navbar({ title = "Navbar" }) {
  return (
    <nav className="Navbar">
      <p>{title}</p>
    </nav>
  );
}
