import Navbar from "./Components/Navbar";
import { Routes} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <div className="text-center mt-20">
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
