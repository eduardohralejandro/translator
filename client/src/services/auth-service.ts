import axios from 'axios';

const API_URL = 'http://localhost:3000/api/auth';


class AuthService {
    async login(email: string, password: string ) {
        const response = await axios.post(`${API_URL}/login`, { email, password })
        if (response.data.token) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
    }

    logout() {
        localStorage.removeItem('user');
    }

    async register(name: string, email: string, password: string) {
       const response = await axios.post(`${API_URL}/create`, {
            name,
            email,
            password,
        })
        
        localStorage.setItem('user', JSON.stringify(response.data));
        return response.data
    }
}


export default new AuthService();