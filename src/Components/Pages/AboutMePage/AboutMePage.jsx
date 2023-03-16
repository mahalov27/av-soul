import PagesAnimated from "../../PagesAnimated/PagesAnimated";
import { useSelector } from "react-redux";

const AboutMePage = () => {
  const language = useSelector((state) => state.myLanguage);
  return (
    <PagesAnimated>
      <h1>{language === "ua" ? "Про Мене" : "About Me"}</h1>
    </PagesAnimated>
  );
};

export default AboutMePage;
