import ListItem from "./Item";
import style from "./List.module.scss";

function List() {
  const tasks = [
    {
      task: "React",
      time: "02:00:00"
    },
    {
      task: "Javascript",
      time: "01:00:00"
    },
    {
      task: "Typescript",
      time: "01:00:00"
    }
  ];
  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tasks.map((item, index) => 
        <ListItem
            {...item}
            key={index}
        />
        )}
      </ul>
    </aside>
  );
}

export default List;
