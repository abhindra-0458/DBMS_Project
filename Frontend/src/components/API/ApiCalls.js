import axios from 'axios';

export const login = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:8081/login', { email, password });
    return response.data;
  } catch (error) {
    console.error("Login Error:", error);
    throw error;
  }
};


export const signup = async (newUser) => {
   try {
      const response = await axios.post('http://localhost:8081/signup', newUser);
      return response.data;
   } catch (error) {
      console.error("Signup Error:", error);
      throw error;
   }
};