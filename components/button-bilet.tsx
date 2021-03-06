import style from "./button-bilet.module.css"

const openInNewTab = (url: string | undefined) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}


export default function App() {
  return (
    <div className={style.div}>
        <div className={style.Center}>
        <a className={style.link} onClick={() => openInNewTab('https://kommunity.com/gebze-teknik-universitesi-bilgisayar-toplulugu/events/geekday2021-abbfec06')} target="_blank">
            <button className={style.bilet} >{<>Bilet Al</>}</button>
        </a>
        </div>
    </div>
  );
}