import { accordionData } from "./utils/accordionData";
import Accordion from "./Accordion";

function App() {
  return (
    <div className="accordion">
      {accordionData.map(({ title, content }) => (
        <Accordion key={Math.random()} title={title} content={content} />
      ))}
    </div>
  );
}

export default App;
