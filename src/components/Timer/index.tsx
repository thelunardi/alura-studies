import { useEffect, useState } from "react";

import Button from "../Button";
import Clock from "./Watch";
import { timeToSeconds } from "../../common/utils/time";
import ITask from "../../types/Task";

import style from "./Timer.module.scss";

interface Props {
    selected: ITask | undefined;
    finishTask: () => void;
}


function Timer({ selected, finishTask }: Props) {
  const [time, setTime] = useState<number>();
  // if "jogado" renderiza infinitamente, too many re-renders
  useEffect(() => {
    if (selected?.time) {
        setTime(timeToSeconds(selected.time));
      }
  }, [selected]);

  function regressive(counter: number = 0) {
    setTimeout(() => {
        if (counter > 0) {
            setTime(counter - 1);
            return regressive(counter - 1)
        }
        finishTask();
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha o card e inicie o cronômetro</p>      
      <div className={style.relogioWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => regressive(time)}>Começar!</Button>
    </div>
  );
}

export default Timer;
