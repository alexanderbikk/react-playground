import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Navbar from "./pages/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const AppContext = createContext();

function App() {
  const [userName, setUserName] = useState("Oleks");
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  });

  return (
    <div className="App">
      <AppContext.Provider value={{ userName, setUserName }}>
        <QueryClientProvider client={client}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </AppContext.Provider>
    </div>
  );
}

export default App;
