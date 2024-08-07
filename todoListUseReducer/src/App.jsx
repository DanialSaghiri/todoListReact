import { useReducer } from "react";
import Form from "./component/Form";
import Todolist from "./component/Todolist";

import initState from "./InitState";
import reducer from  "./State";
import "./index.css";




function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  

  return (
    <div>
      <Form state={state} dispatch={dispatch} />
      <Todolist state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
