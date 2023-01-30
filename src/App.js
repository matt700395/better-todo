import TodoTemplate from "./components/TodoTemplate";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

function App() {
  return (
    <TodoTemplate>
      <TodoHeader />
      <TodoList></TodoList>
    </TodoTemplate>
  );
}

export default App;
