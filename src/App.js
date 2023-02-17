import React, {useState} from "react";
import HowCard from "./components/HowCard";
import TyCard from "./components/TyCard";
import "./styles/styles.scss";

const App = () => {
  const [calificacion, setCalificacion] = useState(0)

  return (
    <>
      <main>
        <div className="flex">
          {/* HOW DID WE DO? SECTION */}
          <HowCard calificacion={calificacion} setCalificacion={setCalificacion} />
          
          {/* THANK U STATE */}
          <TyCard calificacion={calificacion} />
        </div>
      </main>
      {/* FOOTER */}
      <footer>
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/rauljariasz">Raul Arias</a>.
        </div>
      </footer>
    </>
  );
};

export default App;
