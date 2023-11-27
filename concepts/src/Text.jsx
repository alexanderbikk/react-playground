import Axios from "axios";
import { useState, useEffect } from "react";

export default function Text() {
  const [catFact, setCatFact] = useState("");
  function fetchCatFact(){
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  }
  useEffect(() => {
    fetchCatFact();
  }, []);
  return <div>{catFact}</div>;
}
