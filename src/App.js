
import './App.css';
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Match from "./pages/match/Match";
import Dashboard from "./pages/project/Dashboard";


function App() {
  return (
    <div className="App">
   
   <BrowserRouter>

<Navbar />

<Routes>

 <Route path="/" element={<Home />} />
 <Route path="/about" element={<About/>}/> 
 <Route path="/match" element={<Match />} />
 <Route path="/dashboard/*" element={<Dashboard />} />
</Routes>
</BrowserRouter>
    

    </div>
  );
}

export default App;
