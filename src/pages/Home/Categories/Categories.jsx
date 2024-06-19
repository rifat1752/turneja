import { useSearchParams } from "react-router-dom";
import Container from "../../../components/Shared/Container";
import { categories } from "./Categoriesdata";
import Category from "./Category";

const Categories = () => {
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  console.log(category);
  return (
    <div>
      <Container>
        <div className="flex gap-8 pt-4 overflow-x-auto no-scrollbar bg-slate-50 focus:touch-pan-x">
          {categories.map((item) => (
            <Category
              key={item.label}
              label={item.label}
              icon={item.icon}
              selected={category === item.label}
            ></Category>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Categories;
