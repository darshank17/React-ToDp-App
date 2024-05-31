import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import ToDoItem from "./components/ToDoItem";
import ToDoItem2 from "./components/ToDoItem2";
import "./App.css";
function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />
      <div className="Item-container">
        <ToDoItem />
        <ToDoItem2 />
      </div>
    </center>
  );
}

export default App;
