import style from "./Watch.module.scss";

function Clock({time = 0}: {time: number | undefined}) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minuteTen, minuteUnity] = String(minutes).padStart(2, '0');
    const [secondsTen, secondUnity] = String(seconds).padStart(2, '0');
    return (
        <>
            <span className={style.relogioNumero}>{minuteTen}</span>
            <span className={style.relogioNumero}>{minuteUnity}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{secondsTen}</span>
            <span className={style.relogioNumero}>{secondUnity}</span>
        </>
    )
}

export default Clock;