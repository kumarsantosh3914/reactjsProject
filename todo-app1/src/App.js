import React from "react";
import TodoForm from './components/TodoForm';
import './App.css';
// import Todos from './components/Todos';
import { Container } from "reactstrap";

const App = () => {
  // const [todos, dispatch] = useReducer(todoReducer, []);
  // const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   const localTodos = localStorage.getItem("todos");
  //   console.log({ localStorage });
  //   if (localTodos) {
  //     setTodos(JSON.parse(localTodos));
  //   }
  // }, [])

  // const addTodos = async todo => {
  //   setTodos([...todos, todo]);
  // };

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);


  // const markComplete = id => {
  //   setTodos(todos.filter(todo => todo.id !== id));
  // };


  return (
    <Container>
      <h1>Todo App with React</h1>
      {/* <Todos todos={todos} markComplete={markComplete} /> */}
      <TodoForm />
    </Container>
  )
}

export default App;
