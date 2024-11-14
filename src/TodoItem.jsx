// TodoItem.jsx
export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)} // Calls toggleTodo with id and checked state
        />
        {title}
      </label>
      <button
        onClick={() => deleteTodo(id)} // Calls deleteTodo with id
        className="btn btn-danger"
      >
        Delete
      </button>
    </li>
  );
}
