import axios from 'axios';
 

const API_BASE_URL="https://api-dev.flexdok.com/api"

export const fetchCategories = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/categories`);
        return response.data;
    } catch (error) {  
        console.error('Error fetching categories:', error);
        throw error;
    }
    };