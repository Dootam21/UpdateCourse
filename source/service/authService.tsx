// apiService.ts
import axios from 'axios';
import User from '../Interface/User';

export const login = async (email: string, password: string): Promise<User> => {
    try {
        const response = await axios.post('https://httpbin.org/post', {
            email,
            password,
        });

        return response.data;
    } catch (error) {
        throw new Error('Login failed');
    }
};
