import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

// Fetch all cities
export const fetchCities = async () => {
    const response = await axios.get(`${API_BASE_URL}/areas/cities`);
    return response.data;
  };
  
// Fetch areas for a specific city
export const fetchAreasByCity = async (cityId) => {
const response = await axios.get(`${API_BASE_URL}/areas/${cityId}/areas`);
return response.data;
};

// Submit a delivery request
export const scheduleDelivery = async (deliveryData) => {
const response = await axios.post(`${API_BASE_URL}/deliveries`, deliveryData);
return response.data;
};