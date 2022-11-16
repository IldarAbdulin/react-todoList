import List from "./components/Sidebar/List";
import { Routes, Route } from "react-router-dom";
import HomePage from './components/Routers/HomePage'
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div style={{display:'flex'}}>
      <List />
      <Routes>
        <Route className='home' path="/" element={<HomePage/>}/>
        <Route path='todolist' element={<TodoList />}/>
      </Routes>
    </div>
  );
}

export default App;
