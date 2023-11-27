import { useContext } from "react";
import { AppContext } from "../App";

import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export default function Home() {
  const {userName} = useContext(AppContext);
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["cat"],
    queryFn: async () => {
      console.log("test");
      return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    },
  });

  if(error){
    return <div> Error {error.message}</div>;
  }
  
  if(isLoading){
    return <div> Loading...</div>;
  }

  return <div>Home page {data?.fact}</div>;
}
