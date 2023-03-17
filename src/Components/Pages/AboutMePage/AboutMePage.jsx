import PagesAnimated from "../../PagesAnimated/PagesAnimated";
import { useSelector } from "react-redux";
import Gallery from "../../PagesComponents/Gallery/Gallery";
import styles from "./AboutMePage.module.css"

const AboutMePage = () => {
  const language = useSelector((state) => state.myLanguage);
  return (
    <PagesAnimated>
      <div className={styles.blockInfo}>
        <div className={styles.img}></div>
        <div className={styles.text}><h2>{language === "ua" ? "Про мене" : "About me"}</h2><p>Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так. Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, "consectetur", и занялся его поисками в классической латинской литературе. В результате он нашёл неоспоримый первоисточник Lorem Ipsum в разделах 1.10.32 и 1.10.33 книги "de Finibus Bonorum et Malorum" ("О пределах добра и зла"), написанной Цицероном в 45 году н.э. Этот трактат по теории этики был очень популярен в эпоху Возрождения. Первая строка Lorem Ipsum, "Lorem ipsum dolor sit amet..", происходит от одной из строк в разделе 1.10.32</p></div>
      </div>
      <Gallery/>
    </PagesAnimated>
  );
};

export default AboutMePage;
