import Todo from "./Todo";


function Todolist({state,dispatch}) {
  return (
    <>
      <ul>
        {state.datas.map((data) => {
          return (
           <Todo key={data.id} data={data} dispatch={dispatch}/>
          );
        })}
      </ul>
    </>
  );
}
export default Todolist;
