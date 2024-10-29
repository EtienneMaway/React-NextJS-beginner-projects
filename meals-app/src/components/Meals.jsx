import axios from "axios";
import { useEffect, useState } from "react";
import "../styles.css";

const Meals = () => {
  const [items, setItems] = useState([]);

  const itemList = items.map(({ idMeal, strMeal, strMealThumb }) => (
    <section className="card" key={idMeal}>
      <img src={strMealThumb} alt={strMeal} />
      <section className="content">
        <p>{strMeal}</p>
        <p>#{idMeal}</p>
      </section>
    </section>
  ));

  useEffect(() => {
    axios

      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood")
      .then((res) => {
        setItems(res.data.meals);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return <div className="items-container">{itemList}</div>;
};

export default Meals;
