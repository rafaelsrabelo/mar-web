import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://bfdf-2804-14c-de87-83e7-c958-1398-2194-3236.ngrok-free.app/api/v1',
});