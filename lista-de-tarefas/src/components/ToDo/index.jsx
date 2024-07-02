import style from "../style/ToDo.module.css";
import { ImCheckboxUnchecked } from "react-icons/im";

const ToDo = ({ tarefas, removerTarefa }) => {
  return (
    <div>
      {tarefas.map((tarefa, index) => (
        <div key={index} className={style.lista}>
          <p className={style.tarefas}>{tarefa}</p>
          <button onClick={() => removerTarefa(index)}>
            <ImCheckboxUnchecked />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToDo;
