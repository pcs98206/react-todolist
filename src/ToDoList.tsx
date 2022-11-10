import { useState } from "react";
import { useForm } from "react-hook-form";

/* const ToDoList = () => {
  const [toDo, setTodo] = useState("");
  const [toDoError, setToDoError] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setToDoError("");
    setTodo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (toDo.length < 10) {
      return setToDoError("To do should be longer");
    }
    console.log(toDoError);
  };
  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write a to do"
        />
        <button>Add</button>
        {toDoError !== "" ? toDoError : null}
      </form>
    </div>
  );
}; */

const ToDoList = () => {
  const { register, watch } = useForm();
  console.log(watch());
  return (
    <div>
      <form action="">
        <input {...register("toDO1")} type="text" placeholder="Write a to do" />
        <input {...register("toDO2")} type="text" placeholder="Write a to do" />
        <input {...register("toDO3")} type="text" placeholder="Write a to do" />
        <input {...register("toDO4")} type="text" placeholder="Write a to do" />
        <input {...register("toDO5")} type="text" placeholder="Write a to do" />
        <button>Add</button>
      </form>
    </div>
  );
};

export default ToDoList;
