import { useState } from "react";
import "./index.css";
import Form from "./component/Form"
import Todolist from "./component/Todolist";
let Datas = [];
;
function App() {
  const [datas, setDatas] = useState([]);
  const [data, setData] = useState({});
  const [erorr, setErorr] = useState(false);
  const [title, setTitle] = useState("");
  const [isComplete, setIsComplete] = useState("not complete");
  const [edit, setEdit] = useState(false);

  const submitform = (e) => {
    e.preventDefault();
    const titleTrim = title.trim();
    if (titleTrim) {
      let todoData = {
        id: datas.length + 1,
        title: title,
        complete: isComplete,
      };
      if (edit) {
        todoData = {
          id: data.id,
          title: title,
          complete: isComplete,
        };
        Datas[data.id - 1] = todoData;
        setEdit(false);
      } else {
        Datas.push(todoData);
      }
      setDatas(Datas);
      setTitle("");
    } else {
      setErorr(true);
      setTimeout(() => {
        setErorr(false);
      }, 3000);
    }
  };

  const deleteHandeler = (info) => {
    Datas = datas.filter((oneData) => oneData.id !== info.id);
    setDatas(Datas);
  };

  const toggleComplete = (information) => {
    if (information.complete === "complete")
      Datas[information.id - 1].complete = "not complete";
    else Datas[information.id - 1].complete = "complete";
    setData(Datas[information.id - 1]);
    setDatas(Datas);
  };

  const editHandeler = (tododata) => {
    setEdit(true);
    setTitle(tododata.title);
    setIsComplete(tododata.complete);
    setData(tododata);
  };

  return (
    <div>
      <h2>ToDoList</h2>
      <Form
        submitform={submitform}
        erorr={erorr}
        title={title}
        setTitle={setTitle}
        isComplete={isComplete}
        setIsComplete={setIsComplete}
        edit={edit}
      />
      {datas.length < 1 && <p>todo list is empty</p>}
      <Todolist
        datas={datas}
        toggleComplete={toggleComplete}
        editHandeler={editHandeler}
        deleteHandeler={deleteHandeler}
      />
    </div>
  );
}
export default App;
