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

interface IFormData {
  email: string;
  toDO2: string;
  toDO3: string;
  toDO4: string;
  toDO5: string;
  extraError?: string;
}

const ToDoList = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IFormData>({
    defaultValues: {
      email: "naver.com",
    },
  });
  const onValid = (data: IFormData) => {
    if (data.toDO2 !== data.toDO3) {
      setError(
        "toDO2",
        { message: "ToDo2 is not the same" },
        { shouldFocus: true }
      );
    }
    // setError("extraError", { message: "Server offline" });
  };
  console.log(errors);
  return (
    <div>
      <form
        action=""
        onSubmit={handleSubmit(onValid)}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <input
          {...register("email", {
            required: "email is required",
            minLength: {
              value: 5,
              message: "email is very short",
            },
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          type="text"
          placeholder="email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("toDO2", {
            required: "write here",
          })}
          type="text"
          placeholder="Write a to do"
        />
        <span>{errors?.toDO2?.message}</span>
        <input
          {...register("toDO3", { required: "write here" })}
          type="text"
          placeholder="Write a to do"
        />
        <span>{errors?.toDO3?.message}</span>
        <input
          {...register("toDO4", {
            required: "write here",
            validate: {
              noNico: (value) =>
                value.includes("nico") ? "no nicos allowed" : true,
              noSk: (value) => (value.includes("sk") ? "no sks allowed" : true),
            },
          })}
          type="text"
          placeholder="Write a to do"
        />
        <span>{errors?.toDO4?.message}</span>
        <input
          {...register("toDO5", { required: "write here" })}
          type="text"
          placeholder="Write a to do"
        />
        <span>{errors?.toDO5?.message}</span>
        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
};

export default ToDoList;
