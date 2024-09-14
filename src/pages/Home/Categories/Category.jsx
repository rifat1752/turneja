/* eslint-disable react/prop-types */
import { useNavigate, useSearchParams } from "react-router-dom";
import qs from'query-string'


const Category = ({ label, icon: Icon, selected }) => {
  console.log(selected)
    // eslint-disable-next-line no-unused-vars
    const [params, setParams] = useSearchParams()
    // params.get('category')
    const navigate = useNavigate();

    const handleClick =()=>{
        let currentQuery = {};
        if(params){
            currentQuery = qs.parse(params.toString())
            const updatedQuery = {...currentQuery, category: label}
            const url = qs.stringifyUrl({
              url: '/',
              query: updatedQuery,
            })
            navigate(url)
        }
    }
    params.get('category');

  return (
    <div  onClick={handleClick} className={`flex flex-col   items-center justify-center  gap-2 p- ${selected?'border-b-4 border-purple-500':''}  hover:text-neutral-800 transition cursor-pointer`}>
      <Icon />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default Category;
