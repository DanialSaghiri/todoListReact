import imgEdit from "../bx-edit.svg";


function Todo({data,dispatch}) {
  return (
    <>
      <li key={data.id} className="todolist">
        <h2>{data.title}</h2>
        <span onClick={(e) => dispatch({ type: "toggle", payload: data })}>
          {data.isComplete}
        </span>
        <img
          src={imgEdit}
          alt=""
          onClick={() => dispatch({ type: "edit", payload: data })}
        />
        <button onClick={() => dispatch({ type: "delete", payload: data })}>
          DELETE
        </button>
      </li>
    </>
  );
}
export default Todo;
