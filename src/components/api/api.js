import axios from 'axios';

const API_URL = 'https://api.example.com';

export const fetchProjects = async () => {
    try {
        const response = await axios.get(`${API_URL}/projects`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch projects');
    }
};
