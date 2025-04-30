import Hero from "../components/Hero";
import { useCategory } from "../store/CategoryContext";
import CategoryCard from "../components/CategoryCard";
import StatusMessage from "../components/StatusMessage";

const Home = () => {
  const { categories, loading, error } = useCategory();


    if (loading) return <StatusMessage message=" ↻ Loading categories..." type="info" />;
    if (error) return <StatusMessage message={`⚠️ ${error.Message} `} type="error" />;

  return (
    <>
      <Hero />
      <div className="w-full flex flex-wrap justify-center gap-4 mt-8">

                {categories.map((cat) => (
         
                  <CategoryCard   className="bg-white text-[#234781] font-bold px-6 py-2 rounded-full shadow-sm border border-gray-200 cursor-pointer hover:bg-[#e6eefb] transition" 
                  key={cat.CategoryId}  
                  id={cat.CategoryId}  
                  name={cat.Name} 
                  width={cat.Width}
                  height={cat.Height}  />

            ))}
            </div>
      </>
  );
};

export default Home;
