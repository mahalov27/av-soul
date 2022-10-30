import { useParams } from "react-router-dom";
import PagesAnimated from "../../PagesAnimated/PagesAnimated";

const CategoryPage = () => {
  const { category } = useParams();
  return (
    <PagesAnimated>
      <h1>{category}</h1>
    </PagesAnimated>
  );
};

export default CategoryPage;
