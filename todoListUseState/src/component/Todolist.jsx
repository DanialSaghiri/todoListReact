
import Todo from "./Todo";

function Todolist({ datas,toggleComplete,editHandeler,deleteHandeler }) {
  
  return (
    <div>
      <ul>
        {datas.length > 0 &&
          datas?.map((data) => {
            return (
              <Todo key={data?.id} data={data} datas={datas} toggleComplete={toggleComplete} editHandeler={editHandeler} deleteHandeler={deleteHandeler}/>
            );
          })}
      </ul>
    </div>
  );
}
export default Todolist;
