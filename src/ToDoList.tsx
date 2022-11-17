import { useForm } from "react-hook-form";

interface IForm {
  toDo: string;
}

const ToDoList = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>();
  const handleValid = (data: IForm) => {
    console.log(data.toDo);
    setValue("toDo", "");
  };
  console.log(errors);
  return (
    <div>
      <form action="" onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", { required: "Write a To Do" })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default ToDoList;
