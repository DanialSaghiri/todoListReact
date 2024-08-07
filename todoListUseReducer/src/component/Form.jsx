function Form({state,dispatch}) {
  const sub = (e) => {
    dispatch({ type: "submit", payload: e });

    if (state.title === "") {
      dispatch({ type: "error", payload: true });
      setTimeout(() => {
        dispatch({ type: "error", payload: false });
      }, 2000);
    }
  };
  return (
    <>
      <form action="" onSubmit={sub} className="todosList">
        {state.error && <p>you can not let title empty!!!!</p>}
        <section className="inputList">
          <input
            type="text"
            value={state.title}
            onChange={(e) =>
              dispatch({ type: "title", payload: e.target.value })
            }
          />
          <input
            type="checkbox"
            checked={state.isComplete === "not complete" ? false : true}
            value={state.isComplete}
            onChange={(e) => {
              dispatch({ type: "isComplete", payload: e.target.value });
            }}
          />
        </section>
        {state.edit ? (
          <button onClick={sub}>EDIT</button>
        ) : (
          <button onClick={sub}>ADD</button>
        )}
      </form>
    </>
  );
}
export default Form;
