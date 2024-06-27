import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import CitiesList from "./components/CitiesList";
import { useEffect, useState } from "react";

function App() {
  const BASE_URL = "http://localhost:8000";

  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}/cities`);
        const data = await response.json();
        setCities(data);
      } catch {
        alert("There Was an error loading data");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="product" element={<Product />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route
            index
            element={<CitiesList cities={cities} isLoading={isLoading} />}
          />
          <Route
            path="cities"
            element={<CitiesList cities={cities} isLoading={isLoading} />}
          />
          <Route path="countries" element={<p>List Of Countries</p>} />
          <Route path="map" element={<p>Map</p>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
