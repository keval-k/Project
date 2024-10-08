import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import GameDetails from "./components/GameDetails";
import EditGame from "./components/EditGame"; // Import the EditGame component
import Home from "./pages/Home";
import GameForm from "./components/GameForm";
import Navbar from "./components/Navbar";
import GameDetailPage from "./components/GameDetailsPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<EditGame />} />
        <Route path="/details/:id" element={<GameDetailPage />} />
        <Route path="/add" element={<GameForm />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
