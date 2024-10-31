import { useState } from "react";
import "./style.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "This is the best product I've ever used",
      author: "Jhon Doe",
    },
    {
      quote: "I highly recomend this product to everyone!",
      author: "Jhon Smith",
    },
    {
      quote: "This is the best product I've ever used",
      author: "Thomas Miller",
    },
    {
      quote: "This product has completely changed my life",
      author: "Rocks Brook",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex - 1 + testimonials.length) % testimonials.length,
    );
  };
  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>
      <div className="testimonials-author">
        {testimonials[currentIndex].author}
      </div>

      <div className="testimonials-nav ">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}

export default App;
