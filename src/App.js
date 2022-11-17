import List from "./components/Sidebar/List";
import { Routes, Route } from "react-router-dom";
import HomePage from './components/Routers/HomePage'

function App() {
  return (
    <div style={{display:'flex'}}>
      <List />
      <Routes>
        <Route className='home' path="/" element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;
