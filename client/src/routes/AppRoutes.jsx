import { Routes, Route } from "react-router-dom";
import NewRecipe from "../components/NewRecipe";
import Cards from "../components/Cards";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Cards/>} />
      <Route path="/newRecipe" element={<NewRecipe />} />
    </Routes>
  );
};

export default AppRoutes;
