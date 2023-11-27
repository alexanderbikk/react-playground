import { useEffect, useState } from "react";

export default function FoodDetals({ foodId }) {
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information/`;
  const API_KEY = "164ff6b0493f4395b4f513585b86a56f";

  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await response.json();
      setFood(data);
      console.log();
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div>
        {food.title}
        <img src={food.image} alt="" />
      </div>
      <div>
        <h1>Instrunctions</h1>
        {isLoading ? <p>Loading ...</p> : <p>Test</p>}
        
      </div>
    </div>
  );
}
