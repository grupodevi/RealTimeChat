import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Noresult from "./components/noresult";
import Messenger from "./components/Messenger";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register/>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<Noresult />} />
          <Route path="messenger" element={<Messenger />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
