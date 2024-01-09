import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import { SearchProvider } from "../SearchContext";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <SearchProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </SearchProvider>
    </>
  );
};

export default App;
