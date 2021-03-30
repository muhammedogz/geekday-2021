

import Layout from './layout';
import ConfContainer from './conf-container';
import Hero from './hero';
import Logo from "./geek-main-logo"
import style from "./geek-background.module.css"
import Iframe from 'react-iframe'



export default function Conf({
  } ) {
  
    return (
        <Layout>
            <div className={style.bg}>
            <br ></br>

                <Logo />
            <div className={style.ortala}>
                <h1>Geekday Nedir</h1>
                <p>
                    Geekday, <a href="https://btgtu.com/linkler/" target="_blank">Gebze Teknik Bilgisayar Topluluğu</a>'nun bu sene beşincisini düzenlediği bir salon etkinliğidir.
                    </p>
                <p>
                    Geekday, bilgisayar ve yazılım dünyasından, sektör içerisinde tecrübeli isimleri konuşmacı olarak davet etmeyi, konuşmacılarından kazandikları deneyimleri, alanlarına yönelik şekilde konuklarına aktarılmasında aracı olmayı ilke edinir.
                    </p>
                <p>
                    Dünyamızı global düzeyde etkisi altına alan pandemi dolayısla, 2021 yılı içerisinde online olarak gerçekleşecektir.
                </p>
                <p>
                    Etkinlik boyunca, en güncel haberlere ulaşmak için, topluluk <a href="https://btgtu.com/linkler/" target="_blank">hesaplarımızı</a> takip edebilir ve de etkinlik telegram sayfamıza katılabilirsiniz.
                    <br></br>
                    <br></br>
                    Geekday2021 Telegram Sayfası: <a href="https://t.me/geekday2021" target="_blank">Tık Tık</a>
                </p>
            </div>

        </div>
        <Iframe 
                url={"https://www.youtube.com/live_chat?v=gnyW6uaUgk4&embed_domain=" + "geekday.live"}
                    width="450px"
                    height="450px"
                    id="gnyW6uaUgk4"
                    className="myClassname"
                    
                    position="relative"
                    referrerpolicy = "origin"
                />
        </Layout>
        )
}