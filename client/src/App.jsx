import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <div className="w-screen h-screen bg-black overflow-y-scroll overflow-x-hidden">
      <Navbar />
      <AppRoutes/>
    </div>
  );
};

export default App;
