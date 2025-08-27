import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from './screens/LoginScreen';
import TaskScreen from './screens/TaskScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistrationScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/tasks" element={<TaskScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
