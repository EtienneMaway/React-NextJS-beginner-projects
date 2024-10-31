import { useState } from "react";
import "./style.css";
import { FaSearch } from "react-icons/fa";

function App() {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  const handleClick = (e) => {
    setBgColor("#1a1a1a");

    console.log(e.target.className);

    if (e.target.className === "container") {
      setShowInput(false);
      setBgColor("white");
    }
  };

  return (
    <section
      className="container"
      style={{ backgroundColor: bgColor }}
      onClick={(e) => handleClick(e)}
    >
      {showInput ? (
        <input type="text" placeholder="Search..." />
      ) : (
        <FaSearch
          style={{ cursor: "pointer" }}
          onClick={() => setShowInput(true)}
        />
      )}
    </section>
  );
}

export default App;
