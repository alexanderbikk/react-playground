import styles from "./search.module.css";
import { useEffect, useState } from "react";

const BASE_URL =
  "https://api.spoonacular.com/recipes/complexSearch?qyery=pasta";
const API_KEY = "164ff6b0493f4395b4f513585b86a56f";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(
        `${BASE_URL}?query=${query}&apiKey=${API_KEY}`
      );
      const data = await response.json();
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.search_container}>
      <input
        type="text"
        className={styles.search_input}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
