import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          className="checkbox"
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
        <div className="todo-item"> {title} </div>
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        <DeleteOutlinedIcon />
      </button>
    </li>
  )
}