import Todo from '../models/todo';
import TodoITem from './TodoItem';

const Todos: React.FC<{ items: Todo[], onClick: (input: string)=> void }> = (props) => {

//  const clickHandler = (text: string) =>{  

//     props.onClick(text)
//   }


  return (
    <div>
      <ul>
        {props.items.map((item) => (
          <li key={item.id} onClick={() => props.onClick(item.id)}>
            <TodoITem itemText={item.text} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
