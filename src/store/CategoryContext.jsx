import  { createContext, useContext, useState ,useEffect,} from 'react';
import { fetchCategories } from '../services/categoryService';

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
                    fetchCategories()
                        .then(data => { setCategories(data); setLoading(false); })
                        .catch(error => {  setError(error); setLoading(false); });
                    }
    , []);

    return (
        <CategoryContext.Provider value={{ categories, loading, error }}>
            {children}
        </CategoryContext.Provider>
    );
};

export const useCategory = () => useContext(CategoryContext);
