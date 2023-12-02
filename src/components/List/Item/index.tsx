import ITask from "../../../types/Task";
import style from "./Item.module.scss";

interface Props extends ITask {
  selectTask: (selectedTask: ITask) => void;
}

function ListItem({ task, time, selected, completed, id, selectTask }: Props) {
  return (
    <li 
      className={
        `${style.item} 
         ${selected ? style.itemSelecionado : ''} 
         ${completed ? style.itemCompletado : ''}`}
      onClick={() => !completed && selectTask({
          task,
          time,
          selected,
          completed,
          id,
        }
      )}
    >
      <h3>
        {task}
      </h3>
      <span>
        {time}
      </span>
      {completed && <span className={style.concluido} aria-label="Tarefa completada!"></span>}
    </li>
  );
}

export default ListItem;
