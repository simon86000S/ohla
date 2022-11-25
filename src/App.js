import { useRef } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";
import Article from "./components/Article/Article";

function App() {
  const cursorMove = useRef(null);
  const cursor = (e) => {
    const x = e.pageX ;
    const y = e.pageY;

    cursorMove.current.style.transform = `translate3d(calc(${x}px - 50%) ,calc(${y}px - 50%),0)`;
  };
  
  return (
    <div onMouseMove={cursor}   className="App">
      <div ref={cursorMove} className="cursor"></div>
      <Header />
      <Landing />
      <Article/>
    </div>
  );
}

export default App;
