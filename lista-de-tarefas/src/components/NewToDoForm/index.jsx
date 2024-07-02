import { useContext } from "react";
import { ListaTarefaContext } from "../../context/ToDos";
import ToDo from "../ToDo";
import style from "../style/NewToDoForm.module.css";
import { GoPlus } from "react-icons/go";

const NewToDoForm = () => {
  const { tarefas, infoForm, register, handleSubmit, removerTarefa } =
    useContext(ListaTarefaContext);

  return (
    <div>
      <form className={style.containerForm} onSubmit={handleSubmit(infoForm)}>
        <input
          type="text"
          placeholder="Adicionar uma tarefa"
          {...register("tarefa")}
        />
        <button className={style.button}>
          <GoPlus className={style.icon} />
        </button>
      </form>
      <ToDo tarefas={tarefas} removerTarefa={removerTarefa} />
    </div>
  );
};

export default NewToDoForm;
