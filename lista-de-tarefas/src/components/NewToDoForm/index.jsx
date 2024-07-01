import { useContext } from "react";
import { ListaTarefaContext } from "../../context/ToDos";
import ToDo from "../ToDo";
import style from "../style/NewToDoForm.module.css"

const NewToDoForm = () => {
  const { tarefas, infoForm, register, handleSubmit, removerTarefa } =
    useContext(ListaTarefaContext);

  return (
    <div>
      <form className={style.container} onSubmit={handleSubmit(infoForm)}>
        <input
          type="text"
          placeholder="Exemplo: Estudar"
          {...register("tarefa")}
        />
        <button>Adicionar Tarefa</button>
      </form>
      <ToDo tarefas={tarefas} removerTarefa={removerTarefa} />
    </div>
  );
};

export default NewToDoForm;