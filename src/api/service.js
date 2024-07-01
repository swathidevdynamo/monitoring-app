import axios from 'axios';

const API_URL = 'http://localhost:8005/api/stats';

export const getCpuUsage = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};
