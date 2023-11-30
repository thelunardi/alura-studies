import Button from "../Button";
import Clock from "./Watch";

import style from "./Timer.module.scss";

function Timer() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha o card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock />
            </div>
            <Button>
                Começar!
            </Button>
        </div>
    )
}

export default Timer;