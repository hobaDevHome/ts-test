import Todo from '../models/todo';
import TodoITem from './TodoItem';

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <div>
      <ul>
        {props.items.map((item) => (
          <li key={item.id}>
            <TodoITem itemText={item.text} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
