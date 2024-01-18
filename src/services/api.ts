import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://bc36-2804-14c-de87-83e7-20a2-bdab-8a53-16e2.ngrok-free.app/api/v1',
});