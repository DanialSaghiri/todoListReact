import imgEdit from "../bx-edit.svg";
function Todo({ data,datas,toggleComplete,editHandeler,deleteHandeler }) {
  return (
    <>
      <li key={data.id} className="todolist">
        <h2>{data.title}</h2>
        <span onClick={() => toggleComplete(data)}>{data.complete}</span>
        <img onClick={() => editHandeler(data)} alt="" src={imgEdit} />
        <button onClick={() => deleteHandeler(data)}>DELETE</button>
      </li>
    </>
  );
}
export default Todo;
