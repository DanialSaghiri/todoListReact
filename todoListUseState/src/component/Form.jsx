function Form({submitform,erorr,title,setTitle,isComplete,setIsComplete,edit}) {
  

  return (
    <>
      <form action="" onSubmit={submitform} className="todosList">
        {erorr && <p>you can not let title empty!!!!</p>}
        <section className="inputList">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="checkbox"
            checked={isComplete === "not complete" ? false : true}
            value={isComplete === "not complete" ? "complete" : "not complete"}
            onChange={(e) => setIsComplete(e.target.value)}
          />
        </section>
        {edit ? (
          <button onClick={submitform}>EDIT</button>
        ) : (
          <button onClick={submitform}>ADD</button>
        )}
      </form>
    </>
  );
}
export default Form;
