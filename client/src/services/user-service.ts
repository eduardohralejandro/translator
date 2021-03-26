import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:3000/api';


class UserService {
  getPublicContent(): Promise<void> {
    return axios.get(API_URL + '/links');
  }

  getUserBoard(): Promise<void> {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard(): Promise<void> {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard(): Promise<void> {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }
}

export default new UserService();