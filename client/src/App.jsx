import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Cards from "./components/Cards";

const App = () => {
  return (
    <div className="w-screen h-screen bg-black overflow-y-scroll overflow-x-hidden">
      <Navbar />
      <Cards/>
    </div>
  );
};

export default App;
