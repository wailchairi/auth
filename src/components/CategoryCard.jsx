import { Link } from "react-router-dom";

const CategoryCard = ({ name, width, height, id }) => {
  return (
    <Link to={`/category/${id}`}>
      <div
        className={`
            m-4
          bg-[#D9D9D9] border border-gray-200 shadow-sm rounded-lg 
           justify-center text-center 
          text-[#3C3C3C] font-bold 
          hover:shadow-md hover:bg-[#BBBBBB] 
          transition 
          
        `}
        style={{
          width: width ? `${width}cm` : '7cm',
          height: height ? `${height}cm` : '7cm',
        }}
      >
        <h3 className="text-lg mt-8">{name}</h3>
      </div>
    </Link>
  );
};

export default CategoryCard;
