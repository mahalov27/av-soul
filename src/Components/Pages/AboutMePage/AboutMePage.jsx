import PagesAnimated from "../../PagesAnimated/PagesAnimated";
import { useSelector } from "react-redux";

const AboutMePage = () => {
  const actualityLanguage = useSelector((state) => state.myLanguage);
  return (
    <PagesAnimated>
      <h1>{actualityLanguage.ua ? "Про Мене" : "About Me"}</h1>
    </PagesAnimated>
  );
};

export default AboutMePage;
