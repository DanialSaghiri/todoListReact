


  let Datas = [];
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "title":
        return { ...state, title: action.payload };
      case "submit":
        action.payload.preventDefault();
        const titleTrim = state.title.trim();
        if (titleTrim) {
          let todoData = {
            id: state.datas.length + 1,
            title: state.title,
            isComplete: state.isComplete,
          };
          if (state.edit) {
            todoData = {
              id: state.id,
              title: state.title,
              isComplete: state.isComplete,
            };
            state.datas[state.id - 1] = todoData;
          } else {
            state.datas.push(todoData);
          }
          Datas = state.datas;
          return { ...state, edit: false, title: "" };
        }
        return { ...state };
      case "error":
        return { ...state, error: action.payload };
      case "isComplete":
        action.payload === "not complete"
          ? (action.payload = "complete")
          : (action.payload = "not complete");
        return { ...state, isComplete: action.payload };
      case "toggle":
        if (action.payload.isComplete === "not complete")
          Datas[action.payload.id - 1].isComplete = "complete";
        else Datas[action.payload.id - 1].isComplete = "not complete";
        return { ...state, datas: Datas };
      case "edit":
        return {
          ...state,
          id: action.payload.id,
          title: action.payload.title,
          isComplete: action.payload.isComplete,
          edit: true,
        };
      case "delete":
        Datas = state.datas.filter((oneData) => oneData.id !== action.payload.id);
  
        return { ...state, datas: Datas };
      default:
        return state;
    }
  };
  export default reducer;
