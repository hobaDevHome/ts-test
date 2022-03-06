import Todos from './components/Todos';
import Todo from './models/todo';

import './App.css';

function App() {
  const todos = [new Todo('teach react'), new Todo('teach typescript')];
  return (
    <div className="App">
      <Todos items={todos} />
    </div>
  );
}

export default App;
