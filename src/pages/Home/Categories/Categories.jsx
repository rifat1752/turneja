import { useSearchParams } from "react-router-dom";
import { categories } from "./Categoriesdata";
import Category from "./Category";

const Categories = () => {
  // eslint-disable-next-line no-unused-vars
  const [params, setParams] = useSearchParams();
  const category = params.get("category");
  console.log(category);
  return (
  
     <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000" className="relative md:mx-5    my-10   ">
        <div className="flex rounded  gap-10  overflow-x-auto  bg-slate-50 focus:touch-pan-x
         scrollbar-none h-16 ">
     <div className="text-center   flex items-center justify-center  h-16 font-semibold text-[yellow] p-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded">Categories</div>

          {categories.map((item) => (
            <Category
              key={item.label}
              label={item.label}
              icon={item.icon}
              selected={category === item.label}
            ></Category>
          ))}
        </div>
       
    </div>
  );
};

export default Categories;
