import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";

import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CitiesList from "./components/CitiesList";
import CountriesList from "./components/CountriesList";
import City from "./components/City";
import Form from "./components/Form";

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
            // element={<CitiesList cities={cities} isLoading={isLoading} />}
            element={<Navigate replace to={"cities"} />}
          />
          <Route path="cities/:id" element={<City />} />
          <Route
            path="cities"
            element={<CitiesList cities={cities} isLoading={isLoading} />}
          />
          <Route
            path="countries"
            element={<CountriesList cities={cities} isLoading={isLoading} />}
          />
          <Route path="form" element={<Form />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
