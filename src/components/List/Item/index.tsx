import style from "../List.module.scss";

interface ListItemInterface {
    task: string;
    time: string;
}

function ListItem({task, time}: ListItemInterface) {
  return (
    <li className={style.item}>
      <h3>
        {task}
      </h3>
      <span>
        {time}
      </span>
    </li>
  );
}

export default ListItem;
