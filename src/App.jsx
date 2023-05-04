import { QueryClient } from "@tanstack/react-query";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { getTodos } from "./Queries";
const queryClient = new QueryClient();
console.log(queryClient);
function App() {
  const [count, setCount] = useState(0);
  console.log(queryClient.title);
  const query = getTodos("https://jsonplaceholder.typicode.com/posts");

  return <>{query?.isLoading && <h1> Loading........... </h1>}</>;
}

export default App;
