import style from "./button-bilet.module.css"

const target = "https://www.eventbrite.com/e/geekday-2021-tickets-143585657567"
export default function App() {
  return (
    <div className={style.div}>
        <div className={style.Center}>
        <a className={style.link}  href={target} target="_blank">
            <button className={style.bilet} >{<>Bilet Al</>}</button>
        </a>
        </div>
    </div>
  );
}