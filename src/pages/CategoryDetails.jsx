import React from 'react';
import { useParams } from 'react-router-dom';
import { useCategory } from '../store/CategoryContext';
import StatusMessage from '../components/StatusMessage';


const CategoryDetails = () => {
  const { id } = useParams();
  const { categories, loading, error } = useCategory();

  if (loading) return <StatusMessage message=" ↻ Loading categories..." type="info" />;
  if (error) return <StatusMessage message={`⚠️ ${error.Message} `} type="error" />;

  const category = categories.find((cat) => cat.CategoryId.toString() === id);
 
  if (!category) {
    return <div>No category found</div>;
  }

return (
    <div className="text-center p-5">
        <h1 className="text-2xl font-bold mb-5">{category.Name}</h1>
        <div
            className="mx-auto flex items-center justify-center border border-gray-300 rounded-lg bg-gray-100"
            style={{
                width: `${category.Width}cm`,
                height: `${category.Height}cm`,
            }}
        >
            <p>Category Size: {category.Width} x {category.Height}</p>
        </div>
    </div>
);
}
export default CategoryDetails;