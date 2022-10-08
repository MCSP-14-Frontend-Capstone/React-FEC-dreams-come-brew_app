import "./App.css";
import SharedLayout from "./components/SharedLayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route>
            <Route path="/" element={<SharedLayout />}/>
            <Route path="/" element={<SharedLayout />}/>
            <Route path="/" element={<SharedLayout />}/>
            <Route path="/" element={<SharedLayout />}/>
            <Route path="/" element={<SharedLayout />}/>
            <Route path="/" element={<SharedLayout />}/>
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
